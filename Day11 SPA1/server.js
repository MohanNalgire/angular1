var express=require('express');
var app=express();
app.use(express.static(__dirname+"/../POC"));
app.get('/',function (request,response) {
   response.redirect('/index.html');
});
app.listen(3000);
console.log('Server Listening the Port No.3000');