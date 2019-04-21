$(document).ready(function () {

	var dates=[{id:"1",date:"27/03/2019"},{id:"2",date:"28/03/2019"},{id:"3",date:"01/04/2019"}];

	S1={slotid:"1",dateid:"1",date:"27/03/2019",time:"10 to 11",num:"1"};
	S2={slotid:"2",dateid:"1",date:"27/03/2019",time:"11 to 12",num:"2"};
	S3={slotid:"3",dateid:"2",date:"28/03/2019",time:"10 to 11",num:"1"};
	S4={slotid:"4",dateid:"3",date:"01/04/2019",time:"10 to 11",num:"1"};

	slots=[S1,S2,S3,S4];

	displayDates(dates);
	assignSlots(slots);

	$(".classdatediv").on("click",function () {
		var dateid=$(this).attr("id").split("_")[1];
		$("#idslotlist_"+dateid).slideToggle("fast");
	});

	function displayDates(table) {
		var str="";

		for (var i = 0; i < table.length; i++) {
			var id=table[i].id;
			var date=table[i].date;
			var addition="<div class='classday'><div class='classdatediv' id='iddatediv_"+id+"'><a id='iddatea_"+id+"'> "+date+" </a></div> <div class='classslotlist' id='idslotlist_"+id+"'> </div></div>";
			str+=addition;
		}
		$("#iddateslist").append(str);
	}

	function assignSlots(table){
		for (var i = 0; i < table.length; i++) {
			var dateid=table[i].dateid;
			var time=table[i].time;
			//Later based on booking condition you will change class name
			$("#idslotlist_"+dateid).append("<div class='classslot classslotRed ' > "+time+" </div>");	
		}
	}

	function assignTimings(table) {
		var udates=[];
		var strarray={};

		for (var i = 0; i < table.length; i++) {
			if(table[i] in strarray){
			}
			else{
				udates.push(table[i].date);
				strarray.table[i]="<div class='classtimelist' id='idtimelist.'"+date+"> ";				
			}
		}

/*
		for (var i = 0; i < udates.length; i++) {
			strarray.udates[i]="<div class='classtimelist' id='idtimelist.'"+date+"> ";
		}
*/
		for (var i = 0; i < table.length; i++) {
			var date=table[i].date;
			var str="<div class='classtimediv' id='idtimediv."+date+"."+table[i].num+"'><a class='classtimea' id='idtimea."+date+"."+table[i].num+"'> </a></div>";
			strarray.date+=str;
		}

		for (var i = 0; i < udates.length; i++) {
			var date=udates[i];
			strarray.date+="</div>";
			$("#iddatediv"+date).append(strarray.date);
		}
/*
		for (var i = 0; i < udates.length; i++) {
			var date=udates[i];
			$("#iddatediv"+date).append(strarray.date);
		}
*/

	}
});