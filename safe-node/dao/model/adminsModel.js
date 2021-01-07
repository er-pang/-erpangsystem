const {
    Schema,
    model
} = require('mongoose');
const adminsSchema = new Schema({
    username: String,
    password: String,
    name: String,
    power: Boolean,
    role: String
}, {
    versionKey: false
});
module.exports.adminsModel = model('adminsModel', adminsSchema, 'admins');