var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

app.get("/", function(req,res){
  res.render("home", {page: 'home'})
});

app.get("/about", function(req,res){
  res.render("about", {page: 'about'})
});

app.get("/projects", function(req,res){
  res.render("projects", {page: 'projects'})
});

app.get("/courses", function(req,res){
  res.render("courses", {page: 'courses'})
});



// TOP KNOT CLIMBING PAGES

app.get("/topknotclimbing/home", function(req,res){
  res.render("topknotclimbing/topknotclimbing", {page: 'topknotclimbing'})
});

app.get("/topknotclimbing/about", function(req,res){
  res.render("topknotclimbing/about", {page: 'about'})
});

app.get("/topknotclimbing/visit", function(req,res){
  res.render("topknotclimbing/visit", {page: 'visit'})
});

app.get("/topknotclimbing/studio", function(req,res){
  res.render("topknotclimbing/studio", {page: 'studio'})
});

app.get("/topknotclimbing/boulderingguide", function(req,res){
  res.render("topknotclimbing/boulderingguide", {page: 'boulderingguide'})
});

app.get("/topknotclimbing/meetups", function(req,res){
  res.render("topknotclimbing/meetups", {page: 'meetups'})
});

app.get("/topknotclimbing/gearshop", function(req,res){
  res.render("topknotclimbing/gearshop", {page: 'gearshop'})
});




app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Server listening...");
});