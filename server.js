var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
/*var articles={
  'page-one': {
     title : 'Article-one | venky',
    heading : 'Article-one',
    date : '2nd feb 2016',
    content : `<p>this is my first article page.this is my first article page.this is my first article pagethis is my first article page
            this is my first article pagethis is my first article pagethis is my first article pagethis is my first article page.this is my first article page.this is my first article pagethis is my first article page
            this is my first article pagethis is my first article pagethis is my first article page
            </p>
            <p>this is my first article page.this is my first article page.this is my first article pagethis is my first article page
            this is my first article pagethis is my first article pagethis is my first article pagethis is my first article page.this is
            first article page.this is my first article pagethis is my first article page this is my first article pagethis is my firs
            article pagethis is my first article page
            </p>
            <p>this is my first article page.this is my first article page.this is my first article pagethis is my first article page
            this is my first article pagethis is my first article pagethis is my first article pagethis is my first article page.this is my
            first article page.this is my first article pagethis is my first article page this is my first article pagethis is my fir
            article pagethis is my first article page
            </p> `
},
 'page-two':{
      title : 'Article-one | venky',
    heading : 'Article-two',
    date : '2nd feb 2016',
    content : '<p>this is second content page</p>'
 },
 'page-three':{
     title : 'Article-three | venky',
    heading : 'Article-three',
    date : '2nd feb 2016',
    content : '<p>this is third content page</p>'
}

};  */
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


app.get('/articledemo',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'articledemo.html'));
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
