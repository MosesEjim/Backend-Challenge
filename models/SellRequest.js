const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Flight Schema
const SellRequestSchema = new Schema({
  device_name: {
    type: String,
    required: true
  },
  device_condition: {
    type: String,
    enum: ["A1", "A2", "B1", "B2", "C", "C/B"," C/D"],
    required: true
  },
  storage_size: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = SellRequest = mongoose.model('sell_requests', SellRequestSchema);