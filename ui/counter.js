var button=document.getElementById("counter");
button.onclick=function()
{
    //creating reuest object
    var reqob=new XMLHTTPRequest();
    
    //response code
    reqob.onreadystatechange=function()
    {
        if(reqob.readyState===XMLHTTPRequest.DONE)
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