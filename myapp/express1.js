var express=require("express");
var app=express();
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));
app.use(function(req,resp,next){
	  console.log(req.method+"------"+req.url);
	  next();
});
app.get("/",function(req,resp){
   resp.sendFile("form.html",{root:__dirname});
});
app.post("/calc",function(req,resp){
	resp.send("<h1>"+req.body.num1+"------"+req.body.num2+"</h1>");
});



app.listen(2000);
