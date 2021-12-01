//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");


app.get("/", function(req, res){

let today = new Date();
let currentDay = today.getDay();
let day = "";

if (currentDay === 6 || currentDay === 0){
    day = "Weekend";
} else {
    day = "Weekday";
}
    res.render("list", {kindOfDay: day});

});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});