const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000
const quotes = require('./db/quotes-data')
//root route
app.get('/', (req,res)=> res.send(
  'sup'
))
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

app.use(express.static('public'))
// root route
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
