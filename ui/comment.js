var submit=document.getElementById("submit-btn");
submit.onclick=function()
{
    var req=new XMLHttpRequest();
    req.onreaystatechange=function()
    {
         if(req.readyState===req.XMLHttpRequest.DONE)
         {
             if(req.status===200)
             {
                 comment=JSON.parse(this.responseText);
                  var list='';
               for(var i=0;i<comment.length;i++)
               {
                   list+='<li>'+comment[i]+'</li>';
               }
               var lis=document.getElementById("comment");
               lis.innerHTML=list;
             }
         }
    }
    var input=document.getElementById("comment-box");
    var comment=input.value;
    reqob.open('GET','http://venkat5290.imad.hasura-app.io/add-comment/:comment','true');
    reqob.send(null);
}
