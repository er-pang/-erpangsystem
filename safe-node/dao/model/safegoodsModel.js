//safegoods 数据库的集合
const {Schema,model}=require('mongoose');

//配置集合结构
const safegoodsSchema=new Schema({
    name:String,
    price:String,
    content:String,
    good_img:String,
    type_id:{
        type:Schema.Types.ObjectId,
        ref:'safetypesModel'
    },
},{
    versionKey: false
});

//创建集合模型（所有数据的操作都是模型提供的方法）
//参数一（'safegoodsModel'）：设置当前集合模型的名称
//参数二（safegoodsSchema）：对应的集合结构
//参数三（'safegoods'）：数据库中集合的名称

const safegoodsModel=model('safegoodsModel',safegoodsSchema,'safegoods');
module.exports.safegoodsModel = safegoodsModel;