let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!

try {
	console.log("Old values:");
	console.log(db.customers.find(
		{
			"fname" : "John",
			"lname" : "Smith"
		}, 
		{
			"_id" : 0,
			"fname" : 1,
			"lname" : 1
		}
	));
	console.log(db.rentals.find(
		{
			$or : [
				{ "contactEmail" : "john.smith@email.com" },
				{ "contactPhonenum" : "567-912-6543" }
			]
		}, 
		{
			"_id" : 0,
			"horsename" : 1,
			"date_rented" : 1
		}
	));

	db.customers.deleteMany(
		{
			"fname" : "John",
			"lname" : "Smith"
		}
	);
	db.rentals.deleteMany(
		{
			$or : [
				{ "contactEmail" : "john.smith@email.com" },
				{ "contactPhonenum" : "567-912-6543" }
			]
		}
	);

	console.log("New values:");
	console.log(db.customers.find(
		{
			"fname" : "John",
			"lname" : "Smith"
		}, 
		{
			"_id" : 0,
			"fname" : 1,
			"lname" : 1
		}
	));
	console.log(db.rentals.find(
		{
			$or : [
				{ "contactEmail" : "john.smith@email.com" },
				{ "contactPhonenum" : "567-912-6543" }
			]
		}, 
		{
			"_id" : 0,
			"horsename" : 1,
			"date_rented" : 1
		}
	));
} catch (error) {
	console.log(error);
}
