// Get Mongoose in dis js app
const mongoose = require('mongoose');

// Brand Deals
const brandSchema = new mongoose.Schema({
    brand: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  });

// Player Schema
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true,
  },
  partnerships: {
    type: [brandSchema]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Brand', brandSchema)
module.exports = mongoose.model('Player', playerSchema)