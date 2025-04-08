let db = connect('mongodb://localhost/dbs311_a2');

db.horses.drop();
db.customers.drop();
db.rentals.drop();
