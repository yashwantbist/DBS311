let db = connect('mongodb://localhost/dbs311_a2');

// creation, insertion, viewing, and deletion should 
// be split up into 4 different scripts, with a master 
// script that runs them all in sequence 

// creation
console.log("Collection creation");
load("creation.js");

// data insertion 
console.log("Data insertion");
load("insertion.js");

// data viewing 
console.log("Data view 1: find all horses of a specific colour");
load("dataviewing1.js");
console.log("Data view 2: find all rentals within a range of dates");
load("dataviewing2.js");
console.log("Data view 3: find all customers that have rented a horse of a specific colour");
load("dataviewing3.js");
console.log("Data view 4: find the total rental fees collected from a specific customer with input as their email address");
load("dataviewing4.js");
console.log("Data view 5: find the most popular horses based on number of rentals");
load("dataviewing5.js");


// data aggregation
console.log("Data aggregation 1: Calculate the average price/h for each speed of horse.");
load("dataaggregation1.js");
console.log("Data aggregation 2: Calculate the total rental fees collected per month.");
load("dataaggregation2.js");
console.log("Data aggregation 3: Find the 3 most popular horse colours among customers.");
load("dataaggregation3.js");

// data update
console.log("Data update 1: Update rental fees for horses with specific speed.");
load("update1.js");
console.log("Data update 2: Update the contact information (phone number and address) for a specific customer.");  
load("update2.js");

// deletion
console.log("Collection deletion");
load("deletion.js");
