const {
    getPayforlists,
    addPayforlists,
    updatePayforlist,
    deletePayforlist,
    getPayforlistById
} = require('../dao/payforlistsDao')
const {
    moverFiles,
    deleteFiles
  } = require('../utils/handleFiles')
//获取理赔数据
module.exports.getPayforlists = async data => {
    return await getPayforlists(data)
}
//新增理赔
module.exports.addPayforlists = async data => {
    const param = await addPayforlists(data)
    if (param) {
        moverFiles({
            frompath: './public/temp',
            topath: './public/images',
            filename: data.pay_img
          })
          deleteFiles('./public/temp')
        return {
            status: 1,
            msg: '新增成功',
            param
        }
    } else {
        return {
            status: 0,
            msg: '新增失败'
        }
    }
}
//更新理赔或者管理员审批理赔
module.exports.updatePayforlist = async data => {
    const statc = await updatePayforlist(data)
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
//删除理赔
module.exports.deletePayforlist = async data => {
    const statc = await deletePayforlist(data)
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
//通过id查找理赔
module.exports.getPayforlistById = async data => {
    const statc = await getPayforlistById(data)
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