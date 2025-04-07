let db = connect('mongodb://localhost/dbs311_a2');

// remember to wrap in a try catch block!

// adapted from Yashwant's code
try {
	console.log(db.horses.find({"colour": "Black"}).pretty());
} catch (error) {
	console.log(error);
}
