let db = connect('mongodb://localhost/dbs311_a2');

db.horses.insertMany(
	[
		{
			name: "Shadow",
			colour: "Black",
			height: 60,
			speed: 7,
			dateborn: new Date("2007-03-27"),
			standard_priceperhour: 29.99
		},
		{
			name: "Apples",
			colour: "Orange",
			height: 55,
			speed: 6,
			dateborn: new Date("2012-06-12"),
			standard_priceperhour: 27.99
		}
	]
);

db.customers.insertMany(
	[
		{
			fname: "John",
			lname: "Smith",
			email: "john.smith@email.com",
			phonenum: "555-123-4567",
			address: {
				street: "Road St.",
				number: 77,
				postal_code: "A1B 2C3",
				apartment: 12,
				city: "Toronto",
				province: "Ontario",
				country: "Canada"
			},
			DoB: new Date("1998-11-03")
		},
		{
			fname: "Jane",
			lname: "Doe",
			email: "jane.doe@gmail.com",
			phonenum: "555-765-4321",
			address: {
				street: "Street Rd.",
				number: 33,
				postal_code: "12345",
				// apartment is optional
				city: "Huston",
				state: "Texas", // state instead of province
				country: "United States"
			},
			// DoB really isn't neccecary
		}
	]
);

db.rentals.insertMany(
	[
		{
			horsename: "Shadow",
			contactEmail: "john.smith@email.com",
			// so long as there's at least one contact, both aren't really neccecary
			date_rented: new Date("2024-08-12T08:32:00Z"),
			date_expected: new Date("2024-08-12T15:32:00Z"),
			date_returned: new Date("2024-08-12T13:12:57Z"),
			price_charged: 237.22,
			payment_method: "Visa"
		},
		{
			horsename: "Apples",
			phonenum: "555-765-4321",
			date_rented: new Date("2024-07-15T09:29:00Z"),
			date_expected: new Date("2024-07-15T16:29:00Z"),
			date_returned: new Date("2024-07-15T15:53:12Z"),
			price_charged: 221.40,
			payment_method: "Cash"
		}
	]
);
