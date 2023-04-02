const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const crypto = require('crypto');
const schema = mongoose.Schema;

const courtSchema = new schema(
  {
    id: {
      type: String,
      trim: true,
    },
    owner_id: {
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
    from:{
      type: Number,
      trim: true,
    },
    to:{
      type: Number,
      trim: true,
    },
  },
  { timestamp: true }
);


module.exports = mongoose.model('courts', courtSchema);
