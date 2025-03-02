const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/test");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pass: { type: String, required: true },
});

const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/insert.html");
});

app.post("/submit", async (req, res) => {
  try {
    let body = req.body;
    await userModel.insertOne({ name: body.name, pass: body.pass });
    console.log("Inserted");
    res.send("Inserted");
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/users", async (req, res) => {
  let data = await userModel.find({});
  res.json(data);
});

app.get("/update", (req, res) => {
  res.sendFile(__dirname + "/update.html");
});

app.post("/update/submit", async (req, res) => {
  try {
    let body = req.body;
    await userModel.updateOne(
      { name: body.name },
      { $set: { pass: body.pass } }
    );
    res.send("Updated");
  } catch (e) {
    res.send(e.message);
  }
});

app.get("/delete", (req, res) => {
  res.sendFile(__dirname + "/delete.html");
});

app.post("/delete/submit", async (req, res) => {
  try {
    let body = req.body;
    await userModel.deleteOne({ name: body.name });
    res.send("Deleted");
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(3000, () => {
  console.log("Server running");
});
