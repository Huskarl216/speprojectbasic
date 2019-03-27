$(document).ready(function () {

	var dates=["27/03/2019","28/03/2019","01/04/2019"];


	displayDates(dates);
	function displayDates(table) {
		var str="";

		for (var i = 0; i < table.length; i++) {
			var addition="<div class='classdatediv' id='iddatediv"+table[i]+"'><a id='iddatea"+table[i]+"'> "+table[i]+" </a></div>";
			str+=addition;
		}
		$("#iddateslist").append(str);
	}
});