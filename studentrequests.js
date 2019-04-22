$(document).ready(function () {

	var dates=[{id:"1",date:"27/03/2019"},{id:"2",date:"28/03/2019"},{id:"3",date:"01/04/2019"}];

	S1={slotid:"1",dateid:"1",date:"27/03/2019",time:"10 to 11",num:"1"};
	S2={slotid:"2",dateid:"1",date:"27/03/2019",time:"11 to 12",num:"2"};
	S3={slotid:"3",dateid:"2",date:"28/03/2019",time:"10 to 11",num:"1"};
	S4={slotid:"4",dateid:"3",date:"01/04/2019",time:"10 to 11",num:"1"};

    slots=[S1,S2,S3,S4];
    
    R1={slotid:"1",studentname:"Mahith",requestid:"1"}
    R2={slotid:"1",studentname:"Praneeth",requestid:"2"}
    R3={slotid:"1",studentname:"Vamshi",requestid:"3"}
    R4={slotid:"2",studentname:"Gnaneswer",requestid:"4"}
    R5={slotid:"4",studentname:"Alan",requestid:"5"}

    requests=[R1,R2,R3,R4,R5];

	displayDates(dates);
    assignSlots(slots);
    assignRequests(requests);

	$(".classdatediv").on("click",function () {
		var dateid=$(this).attr("id").split("_")[1];
		$("#idslotlist_"+dateid).slideToggle("fast");
    });
    
    $(".classacceptbutton").on("click",function(){
        var id=$(this).attr("id");
        list=id.split("_");
        var slotid=list[1];
        var requestid=list[2];

        //MAKE CHANGES IN DATABASES

        $("#idslot_"+slotid).addClass("bookedslot");
        $("#idrequestlist_"+slotid).empty();
        
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
            var slotid =table[i].slotid;

			//Later based on booking condition you will change class name
			$("#idslotlist_"+dateid).append("<div ><div class='classslot' id='idslot_"+slotid+"' ><a id='idslota_"+slotid+"'>"+time+"</a></div> <div id='idrequestlist_"+slotid+"' > </div> </div>");	
		}
    }
    
    function assignRequests(table){
        for(var i=0;i<table.length;i++){
            request=table[i];
            var slotid=request.slotid;
            var requestid=request.requestid;
            var addition="<div class='classrequest'> <a >"+request.studentname+"</a> <button class='classacceptbutton' id='idacceptbutton_"+slotid+"_"+requestid+"'> Accept</button></div>";
            $("#idrequestlist_"+slotid).append(addition);
        }
    }
});