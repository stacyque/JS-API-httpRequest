//var btn = document.getElementById('btn');
//var output = document
var xhr = new XMLHttpRequest();
var url = "http://restcountries.eu/rest/v2/all";

xhr.onreadyStatechange = function(){
    if (xhr,readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.response)
        for (var x = 0;x<data.length;x++){
             var opt = document.createElement("option");
             opt.innterText = data[x].name;
             document.querySelector("#clist").appendChild(opt);
         }
    }
}
xhr.open('GET',url);
xhr.send();