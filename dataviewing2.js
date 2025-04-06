let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!
//
// example of date processing in mongo
// see creation.js for creation here 
/*
try {
	let q = db.horses.find({});

	q.forEach(elem => {
		console.log(elem.dateborn.getYear() + 1900);
	});


} catch (error) {
	console.log(error);
}
*/

// adapted from Yashwant's code

try {
	console.log(db.rentals.find({
		"date_rented" : { // summer of '24
			$gte : new Date("2024-06-01T00:00:00Z"),
			$lte : new Date("2024-08-31T23:59:59Z")
		}
	}).pretty());
} catch (error) {
	console.log(error);
}
