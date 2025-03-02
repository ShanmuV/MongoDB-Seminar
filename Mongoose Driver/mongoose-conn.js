const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pass: { type: String, required: true },
});

const userModel = mongoose.model("user", userSchema);

// const insertOne = async (userName, password) => {
//   try {
//     await userModel.insertOne({ name: userName, pass: password });
//     console.log("Inserted");
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// insertOne("User 1", "Pass 1");

// const findAll = async () => {
//   try {
//     let result = await userModel.find();
//     console.log(result);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// findAll();

// const updateOne = async (userName, password) => {
//   try {
//     await userModel.updateOne({ name: userName }, { $set: { pass: password } });
//     console.log("Updated");
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// updateOne("User 1", "New Pass");

// const deleteOne = async (userName) => {
//   try {
//     await userModel.deleteOne({ name: userName });
//     console.log("Deleted");
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// deleteOne("User 1");
