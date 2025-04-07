let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!
// scripts/dataaggregation3.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function top3PopularHorseColours() {
  try {
    await client.connect();
    const db = client.db("dbs311_a2");

    const rentals = db.collection("rentals");
    const horses = db.collection("horses");

    // Step 1: Lookup horse colour based on horsename in rentals
    const result = await rentals.aggregate([
      {
        $lookup: {
          from: "horses",
          localField: "horsename",
          foreignField: "name",
          as: "horse_info"
        }
      },
      { $unwind: "$horse_info" },
      {
        $group: {
          _id: "$horse_info.colour",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 3 }
    ]).toArray();

    if (result.length === 0) {
      console.log("No rental data found.\n");
    } else {
      console.log("Top 3 Most Popular Horse Colours:\n");
      console.table(result.map(r => ({
        Colour: r._id,
        Rentals: r.count
      })));
    }

  } catch (err) {
    console.error("Error during aggregation:\n", err);
  } finally {
    await client.close();
  }
}

top3PopularHorseColours();
