const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the schema and model
const destinationSchema = new mongoose.Schema({
  // imgSrc: String,  // Uncomment if you plan to use images
  destTitle: String,
  location: String,
  grade: String,
  fees: String,
  description: String
});
destinationSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
