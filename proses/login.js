function login(){
var usernameData = getUrlVars()["username"];
	var passwordData = getUrlVars()["password"];
	var serviceURL = "http://loarlo.com/mobile/";
	var url_admin	 = 'http://loarlo.com/mobile/admin.html';
		
	$.ajax({
				type : 'GET',				
				url : serviceURL + 'log.php?username='+usernameData +'&password=' +passwordData,
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){	
					var hasil;
					SistemPakar = data.items;
					$.each(SistemPakar, function(index, loaddata) {
							hasil = loaddata.ret;
					});
					if (hasil == '1')
					{
						alert('hallo pimpinan');
						window.location = url_admin;
						
					}
			
					else
					{
						alert('ID Pegawai/Password anda salah');
					}		
				},
				error : function(){
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});
		}

function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}



