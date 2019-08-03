var btn = document.getElementById('btn');
btn.addEventListener("click",function(){

    var xhr = new XMLHttpRequest(); //define XMLHttpRequest
    var url = 'https://randomuser.me/api/?results=20'; //define url

    xhr.onreadystatechange = function(){ //add function to xhr

        if (xhr.readyState == 4 && xhr.status == 200){ //condition
            var data = JSON.parse(xhr.response).results //array

            for (var x = 0; x<data.length;x++){ //for loop
                
                var para = document.createElement("p"); //create Element in js
                para.innerText = x + " - " + data[x].name.title + " " + data[x].name.first + " " + data[x].name.last; //content you want displayed
                para.id = "p"+x; //index
                document.querySelector("#content").appendChild(para);
                
                var imahe = document.createElement("img");
                imahe.src = data[x].picture.thumbnail;
                document.querySelector("#"+para.id).append(imahe);
            }
        }
    }    
    xhr.open('GET',url);
    xhr.send();
})