const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000
const quotes = require('./db/quotes-data')
//root route
// app.get('/', (req,res)=> res.send(
//   'sup'
// ))
const burgers = [
  'Hamburger',
  'Cheese Burger',
  'Vegetable Burger'
];

var tacos = [
  'Soft Taco',
  'Crunchy Taco',
  'Super Taco'
];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); // bodyParser

app.post('/api/quotes', function quotesCreate(request, response) {
  let content = request.body.content;
  let author = request.body.author;
  let newQuote = { content: content, author: author };
  // if we have a quotes array in our app (pre-database):
  quotes.push(newQuote);
  response.json(quotes);
});

// root route
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
  // .sendfile (file path)
});

app.get('/quotes.json', (request, response) => {
  response.json({
    message: 'ok',
    data: quotes
  });
});

app.get("/api/burgers",  (request, response) => {
  //send all the burgers
  response.json(burgers);
});

app.get("/api/tacos",  (request, response) => {
  //send all the tacos
  response.json(tacos);
});

// the ur would be ** /thank?name=___ **
app.get('/thank',(req, res)=>{
  let name = request.query.name
  response.send(`thanks ${name}`);
})

app.get('/multiply', (request, response) => {
  let x = request.query.x;
  let y = request.query.y;
  let total = parseInt(x) * parseInt(y);
  response.send( `${total} is the result`);
});


app.post('/quotes',(req,res)=>{

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
