// db_init.js
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("dbs311_a2");

    const horses = db.collection("horses");
    const customers = db.collection("customers");
    const rentals = db.collection("rentals");

    // Sample data
    await horses.insertMany([
      {
        name: "Thunder",
        colour: "Black",
        height: 64, // in inches
        speed: 8,
        dateborn: new Date("2015-06-15"),
        standard_priceperhour: 50
      },
      {
        name: "Snowflake",
        colour: "White",
        height: 60,
        speed: 6,
        dateborn: new Date("2017-04-20"),
        standard_priceperhour: 40
      }
    ]);

    await customers.insertMany([
      {
        fname: "Alice",
        lname: "Walker",
        email: "alice@example.com",
        phonenum: "123-456-7890",
        address: {
          street: "123 Maple St",
          city: "Horseville",
          province: "ON",
          postal: "H0R 1S3"
        },
        DoB: new Date("1990-03-10")
      },
      {
        fname: "Bob",
        lname: "Smith",
        email: "bob@example.com",
        phonenum: "987-654-3210",
        address: {
          street: "456 Oak St",
          city: "Rider City",
          province: "BC",
          postal: "R1D 3RC"
        },
        DoB: new Date("1985-11-02")
      }
    ]);

    await rentals.insertMany([
      {
        horsename: "Thunder",
        contactEmail: "alice@example.com",
        contactPhonenum: "123-456-7890",
        date_rented: new Date("2024-03-01"),
        date_expected: new Date("2024-03-01"),
        date_returned: new Date("2024-03-01"),
        price_charged: 50,
        payment_method: "credit"
      }
    ]);

    console.log("\n Sample data inserted successfully.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
