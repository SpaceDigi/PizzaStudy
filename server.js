var express = require("express")
var app = express()
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/pages'));
app.set('view engine', 'ejs');
app.get("/",function (req,res) {
    res.render('main')
})
app.get("/header",function (req,res) {
    res.render('header')
})
var server = app.listen(3000,function () {
    console.log("listening on port number %d",server.address().port)
})