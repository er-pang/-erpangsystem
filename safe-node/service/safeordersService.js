const {
    getSafeorders,
    addSafeorders,
    updateSafeorder,
    deleteSafeorder,
    getSafeorderById
} = require('../dao/safeordersDao')
//获取订单数据
module.exports.getSafeorders = async data => {
    return await getSafeorders(data)
}
//新增保险订单
module.exports.addSafeorders = async data => {
    const param = await addSafeorders(data)
    
    if (param) {
        return {
            status: 1,
            msg: '新增成功',
            _id:param._id
        }
    } else {
        return {
            status: 0,
            msg: '新增失败'
        }
    }
}
//更新保险订单或者管理员审批退保
module.exports.updateSafeorder = async data => {
    const statc = await updateSafeorder(data)
    if (statc.nModified) {
        return {
            status: 1,
            msg: '修改成功'
        }
    } else {
        return {
            status: 0,
            msg: '修改失败'
        }
    }
}
//删除保险订单
module.exports.deleteSafeorder = async data => {
    const statc = await deleteSafeorder(data)
    if (statc.deletedCount) {
        return {
            status: 1,
            msg: '删除成功',
        };
    } else {
        return {
            status: 0,
            msg: '删除失败'
        };
    }
}
//通过id查找订单
module.exports.getSafeorderById = async data => {
    const statc = await getSafeorderById(data)
    //statc就是一个数组，如果通过id查到后就不会是个空数组
    if (statc) {
        return {
            status: 1,
            msg: '获取成功',
            statc
        };
    } else {
        return {
            status: 0,
            msg: '获取失败'
        };
    }
}