// scripts/updateFeesBySpeed.js
const { MongoClient } = require("mongodb");
const readline = require("readline");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function updateHorseFeesBySpeed() {
  try {
    await client.connect();
    const db = client.db("dbs311_a2");
    const horses = db.collection("horses");

    rl.question("Enter horse speed to update (1-10): ", (speedInput) => {
      const speed = parseInt(speedInput);
      if (isNaN(speed) || speed < 1 || speed > 10) {
        console.log("Invalid speed. Must be a number from 1 to 10.");
        rl.close();
        client.close();
        return;
      }

      rl.question("Enter new price per hour: $", async (priceInput) => {
        const newPrice = parseFloat(priceInput);
        if (isNaN(newPrice) || newPrice <= 0) {
          console.log("Invalid price. Must be a positive number.");
          rl.close();
          client.close();
          return;
        }

        const result = await horses.updateMany(
          { speed: speed },
          { $set: { standard_priceperhour: newPrice } }
        );

        console.log(`\nUpdated ${result.modifiedCount} horse(s) with speed ${speed} to $${newPrice}/hr.\n`);
        rl.close();
        await client.close();
      });
    });

  } catch (err) {
    console.error("Error updating horse rental fees:", err);
    rl.close();
    await client.close();
  }
}

updateHorseFeesBySpeed();
