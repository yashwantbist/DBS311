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
console.log("Data view 2: find all horses within a range of ages");
load("dataviewing2.js");
console.log("Data view 3: find all customers that have rented a horse of a specific colour");
load("dataviewing3.js");
console.log("Data view 4: find the total rental fees collected from a specific customer");
load("dataviewing4.js");
console.log("Data view 5: find the most popular horses based on number of rentals");
load("dataviewing5.js");


// data aggregation
// scripts here

// deletion
console.log("Collection deletion");
load("deletion.js");
