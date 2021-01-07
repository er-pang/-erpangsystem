const { safetypesModel } = require('./model/safetypesModel');


//添加保险分类
module.exports.addSafetype = async function (params) {
    return await safetypesModel.create(params);
    //返回给第二层结果
}

//获取所有保险分类
module.exports.getSafetypes = async function (params) {
    const { currentPage, pageSize, value } = params;
    //total 总条数
    const total = await safetypesModel.countDocuments({
        $or: [
            { name: { $regex: value, $options: '$i' } },
        ]
    });

    // //总页数
    const pages = Math.ceil(total / pageSize);
    var count = parseInt(pageSize);
    const safetypes = await safetypesModel.find({
        $or: [
            { name: { $regex: value, $options: '$i' } },
        ]
    }).limit(count).skip((currentPage - 1) * parseInt(count));
    return {
        total, pages, safetypes
    }
}
//获取所有保险分类（没有条数）
module.exports.getAllSafetypes = async function () {
    return await safetypesModel.find();
  
}

//获取所有保险分类（没有条数）
module.exports.getAllSafetypes = async function () {
    return await safetypesModel.find();

}
//通过 _id 查找保险分类
module.exports.getSafetypeById = async function (params) {
    return await safetypesModel.find(params);
}

//修改保险分类
module.exports.updateSafetype = async function (params) {
    return await safetypesModel.updateMany({ _id: params._id }, params);
    //返回给第二层结果

}

//删除保险分类
module.exports.deleteSafetype = async function (params) {
    console.log(params);
    return await safetypesModel.deleteOne(params);
}