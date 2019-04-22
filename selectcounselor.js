$(document).ready(function(){
    C1={name:"Nalini",id:"1"};
    C2={name:"Kiran",id:"2"};

    counselorList=[C1,C2];
    
    displayCounselors(counselorList);

    function displayCounselors(table){
        var str="";
        for(var i=0;i<table.length;i++){
            counselor=table[i];
            var addition="<div class='classcounselor'><a>"+counselor.name+"</a></div>";
            str+=addition;
        }
        $("#idcouselorlist").append(str);
    }
});