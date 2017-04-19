var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
                host:'db.imad.hasura-app.io',
                port:'5432',
                user:'venkat5290',
                password:'db-venkat5290-10695',
                database:'venkat5290',
            };
            
var pool=new Pool(config);
var app = express();
app.use(morgan('combined'));

//This is templating data
function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
var htmlTemplate=`<html>
<head>
    <title>
        ${title}
    </title>
   <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
   <div class="container">
    <div>
        <a href="/" >Home</a>
        <hr/>
    </div>
        <h1>${heading}</h1>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/test-db',function(req,res)
{
    //console.log("inside test db");
    pool.query('select * from test',function(err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result.rows));
        }
    });
});       
app.get('/articles/:articleName',function(req,res){
    pool.query("select * from articles where title= +aticleName",function(err,result){
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            if(result.rows.length===0)
            {
                res.status(404).send('Article Not Found');
            }
            else
            {
                var articledata=result.rows[0];
                res.send(createTemplate(result));
            }
        }
    });
    
});

app.get('/ui/comment.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comment.js'));
});

var result=[];
app.get('/add-comment',function(req,res)
{
   var received=req.query.comment;
   result.push(received);
   res.send(JSON.stringify(result));
});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());
});
var namearray=[];
app.get('/submit-name',function(req,res)
{
   var send_name=req.query.name;
   namearray.push(send_name);
   res.send(JSON.stringify(namearray));
});



/*app.get('/:pagename',function(req,res){
    
    
    //functionality provided by express framework
    
    var articleName=req.params.pagename;
    res.send(createTemplate(articles[articleName]));
});*/
app.get('/page-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'page-two.html'));
});
app.get('/page-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'page-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/comment.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comment.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/counter.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'counter.js'));
});


//1st method by using : for sending data to server
var namearray=[];
app.get('/submit-name/:name',function(req,res)
{
   var send_name=req.params.name;
   namearray.push(send_name);
   res.send(JSON.stringify(namearray));
});
 
//2nd method..query parameter for sending data

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
