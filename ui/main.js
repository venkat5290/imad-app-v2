console.log('Executed Perfectly..Congratulations!!!!!');
var e=document.getElementById('main-body');
e.innerHTML="new value";

var img=document.getElementById('im');
var current=0;
img.onclick=function ()
{
  var interval=setInterval(moveRight,100);
}

function moveRight()
{
    current=current+5;
    img.style.marginLeft=current+"px";
}