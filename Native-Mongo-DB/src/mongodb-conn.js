const mongodb = require("mongodb");

const uri = "mongodb://localhost:27017/";
const client = new mongodb.MongoClient(uri);

const connect = async (dbName) => {
  try {
    await client.connect();
    console.log("MongoDB connected");
    return client.db(dbName);
  } catch (e) {
    console.log(e.message);
  }
};

// const insertOne = async (userName, password) => {
//   try {
//     let db = await connect("test");
//     await db
//       .collection("testCol")
//       .insertOne({ name: userName, pass: password });
//     console.log("Entered");
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// insertOne("1st User", "Password 1");

// const findAll = async () => {
//   try {
//     let db = await connect("test");
//     let results = await db.collection("testCol").find().toArray();
//     console.log(results);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// findAll();

// const updateOne = async (userName, password) => {
//   try {
//     let db = await connect("test");
//     await db
//       .collection("testCol")
//       .updateOne({ name: userName }, { $set: { pass: password } });
//     console.log("Updated Successfully");
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// updateOne("1st User", "New Password");

// const deleteOne = async (userName) => {
//   try {
//     let db = await connect("test");
//     await db.collection("testCol").deleteOne({ name: userName });
//     console.log("Done Deleting");
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// deleteOne("1st User");
