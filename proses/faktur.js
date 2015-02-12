$(document).ready(function() {
		$("#proses").click( function(e){
			e.preventDefault();
			var awal = $("#tanggal_awal").val();
			var akhir = $("#tanggal_akhir").val();
			//alert(awal+''+akhir);
			if(awal==''){
				$('#required').show();
			}else if(akhir==''){
				$('#required').show();
			}else{
				//alert('');
				$('#lg-form').hide();
				//$('#required').hide();
				//$('#loading_panel').show();
				get_news(awal,akhir);
			}
		});

		
function get_news(awal,akhir){
	//alert(awal+' '+akhir);
	var serviceURL = "http://loarlo.com/mobile/";
	//var strAwal		= $("#tanggal_awal").val();
	//var strAkhir	= $("#tanggal_akhir").val();
	$.ajax({
				type : 'GET',
				url : serviceURL + 'faktur.php',
				async: true,
				data: {
					tanggal_awal: awal,
					tanggal_akhir: akhir
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},				
				dataType : 'json',
				success : function(data){
						//alert("sukses");
						
						SistemPakar = data.items;
						if(SistemPakar==''){
							//$('#loading_panel').hide();
							//$('#empty').show();
							//alert("kosong");
						}else{
							//alert("else");
							//$('#loading_panel').hide();
							
							$('#tampilData').show();
							jml=0;
							var faisal='';
							
							//faisal += '<table align="center" data-role="table" data-mode="columntoggle" data-mode="reflow" class="ui-body ui-responsive table-stripe" data-column-btn-theme="b" ><thead><tr>';
							faisal += '<table align="center" class="table table-striped table-hover" data-role="table" data-mode="columntoggle" data-mode="reflow" class="ui-body ui-responsive table-stripe" data-column-btn-theme="b"><thead><tr>';
							faisal += '<th>Nomor Faktur</th><th data-priority="1">Tanggal Faktur</th><th data-priority="2">Nama Konsumen</th><th data-priority="3">Total Bayar </th>';
							faisal += '</tr></thead><tbody>';
							$.each(SistemPakar, function(index, loaddata) {
								var data = loaddata.no_faktur;
								//var tgl_masuk = loaddata.tgl_masuk;
								var tgl_faktur = loaddata.tgl_faktur;
								var nama_konsumen = loaddata.nama_konsumen;
								var total_bayar = loaddata.total_bayar;
								var a = parseInt(total_bayar)
								jml=jml+a;
								
								faisal +='<tr><td>'+data+'</td><td>'+tgl_faktur+'</td><td>'+nama_konsumen+'</td><td>'+total_bayar+'</td></tr>';
								//alert(jml);
							//alert ("data "+data); 
							/*$('#sispakList').append(
								);*/
							});
							faisal += '</tbody></table>';
							$('#sispakList').append(faisal);
							$('#jml').show();
							$('#hasil').append(
								'<br>'+
								' Total Penjualan : '+jml+ '' );
							/*
							$('#sispakList').listview('refresh');
							*/
						}
				},
				error: function(jqXHR, exception) {
					//$('#loading_panel').hide();
					//$('#conn_failed').show();
					alert("error");
				}
		});	
}
	
}); //Tutup Document Ready