let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!

// adapted from Yashwant's code

try {
	console.log(db.rentals.aggregate([
		{
			$project : {
				month : {$month : "$date_rented"},
				year : {$year : "$date_rented"},
				price_charged : 1
			}
		},
		{
			$group : {
				_id : {
					year : "$year",
					month : "$month"
				},
				total_charge : {
					$sum: "$price_charged"
				}
			}
		},
		{
			$sort : {
				"_id.year" : 1,
				"_id.month" : 1
			}
		}
	]));
} catch (error) {
	console.log(error);
}
