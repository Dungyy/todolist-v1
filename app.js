//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let items = ["Buy food", "cook food", "eat food"];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    let today = new Date();

let options = {
    weekday: "long",
    day: "numeric",
    month: "long" 
};

let day = today.toDateString("en-US", options);

    res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){
    const item = req.body.newItem;

    items.push(item);
    console.log(req.body);
    res.redirect("/");
});


app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});