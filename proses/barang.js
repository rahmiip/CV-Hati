$(document).ready(function() {

$('#loading_panel').show();
get_news();

function get_news(){
	var serviceURL = "http://loarlo.com/mobile/";
	var SistemPakar;
	$.ajax({
				type : 'GET',
				url : serviceURL + 'barang.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						SistemPakar = data.items;
						if(SistemPakar==''){
							$('#loading_panel').hide();
							$('#empty').show();
						}else{
							$('#loading_panel').hide();
							$('#tampilData').show();
							$.each(SistemPakar, function(index, loaddata) {
								var data = loaddata.id_barang;
								var nama_barang = loaddata.nama_barang;
								var stock = loaddata.stock;
								var jumlah_barang = loaddata.harga_jual;
							$('#sispakList').append(
									'<li><li><br>' +
								'<h20> ID Barang : ' + loaddata.id_barang + '</h20>' +
								'<br><h20> Nama Barang : ' + loaddata.nama_barang +'</20>' +
								'<br><h20> Stock : ' + loaddata.stock +'</h20>' +
								'<br><h20> Harga Jual : ' + loaddata.harga_jual +'</20> <br>');
							});
							$('#sispakList').listview('refresh');
						}
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});	
}
	

}); //Tutup Document Ready









