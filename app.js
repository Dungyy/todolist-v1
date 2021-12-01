//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', function(req, res){
    
let today = new Date();
let currentDay = today.getDay();

if (currentDay === 6 || currentDay === 0){
    res.write("Yay its the weekend");
} else {
    res.sendFile(__dirname + "/index.html");
}

});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});