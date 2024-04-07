const mongoose = require("mongoose");

const local = "mongodb+srv://phamhieu28042004:hieupm@cluster0.dgaxwcr.mongodb.net/Lab7";

const connect = async () => {
  try {
    await mongoose.connect(local);
    console.log("Connect success");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

module.exports = { connect };
