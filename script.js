let db = connect('mongodb://localhost/dbs311_a2');

// creation, insertion, viewing, and deletion should 
// be split up into 4 different scripts, with a master 
// script that runs them all in sequence 

// creation
db.createCollection("horses");
db.createCollection("customers");
db.createCollection("rentals");

// data insertion 
// ...
db.horses.insertOne({dateborn: new Date("2007-03-27")});


// data viewing 
// WRAP IN A TRY BLOCK
// find all horses of a specific colour
// find all horses within a range of ages
// find all customers that have rented a horse of a specific colour
// find the total rental fees collected from a specific customer
// find the most popular horses based on number of rentals
// ...

try {
	let q = db.horses.find({});

	q.forEach(elem => {
		console.log(elem.dateborn.getYear() + 1900);
	});


} catch (error) {
	console.log(error);
}

// data aggregation

// deletion
db.horses.drop();
db.customers.drop();
db.rentals.drop();
