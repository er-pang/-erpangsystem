"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var safeordersSchema = new Schema({
  type_id: {
    type: Schema.Types.ObjectId,
    ref: 'safegoodsModel'
  },
  price: String,
  holder_id: {
    type: Schema.Types.ObjectId,
    ref: 'usersModel'
  },
  acceptor_id: {
    type: Schema.Types.ObjectId,
    ref: 'adminsModel'
  },
  date: String,
  tb: Boolean,
  statc: Boolean
}, {
  versionKey: false
});
module.exports.safeordersModel = model('safeordersModel', safeordersSchema, 'safeorders');