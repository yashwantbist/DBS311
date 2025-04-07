let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!
//
// example of date processing in mongo
// see creation.js for creation here 

try {
	let q = db.horses.find({});

	q.forEach(elem => {
		console.log(elem.dateborn.getYear() + 1900);
	});


} catch (error) {
	console.log(error);
}
