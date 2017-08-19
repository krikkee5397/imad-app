var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var page = {
     '1':{
     title:'he he',
     heading:'ricky singh',
     date:'6 august 2017',
     content:`<p>
             'i am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLvi am fine.LOLvi am fine.LOLvi am fine.LOLi am fine.LOLvi am fine.LOL'
             </p>`
            },
    '2':{
    title:'he he',
    heading:'ricky singh',
    date:'10 august 2017',
    content:`<p>
             'i am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi fine.LOLi am fine.LOLi am fine.LOLvi am fine.LOLvi am fine.LOLvi am fine.LOLi am fine.LOLvi am fine.LOL'
</p> `
           },
    '3':{
    title:'he he',
    heading:'ricky singh',
    date:'15 august 2017',
    content:`<p>
             'i am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLi am fine.LOLvi am fine.LOLvi am fine.LOLvi am fine.LOLi am fine.LOLvi am fine.LOL
           </p>`
        },
};
  
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate=
`
    <html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
           <div>
            <a href="/">home</a>
           </div>
           <hr/>
           <h3>
           ${heading} 
           </h3>
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
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var Counter=0;
app.get('/Counter', function (req, res) {
 Counter=Counter+1;
  res.send(Counter.toString());
});
var names=[];
app.get('/submit-name/:name', function (req, res){
    var name=req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:number',function(req,res){
    var number=req.query.number;
    res.send(createTemplate(page[number]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
