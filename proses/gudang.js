$(document).ready(function() {

$('#loading_panel').show();
get_news();

function get_news(){
	var serviceURL = "http://loarlo.com/mobile/";
	var SistemPakar;
	$.ajax({
				type : 'GET',
				url : serviceURL + 'gudang.php',
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
								var data = loaddata.tgl_masuk;
								//var tgl_masuk = loaddata.tgl_masuk;
								var nama_barang = loaddata.nama_barang;
								var harga_beli = loaddata.harga_beli;
								var nama_vendor = loaddata.nama_vendor;
								var jumlah_barang = loaddata.jumlah_barang;								
							$('#sispakList').append(
								'<li> <br>' +
								'<h20> Tanggal Masuk : '+ loaddata.tgl_masuk + '</h20>' +
								'<br><h20> Nama Barang : '+ loaddata.nama_barang + '</h20>' +
								'<br><h20> Harga Beli : '+ loaddata.harga_beli + '</h20>' +
								'<br><h20> Nama Vendor : '+ loaddata.nama_vendor + '</h20>' +
								'<br><h20> Jumlah Beli : '+ loaddata.jumlah_barang + '</h20>');
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









