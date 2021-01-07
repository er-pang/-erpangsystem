const { addSafetype, getSafetypes, getSafetypeById, deleteSafetype, updateSafetype, getAllSafetypes } = require('../dao/safetypesDao');


//添加保险分类
module.exports.addSafetype = async function (params) {
    const data = await addSafetype(params);
    //返回给第二层结果
    if (data._id) {
        return {
            msg: '添加保险类型成功',
            status: 1
        }
    }
    return {
        msg: '添加保险类型失败',
        status: 0,
    }
}

//获取所有保险分类
module.exports.getSafetypes = async function (params) {
    return await getSafetypes(params);
    //返回给第二层结果
}
//获取所有保险分类（没有条数）
module.exports.getAllSafetypes = async function () {
    return await getAllSafetypes();
    //返回给第二层结果
}

//通过 _id 获取保险分类
module.exports.getSafetypeById = async function (params) {
    return await getSafetypeById(params);
    //返回给第二层结果
}

//修改保险分类
module.exports.updateSafetype = async function (params) {
    const data = await updateSafetype(params);
    //返回给第二层结果
    if (data.nModified > 0) {
        return {
            msg: '修改保险分类成功',
            status: 1
        };
    }
    return {
        msg: '修改保险分类失败',
        status: 0
    }
}

//通过 _id 删除保险分类
module.exports.deleteSafetype = async function (params) {
    const data = await deleteSafetype(params);
    //返回给第二层结果
    if (data.deletedCount > 0) {
        return {
            msg: '删除保险分类成功',
            status: 1
        };
    }
    return {
        msg: '删除保险分类失败',
        status: 0
    }
}