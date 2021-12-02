//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

var items = ["Buy food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    let today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long" 
};

const day = today.toDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});



app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});