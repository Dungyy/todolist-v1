
exports.getDate = function() {

 const today = new Date();

 const options = {
     weekday: "long",
     day: "numeric",
     month: "long" 
 };
 
 return today.toDateString("en-US", options);

};