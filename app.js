//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
const PORT = process.env.PORT || 3000;

const items = ["Buy food", "cook food", "eat food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

   const day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

    const item = req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});


app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});


app.get("/about", function(req, res){
    res.render("about");
});


app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});