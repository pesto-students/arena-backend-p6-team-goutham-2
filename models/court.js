const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const crypto = require('crypto');
const schema = mongoose.Schema;

const courtSchema = new schema(
  {
    courtName: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
        type: Date,
        default: Date.now,
        required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    sports:{
      type: String,
      required: true,
      trim: true,
    },
    facility:{
      type: String,
      required: true,
      trim: true,
    },
    price:{
      type: Number,
      required: true,
      trim: true,
    }
  },
  { timestamp: true }
);


module.exports = mongoose.model('court', courtSchema);
