var counetr=0;
var button=document.getElementById("counter");
button.onclick=functio()
{
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter;
}