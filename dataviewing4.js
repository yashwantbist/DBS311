// Mongo DB Shell command to connect to the DB - choose one or the other
// let db = connect('mongodb://localhost/dbs311_a2');

// .js command to connect to the DB - choose one or the other
const { MongoClient } = require("mongodb");
const readline = require("readline");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// code here
// remember to wrap in a try catch block!
// scripts/dataviewing4.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function findTotalRentalFeesByCustomer() {
  try {
    rl.question("\n Enter customer email to calculate total rental fees: ", async (email) => {
      await client.connect();
      const db = client.db("dbs311_a2");

      const rentals = db.collection("rentals");

      // Step 1: Aggregate total fees by the provided email
      const result = await rentals.aggregate([
        { $match: { contactEmail: email } },
        {
          $group: {
            _id: "$contactEmail",
            totalFees: { $sum: "$price_charged" },
            rentalsCount: { $sum: 1 }
          }
        }
      ]).toArray();

      if (result.length === 0) {
        console.log(`\n No rentals found for customer with email "${email}"`);
      } else {
        const data = result[0];
        console.log(`\n Total rental fees for ${email}: $${data.totalFees.toFixed(2)}`);
        console.log(`\n Number of rentals: ${data.rentalsCount}`);
      }

      rl.close();
      await client.close();
    });
  } catch (err) {
    console.error("\n Error calculating total rental fees:", err);
    rl.close();
    await client.close();
  }
}

findTotalRentalFeesByCustomer();
