const {
    Schema,
    model
} = require('mongoose');
const payforlistsSchema = new Schema({
    safeorder_id: {
        type: Schema.Types.ObjectId,
        ref: 'safeordersModel'
    },
    users_id: {
        type: Schema.Types.ObjectId,
        ref: 'usersModel'
    },
    statc:Boolean,
    resaon:String,
    sq_date:String,
    pay_img:String,
    yes_date:String
}, {
    versionKey: false
});
module.exports.payforlistsModel = model('payforlistsModel', payforlistsSchema, 'payforlists');