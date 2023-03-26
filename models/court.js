// const { v4: uuidv4 } = require('uuid');
// const mongoose = require('mongoose');
// const crypto = require('crypto');
// const schema = mongoose.Schema;

// const courtSchema = new schema(
//   {
//     courtName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     timing: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     location: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     sports:{
//       type: String,
//       required: true,
//       trim: true,
//     },
//     price:{
//       type: Number,
//       required: true,
//       trim: true,
//     }
//   },
//   { timestamp: true }
// );

// courtSchema
//   .virtual('password')
//   .set(function (password) {
//     this._password = password;
//     this.salt = uuidv4();
//     this.encry_password = this.securePassword(password);
//   })
//   .get(function () {
//     return this._password;
//   });

// ownerSchema.methods = {
//   authenticate: function (plainpassword) {
//     return this.securePassword(plainpassword) === this.encry_password;
//   },

//   securePassword: function (plainpassword) {
//     if (!plainpassword) return '';
//     try {
//       return crypto
//         .createHmac('sha256', this.salt)
//         .update(plainpassword)
//         .digest('hex');
//     } catch (err) {
//       return '';
//     }
//   },
// };

// module.exports = mongoose.model('owner', courtSchema);
