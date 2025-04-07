// Mongo DB Shell command to connect to the DB - choose one or the other
// let db = connect('mongodb://localhost/dbs311_a2');

// .js command to connect to the DB - choose one or the other
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function findMostPopularHorses() {
  try {
    await client.connect();
    const db = client.db("dbs311_a2");
    const rentals = db.collection("rentals");

    const report = await rentals.aggregate([
      {
        $group: {
          _id: "$horsename",
          rentalCount: { $sum: 1 }
        }
      },
      {
        $sort: { rentalCount: -1 }
      }
    ]).toArray();

    if (report.length === 0) {
      console.log("\n No rental records found.");
    } else {
      console.log("\n Most Popular Horses (by rental count):");
      console.table(report.map(r => ({
        Horse: r._id,
        "Times Rented": r.rentalCount
      })));
    }

  } catch (err) {
    console.error("\n Error generating horse popularity report:", err);
  } finally {
    await client.close();
  }
}

findMostPopularHorses();
