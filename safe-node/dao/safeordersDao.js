const {
    safeordersModel
} = require('../dao/model/safeordersModel')
//获取保险数据
module.exports.getSafeorders = async function ({
    value,
    pageSize,
    currentPage
}) {
    // console.log(value);
    //满足value的总条数
    const total = await safeordersModel.countDocuments({
        $or: [{
                date: {
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
        ]
    })
    //总共的页数
    const pages = Math.ceil(total / pageSize);
    //显示的数据
    const data = await safeordersModel.find({
        $or: [{
                date: {
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
        ]
    }).populate(
        'acceptor_id'
    ).populate({
        path: 'type_id',
        // populate: {
        //     path: 'type_id',
        // },
    }).populate(
        'holder_id'
    ).limit(pageSize - 0).skip((currentPage - 1) * pageSize);
    return {
        total,
        pages,
        data
    }
}
//新增保险订单
module.exports.addSafeorders = async function (data) {
    //直接添加到保险订单数据库
    return await safeordersModel.create({
        ...data,
        tb: false,
    })
}
//更新保险订单或者管理员审批退保
module.exports.updateSafeorder = async function (data) {
    //按照id查找
    return await safeordersModel.updateOne({
        _id: data._id
    }, data)
}
//删除保险订单
module.exports.deleteSafeorder = async function (data) {
    return await safeordersModel.deleteOne(data)
}
//通过id查找订单
module.exports.getSafeorderById = async function (data) {
    return await safeordersModel.findOne(data)
}