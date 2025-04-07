let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!

try {
	console.log("Old value:");
	console.log(db.customers.find(
		{
			"fname" : "John",
			"lname" : "Smith"
		}, 
		{
			"_id" : 0,
			"fname" : 1,
			"lname" : 1,
			"address" : 1
		}
	));

	db.customers.updateMany({
			"fname" : "John",
			"lname" : "Smith"
		},
		{
			$set : {
				"phonenum" : "567-912-6543",
				"address" : {
					"street" : "Circle Cres.",
					"number" : 314,
					"postal_code" : "C3B 2A1",
					"city" : "Toronto",
					"province" : "Ontario",
					"country" : "Canada"
				}
			}
		}
	);

	console.log("New value:");
	console.log(db.customers.find(
		{
			"fname" : "John",
			"lname" : "Smith"
		}, 
		{
			"_id" : 0,
			"fname" : 1,
			"lname" : 1,
			"address" : 1
		}
	));
} catch (error) {
	console.log(error);
}
