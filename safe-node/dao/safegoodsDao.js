const {
    safegoodsModel
} = require('./model/safegoodsModel');

//添加保险产品
module.exports.addSafegood = async function (params) {
    return await safegoodsModel.create(params);
}

//获取所有保险产品
module.exports.getallSafegoods = async function () {
    return await safegoodsModel.find().populate('type_id');
  
}
module.exports.getSafegoods = async function (params) {
    const {
        currentPage,
        pageSize,
        value
    } = params;
    //total 总条数
    const total = await safegoodsModel.countDocuments({
        $or: [{
            name: {
                $regex: value,
                $options: '$i'
            }
        },]
    });

    // //总页数
    const pages = Math.ceil(total / pageSize);
    var count = parseInt(pageSize);
    const safegoods = await safegoodsModel.find({
        $or: [{
            name: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            price: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            content: {
                $regex: value,
                $options: '$i'
            }
        },
        ]
    }).populate('type_id').limit(count).skip((currentPage - 1) * parseInt(count));
    return {
        total,
        pages,
        safegoods
    }
}

module.exports.getallSafegoods = async function (params) {
    const safegoods = await safegoodsModel.find().populate('type_id')
    return safegoods
}
//通过 _id 查找保险产品
module.exports.getSafegoodById = async function (params) {
    console.log(params);
    const data = await safegoodsModel.find(params);
    console.log(data);
    return data;
}

//修改保险产品
module.exports.updateSafegood = async function (params) {
    return await safegoodsModel.updateMany({
        _id: params._id
    }, params);
    //返回给第二层结果
}

//删除保险产品
module.exports.deleteSafegood = async function (params) {
    return await safegoodsModel.deleteOne(params);
}