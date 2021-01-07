//users 数据库的集合
const { Schema, model } = require('mongoose');

//配置集合结构

const usersSchema = new Schema({
    username: String,
    password: String,
    name: String,
    age: String,
    sex: String,
    phone: String,
    sfz: String,
    orders_id: [{
        type: Schema.Types.ObjectId,
        ref: 'safeordersModel'
    }],
    payfor_id: [{
        type: Schema.Types.ObjectId,
        ref: 'payforlistsModel'
    }],
}, {
    versionKey: false
});

//创建集合模型（所有数据的操作都是模型提供的方法）
//参数一（'usersModel'）：设置当前集合模型的名称
//参数二（usersSchema）：对应的集合结构
//参数三（'users'）：数据库中集合的名称

const usersModel = model('usersModel', usersSchema, 'users');
module.exports.usersModel = usersModel;