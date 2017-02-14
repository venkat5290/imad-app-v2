/*var button=document.getElementById("counter");
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

*/

//program to take name value from text field and send it to server and server returns us response that is typed name by using end point 


var submit=document.getElementById("submit_b");
submit.onclick=function()
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
               var response_string=reqob.reponseText;
               names=JSON.parse(resonse_string);
               var list='';
               for(var i=0;i<names.length;i++)
               {
                   list+='<li>'+names[i]+'</li>';
               }
               var lis=document.getElementById("name_list");
               lis.innerHTML=list;
            }
        }
        
    }
    var input=document.getElementById("input_box");
    var txtbox=input.value;
    reqob.open('GET','http://venkat5290.imad.hasura-app.io/submit-name?name='+txtbox,'true');
    reqob.send(null);
    
    
    
    
   /* var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var lis=document.getElementById("name_list");
    lis.innerHTML=list; */
};

