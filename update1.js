let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!

try {
	console.log("Old values:");
	console.log(db.horses.find(
		{
			"speed" : {$gte : 7}
		}, 
		{
			"_id" : 0,
			"name" : 1,
			"speed" : 1,
			"standard_priceperhour" : 1
		}
	));

	db.horses.updateMany({
			"speed" : {$gte : 7}
		},
		{
			$inc : {"standard_priceperhour" : 1}
		}
	);

	console.log("New values:");
	console.log(db.horses.find(
		{
			"speed" : {$gte : 7}
		}, 
		{
			"_id" : 0,
			"name" : 1,
			"speed" : 1,
			"standard_priceperhour" : 1
		}
	));
} catch (error) {
	console.log(error);
}


