var button=document.getElementById("counter");
button.onclick=function()
{
    //creating reuest object
    var reqob=new XMLHttpRequest();
    
    //response code
    reqob.onreadystatechange=function()
    {
        if(reqob.readyState===XMLHttpRequest.DONE)
        {
            if(reqob.status===200)
            {
                var counter=reqob.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
                
            }
        }
        
    }
    
    reqob.open('GET','http://venkat5290.imad.hasura-app.io/counter','true');
    reqob.send(null);
};

var input=document.getElementById("input_box");
var txtbox=input.value;
var submit=document.getElemetById("submit_b");
submit.onclick=function()
{
var names=['name1','name2','name3'];
var list='';
for(var i=0;i<names.length;i++)
{
    list+='<li>'+names[i]+'</li>';
}
submit.innerHtml=list;
};

