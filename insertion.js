// Mongo DB shell commands


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
		},

		{
			name: "Midnight",
			colour: "Black",
			height: 58,
			speed: 6,
			dateborn: new Date("2006-08-11"),
			standard_priceperhour: 28.79
		},
		{ name: "Thunder", colour: "Black", height: 64, speed: 9, dateborn: new Date("2015-06-15"), standard_priceperhour: 59.99 },
		{ name: "Daisy", colour: "White", height: 58, speed: 6, dateborn: new Date("2017-08-30"), standard_priceperhour: 29.99 },
		{ name: "Storm", colour: "Brown", height: 66, speed: 8, dateborn: new Date("2014-05-10"), standard_priceperhour: 54.99 },
		{ name: "Bella", colour: "Chestnut", height: 61, speed: 5, dateborn: new Date("2016-11-23"), standard_priceperhour: 25.99 },
		{ name: "Spirit", colour: "Palomino", height: 65, speed: 10, dateborn: new Date("2013-03-01"), standard_priceperhour: 69.99 },
		{ name: "Flicka", colour: "Bay", height: 60, speed: 6, dateborn: new Date("2017-02-14"), standard_priceperhour: 29.99 },
		{ name: "Star", colour: "Dapple Grey", height: 59, speed: 4, dateborn: new Date("2019-04-08"), standard_priceperhour: 19.99 },
		{ name: "Whisper", colour: "Cream", height: 62, speed: 5, dateborn: new Date("2020-01-01"), standard_priceperhour: 15.99 }
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
			DoB: new Date("1995-05-15")
			// DoB really isn't neccecary
		},

		{ fname: "Alice", lname: "Walker", email: "alice@gamil.com", phonenum: "123-456-7890", address: { street: "123 Maple St", city: "Horseville", province: "ON", postal: "H0R1S3" }, DoB: new Date("1990-03-10") },
		{ fname: "Bob", lname: "Smith", email: "bob@gamil.com", phonenum: "987-654-3210", address: { street: "456 Oak St", city: "Rider City", province: "BC", postal: "R1D3RC" }, DoB: new Date("1985-11-02") },
		{ fname: "Carol", lname: "Jones", email: "carol@gamil.com", phonenum: "234-567-8901", address: { street: "789 Pine St", city: "Gallop Town", province: "AB", postal: "G0P1AB" }, DoB: new Date("1992-06-20") },
		{ fname: "David", lname: "Brown", email: "david@gamil.com", phonenum: "345-678-9012", address: { street: "321 Birch St", city: "Stable City", province: "MB", postal: "S7B1MB" }, DoB: new Date("1988-12-15") },
		{ fname: "Ella", lname: "White", email: "ella@gamil.com", phonenum: "456-789-0123", address: { street: "654 Cedar St", city: "Equine Bay", province: "NS", postal: "E1Q1NS" }, DoB: new Date("1995-04-18") },
		{ fname: "Frank", lname: "Taylor", email: "frank@gamil.com", phonenum: "567-890-1234", address: { street: "987 Spruce St", city: "Neighsville", province: "NB", postal: "N3I1NB" }, DoB: new Date("1991-09-25") },
		{ fname: "Grace", lname: "Hall", email: "grace@gamil.com", phonenum: "678-901-2345", address: { street: "213 Elm St", city: "Hoofington", province: "SK", postal: "H2F1SK" }, DoB: new Date("1994-07-07") },
		{ fname: "Henry", lname: "King", email: "henry@gamil.com", phonenum: "789-012-3456", address: { street: "132 Willow St", city: "Colt City", province: "QC", postal: "C1T1QC" }, DoB: new Date("1989-10-30") },
		{ fname: "Ivy", lname: "Green", email: "ivy@gamil.com", phonenum: "890-123-4567", address: { street: "876 Ash St", city: "Jockey Ville", province: "PE", postal: "J0K1PE" }, DoB: new Date("1996-05-11") },
		{ fname: "Jack", lname: "Black", email: "jack@gamil.com", phonenum: "901-234-5678", address: { street: "543 Fir St", city: "Canter Creek", province: "NL", postal: "C4N1NL" }, DoB: new Date("1993-01-21") }
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
		},
		{ horsename: "Thunder", contactEmail: "alice@example.com", contactPhonenum: "123-456-7890", date_rented: new Date("2024-03-01"), date_expected: new Date("2024-03-01"), date_returned: new Date("2024-03-01"), price_charged: 60, payment_method: "credit" },
		{ horsename: "Storm", contactEmail: "bob@example.com", contactPhonenum: "987-654-3210", date_rented: new Date("2024-03-02"), date_expected: new Date("2024-03-02"), date_returned: new Date("2024-03-02"), price_charged: 65, payment_method: "debit" },
		{ horsename: "Bella", contactEmail: "carol@example.com", contactPhonenum: "234-567-8901", date_rented: new Date("2024-03-03"), date_expected: new Date("2024-03-03"), date_returned: new Date("2024-03-03"), price_charged: 52, payment_method: "cash" },
		{ horsename: "Flicka", contactEmail: "david@example.com", contactPhonenum: "345-678-9012", date_rented: new Date("2024-03-04"), date_expected: new Date("2024-03-04"), date_returned: new Date("2024-03-04"), price_charged: 53, payment_method: "credit" },
		{ horsename: "Daisy", contactEmail: "ella@example.com", contactPhonenum: "456-789-0123", date_rented: new Date("2024-03-05"), date_expected: new Date("2024-03-05"), date_returned: new Date("2024-03-05"), price_charged: 50, payment_method: "credit" },
		{ horsename: "Midnight", contactEmail: "frank@example.com", contactPhonenum: "567-890-1234", date_rented: new Date("2024-03-06"), date_expected: new Date("2024-03-06"), date_returned: new Date("2024-03-06"), price_charged: 58, payment_method: "cash" },
		{ horsename: "Star", contactEmail: "grace@example.com", contactPhonenum: "678-901-2345", date_rented: new Date("2024-03-07"), date_expected: new Date("2024-03-07"), date_returned: new Date("2024-03-07"), price_charged: 45, payment_method: "credit" },
		{ horsename: "Whisper", contactEmail: "henry@example.com", contactPhonenum: "789-012-3456", date_rented: new Date("2024-03-08"), date_expected: new Date("2024-03-08"), date_returned: new Date("2024-03-08"), price_charged: 49, payment_method: "credit" },
		{ horsename: "Shadow", contactEmail: "ivy@example.com", contactPhonenum: "890-123-4567", date_rented: new Date("2024-03-09"), date_expected: new Date("2024-03-09"), date_returned: new Date("2024-03-09"), price_charged: 55, payment_method: "debit" },
		{ horsename: "Spirit", contactEmail: "jack@example.com", contactPhonenum: "901-234-5678", date_rented: new Date("2024-03-10"), date_expected: new Date("2024-03-10"), date_returned: new Date("2024-03-10"), price_charged: 70, payment_method: "cash" }
	]
);

