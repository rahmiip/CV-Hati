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
				url : serviceURL + 'cari.php',
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
							$.each(SistemPakar, function(index, loaddata) {
								var data = loaddata.tgl_masuk;
								//var tgl_masuk = loaddata.tgl_masuk;
								var nama_barang = loaddata.nama_barang;
								var harga_beli = loaddata.harga_beli;
								var nama_vendor = loaddata.nama_vendor;
								var jumlah_barang = loaddata.jumlah_barang;	
								var a = parseInt(jumlah_barang)
								jml=jml+a;
								//alert(jml);
							//alert ("data "+data); 
							$('#sispakList').append(
								'<li><li><li> <br>' +
								'<h20> Tanggal Masuk : '+data+ '</h20>' +
								'<br><h20> Nama Barang : '+nama_barang+ '</h20>' +
								'<br><h20> Harga Beli : '+ harga_beli + '</h20>' +
								'<br><h20> Nama Vendor : '+ nama_vendor + '</h20>' +
								'<br><h20> Jumlah Barang : '+ jumlah_barang + '</h20><br>' );
							});
							$('#jml').show();
							$('#hasil').append(
								'<li> <br><br>' +
								'<h4> Total Barang Masuk : '+jml+ '</h4>' );
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









