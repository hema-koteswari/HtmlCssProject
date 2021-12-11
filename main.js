function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.profile)
})
function display(mobile){
    for(var k=1;k<mobile.length;k++){
        console.log(mobile)
    }
}
var rowdata=document.querySelector(".row")
for(var k=1;k<mobile.length;k++){
    console.log(mobile)
console.log(rowdata)
var card=document.createElement("div")
card.classList.add("card")
rowdata.appendChild("img")
var img=document.createElement("img")
img.src=mobile[k].img
console.log(img)
var sname=document.createElement("h1")
console.log(sname)
sname.textContent=mobile[k].name;
card.appendChild(img)
}
