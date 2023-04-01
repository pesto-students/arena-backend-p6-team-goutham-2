const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const crypto = require('crypto');
const schema = mongoose.Schema;

const courtSchema = new schema(
  {
    court_id: {
      type: String,
      trim: true,
    },
    courtName: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    sports:{
      type: String,
      trim: true,
    },
    facility:{
      type: String,
      trim: true,
    },
    price:{
      type: Number,
      trim: true,
    },
    slotFrom:{
      type: Date,
      default: new Date()
    },
    slotTo:{
      type: Date,
      default: new Date()
    }
  },
  { timestamp: true }
);


module.exports = mongoose.model('courts', courtSchema);
