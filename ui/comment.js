var submit=document.getElementById("submit-btn");
submit.onclick=function()
{
    var req=new XMLHttpRequest();
    req.onreadystatechange=function()
    {
         if(req.readyState===XMLHttpRequest.DONE)
         {
             if(req.status===200)
             {
                 comment=JSON.parse(this.responseText);
                  var list='';
               for(var i=0;i<comment.length;i++)
               {
                   list+='<div>'+'<li>'+comment[i]+'</li>'+'/div';
               }
               var lis=document.getElementById("comment");
               lis.innerHTML=list;
             }
         }
    }
    var input=document.getElementById("comment-box");
    var name=input.value;
    req.open('GET','http://venkat5290.imad.hasura-app.io/add-comment?comment='+name,'true');
    req.send(null);
}
