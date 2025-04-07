// let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!

// .js style
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function averagePricePerHourBySpeed() {
  try {
    await client.connect();
    const db = client.db("dbs311_a2");
    const horses = db.collection("horses");

    const report = await horses.aggregate([
      {
        $group: {
          _id: "$speed",
          average_price_per_hour: { $avg: "$standard_priceperhour" },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 } // sort by speed ascending
      }
    ]).toArray();

    if (report.length === 0) {
      console.log("\n No horses found in database.");
    } else {
      console.log("\n Average Price Per Hour by Horse Speed:");
      console.table(report.map(r => ({
        Speed: r._id,
        "Avg Price ($/hr)": r.average_price_per_hour.toFixed(2),
        "Horse Count": r.count
      })));
    }

  } catch (err) {
    console.error("\n Error during aggregation:", err);
  } finally {
    await client.close();
  }
}

averagePricePerHourBySpeed();
