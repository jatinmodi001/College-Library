var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var booksList= [
    {
      "name": "Book1",
      "author": "Author1",
      "price": "999",
      "desc": "",
      "id": 1
    },
    {
      "name": "Book2",
      "author": "Author2",
      "price": "1000",
      "desc": "",
      "id": 2
    }
  ]
app.use(bodyParser.json());
app.use("*",(req,res,next)=>{
	console.log('MIDDLEWARE IS CALLED ');
	res.setHeader('Access-Control-Allow-Origin',"*");
	res.setHeader('Access-Control-Allow-Headers',"Content-Type,Access-Control-Allow-Headers,Access-Control-Allow-Headers,Authorization,X-Request-With");
	res.setHeader('Access-Control-Allow-Methods',"*");
	next();
})

app.delete('/deleteBook/:id',function(req,res){

	console.log('Del book');
	booksList = booksList.filter((book)=>book.id != req.params.id)
	res.json('DELETED');
})
app.post("/addBook",function(req,res){
  let book = req.body;
  book.id = booksList.length+1;
  console.log(book);
	booksList.push(book);
	res.json('OK');
})

app.listen(5000,()=>{
	console.log('Server is listening at port 5000');
})

app.get("/books",function(req,res){
	console.log(booksList)
	res.send(booksList);
})

app.put("/edit/:id",function(req,res){
  let id = booksList[req.params.id-1].id;
  console.log(id);
  booksList[req.params.id-1] = req.body;
  booksList[req.params.id-1].id = id;
  res.json('OK');
})