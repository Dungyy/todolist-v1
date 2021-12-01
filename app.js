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

switch (currentDay){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wedesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    console.log("Error: Current day is equal to: " + currentDay);
}
    res.render("list", {
      kindOfDay: day
    });

});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});