const {addSafegood,getSafegoods,updateSafegood,getSafegoodById,deleteSafegood,getallSafegoods} = require('../dao/safegoodsDao');

//添加保险产品
module.exports.addSafegood = async params => {
    const data = await addSafegood(params);
    //返回给第二层结果
    if (data._id) {
        return {
            msg: '添加保险产品成功',
            status: 1
        }
    }
    return {
        msg: '添加保险产品失败',
        status: 0,
    }
}

//获取所有保险产品
module.exports.getSafegoods=async function(params){
    return await getSafegoods(params);
    //返回给第二层结果
}
//获取全部的保险产品（不需要页数条数）
module.exports.getallSafegoods=async function(params){
    return await getallSafegoods(params);
    //返回给第二层结果
}

//通过 _id 获取保险产品
module.exports.getSafegoodById=async function(params){
    return await getSafegoodById(params);
    //返回给第二层结果
}

//修改保险产品
module.exports.updateSafegood=async function(params){
    const data= await updateSafegood(params);
    //返回给第二层结果
    if (data.nModified>0) {
        return {
            msg: '修改保险产品成功',
            status: 1
        };
    } 
    return {
        msg: '修改保险产品失败',
        status: 0
     }
}

//通过 _id 删除保险产品
module.exports.deleteSafegood=async function(params){
    const data= await deleteSafegood(params);
    //返回给第二层结果
    if (data.deletedCount>0) {
        return {
            msg: '删除保险产品成功',
            status: 1
        };
    } 
    return {
        msg: '删除保险产品失败',
        status: 0
     }
}