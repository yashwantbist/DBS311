// Mongo DB Shell command to connect to the DB - choose one or the other
//let db = connect('mongodb://localhost/dbs311_a2');

// .js command to connect to the DB - choose one or the other
const { MongoClient } = require("mongodb");
const readline = require("readline");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// code here
// remember to wrap in a try catch block!
// scripts/dataviewing3.js


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function findCustomersByHorseColour() {
  try {
    rl.question("🎨 Enter horse colour to search for rented customers: ", async (colour) => {
      await client.connect();
      const db = client.db("dbs311_a2");

      const horses = db.collection("horses");
      const rentals = db.collection("rentals");
      const customers = db.collection("customers");

      // Step 1: Get horse names with matching colour
      const matchedHorses = await horses
        .find({ colour: { $regex: new RegExp(`^${colour}$`, "i") } })
        .project({ name: 1, _id: 0 })
        .toArray();

      const horseNames = matchedHorses.map(h => h.name);

      if (horseNames.length === 0) {
        console.log(`\n No horses found with colour "${colour}"`);
        rl.close();
        await client.close();
        return;
      }

      // Step 2: Find rentals where horsename matches
      const matchedRentals = await rentals
        .find({ horsename: { $in: horseNames } })
        .project({ contactEmail: 1, _id: 0 })
        .toArray();

      const emails = matchedRentals.map(r => r.contactEmail);

      if (emails.length === 0) {
        console.log(`\n No rentals found for horses with colour "${colour}"`);
        rl.close();
        await client.close();
        return;
      }

      // Step 3: Get customer details
      const matchedCustomers = await customers
        .find({ email: { $in: emails } })
        .project({ fname: 1, lname: 1, email: 1, phonenum: 1 })
        .toArray();

      console.log(`\n📋 Customers who rented a "${colour}" horse:`);
      console.table(matchedCustomers);

      rl.close();
      await client.close();
    });
  } catch (err) {
    console.error("\n Error during query:", err);
    rl.close();
    await client.close();
  }
}

findCustomersByHorseColour();
