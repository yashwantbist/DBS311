// Mongo DB Shell style
// let db = connect('mongodb://localhost/dbs311_a2');

// remember to wrap in a try catch block!

// .js style 
const { MongoClient } = require("mongodb");
const readline = require("readline");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// Create a readline interface for user input
// this allows us to get user input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function findHorsesByColour() {
  try {
    rl.question("Enter horse colour to search: ", async (inputColour) => {
      await client.connect();
      const db = client.db("dbs311_a2");

      const horses = db.collection("horses");

      // take user input and search for horses with that colour
      const results = await horses.find({
        colour: { $regex: new RegExp(`^${inputColour}$`, "i") }
      }).toArray();

      if (results.length > 0) {
        console.log(`\n Found ${results.length} horse(s) with colour "${inputColour}":`);
        console.table(results);
      } else {
        console.log(`\n No horses found with colour "${inputColour}".`);
      }

      rl.close();
      await client.close();
    });

  } catch (err) {
    console.error("\n Error during search:", err);
    rl.close();
    await client.close();
  }
}

findHorsesByColour();
