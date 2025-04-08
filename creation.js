let db = connect('mongodb://localhost/dbs311_a2');

db.createCollection("horses");
db.createCollection("customers");
db.createCollection("rentals");
