const userCollection = require("../models/user");

const homepageController = (req,res)=>{
  res.send("Hompage MongoDB!")
}
 
// Data Insert

const userDataController = async (req, res) => {
console.log(req.body);
const { username, password } = req.body;

  const record = new userCollection({
    username: username,
    password: password,
  });

  try {
    await record.save();
    res.status(201).json({ message: "User saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save user." });
  }
}

// Data Read and Send

const userAllDataController = async (req, res) => {
try {
  const userData = await userCollection.find();
  res.status(200).json({ message: "userAllData", data: userData })
} catch (error) {
  res.status(500).json({ error: "Failed to fetch users." });
}
};

module.exports = {
  homepageController,
  userDataController,
  userAllDataController,
}