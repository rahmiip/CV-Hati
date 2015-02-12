
<!DOCTYPE html>
<html>
<head>
	
	<title>jQuery Mobile: jQuery UI Datepicker Monkey Patch</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="jquery.mobile.min.css" rel="stylesheet">
	<script src="jquery.min.js"></script>
	<script src="jquery.mobile.min.js"></script>
	<script src="jquery-ui.custom.js"></script>
	<script src="faisal.js"></script>
	<link href="faisal.css" rel="stylesheet">
</head>
<body>
	<div data-role="page">
		<div data-role="header">
			<h1>Choose Dates</h1>
		</div>
		<div role="main" class="ui-content">
			<form action="index.html">
				<h3 class="demo-info">Default functionality (opens virtual keyboard)</h3>
				<div class="ui-field-contain">
					<label for="DP1">Demo 1</label>
					<input id="DP1" type="text">
				</div>
				<h3 class="demo-info">Read-only Input (prevent virtual keyboard)</h3>
				<div class="ui-field-contain">
					<label for="DP2">Demo 2</label>
					<input id="DP2" type="text">
				</div>
				<h3 class="demo-info">Show Button Panel</h3>
				<div class="ui-field-contain">
					<label for="DP3">Demo 3</label>
					<input id="DP3" type="text">
				</div>
				<h3 class="demo-info">Read-only + Show on Button</h3>
				<div class="ui-field-contain">
					<label for="DP4">Demo 4</label>
					<input id="DP4" type="text" data-wrapper-class="dp-input-button-wrap">
				</div>
				<h3 class="demo-info">Datepicker in Full-width Popup</h3>
				<div class="ui-field-contain">
					<label for="DP5">Demo 5</label>
					<input id="DP5" type="text">
				</div>
			</form>
			<div id="dp-fullsize" data-role="popup" data-dismissible="false" data-history="false" data-position-to="window">
				<a href="#" data-rel="back" data-role="button" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>
			</div>
			<script>
				/*
				 * Datepicker Demos
				 */
				$(document).on("pagecreate", function() {
					$("#DP1").datepicker();
					$("#DP2").prop("readonly", true).datepicker();
					$("#DP3").prop("readonly", true).datepicker({
						showButtonPanel: true
					});
					$("#DP4").datepicker({
						showOn: "button",
						beforeShow: function() {
							$(this).prop("readonly", true);
						},
						onClose: function() {
							$(this).prop("readonly", false);
						}
					});
					$("#DP5").on("focus", function() {
						$("#dp-fullsize").popup("open");
					});
					$("#dp-fullsize").datepicker({
						altField: "#DP5",
						onSelect: function() {
							$(this).popup("close");
						}
					});
				});
			</script>
		</div>
		<div data-role="footer">
			<h4>Don't forget to view page source.</h4>
		</div>
	</div>
</body>
</html>
