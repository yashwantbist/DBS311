// scripts/updateCustomerContact.js
const { MongoClient } = require("mongodb");
const readline = require("readline");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function updateCustomerContactInfo() {
  try {
    await client.connect();
    const db = client.db("dbs311_a2");
    const customers = db.collection("customers");
    const rentals = db.collection("rentals");

    rl.question("Enter current customer email: ", (oldEmail) => {
      rl.question("New email (or press Enter to keep same): ", (newEmailInput) => {
        const newEmail = newEmailInput.trim() === "" ? oldEmail : newEmailInput.trim();

        rl.question("New phone number: ", (phonenum) => {
          rl.question("Street: ", (street) => {
            rl.question("City: ", (city) => {
              rl.question("Province: ", (province) => {
                rl.question("Postal code: ", async (postal) => {

                  // Update customers collection
                  const customerUpdate = await customers.updateOne(
                    { email: oldEmail },
                    {
                      $set: {
                        email: newEmail,
                        phonenum: phonenum,
                        address: {
                          street: street,
                          city: city,
                          province: province,
                          postal: postal
                        }
                      }
                    }
                  );

                  // Update rentals collection (only if email matched a customer)
                  if (customerUpdate.matchedCount > 0) {
                    await rentals.updateMany(
                      { contactEmail: oldEmail },
                      {
                        $set: {
                          contactEmail: newEmail,
                          contactPhonenum: phonenum
                        }
                      }
                    );

                    console.log(`\n✅ Updated contact info for customer "${oldEmail}"`);
                    if (oldEmail !== newEmail) {
                      console.log(`📧 Email changed to: ${newEmail}`);
                    }
                    console.log(`📞 Phone updated to: ${phonenum}`);
                    console.log(`📦 Address updated.`);
                  } else {
                    console.log(`\n❌ No customer found with email "${oldEmail}"`);
                  }

                  rl.close();
                  await client.close();
                });
              });
            });
          });
        });
      });
    });

  } catch (err) {
    console.error("❌ Error updating customer info:", err);
    rl.close();
    await client.close();
  }
}

updateCustomerContactInfo();
