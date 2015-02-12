<script type="text/javascript">
	
	$(document).ready(function(){
		$("#login").click(function(){
			var url_admin	 = 'http://loarlo.com/mobile/admin.html';
			var url_index	 = 'http://loarlo.com/mobile/index.html';
			var form_data = {
				username: $("#username").val(),
				password: $("#password").val(),
				is_ajax: 1
			};
			
			$.ajax({
				type : 'GET',				
				url : serviceURL + 'login.php?username='+usernameData +'&password=' +passwordData,
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				success : function(data){	
					var hasil;
					SistemPakar = data.items;
					$.each(SistemPakar, function(index, loaddata) {
							hasil = loaddata.ret;
					});
				
					if(hasil == "1") {
						//alert('Selamat Datang Pimpinan');
						window.location = url_admin;
						
						}
			
					else if (hasil == "2"){
						//alert('Maaf, Username atau Password Anda Salah');
						//window.location = url_index;
						$("#message").html('<p class="error">ERROR: username atau password yang anda masukkan salah</p>');
						
						}
				}	
			});
			return false;
		});
	}); 
	</script>