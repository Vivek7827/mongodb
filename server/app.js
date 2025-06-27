const express = require("express");
const app = express();
const apiRouter = require("./routes/api");
const mongoose = require("mongoose");
const e = require("express");

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mongodbtest")
.then(()=>{
  console.log("Successfully Connect DB...");
})
.catch((error)=>{
  console.log(error);
})


app.use("/api", apiRouter);
let PORT = 5000;
app.listen(PORT, ()=>{
  console.log(`Running on port ${PORT}`);
});