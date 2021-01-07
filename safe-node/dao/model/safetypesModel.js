//safetypes 数据库的集合
const { Schema, model } = require('mongoose');

//配置集合结构
const safetypesSchema = new Schema({ name: String, date: String }, { versionKey: false });

//创建集合模型（所有数据的操作都是模型提供的方法）
//参数一（'safetypesModel'）：设置当前集合模型的名称
//参数二（safetypesSchema）：对应的集合结构
//参数三（'safetypes'）：数据库中集合的名称

const safetypesModel = model('safetypesModel', safetypesSchema, 'safetypes');
module.exports.safetypesModel = safetypesModel;