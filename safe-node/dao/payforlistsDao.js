const {
    payforlistsModel
} = require('./model/payforlistsModel')
//获取理赔
module.exports.getPayforlists = async function ({
    value = '',
    pageSize,
    currentPage
}) {
    //满足value的总条数
    const total = await payforlistsModel.countDocuments({
        $or: [{
            sq_date: {
                $regex: value,
                $options: '$i'
            },
            yes_date: {
                $regex: value,
                $options: '$i'
            },
        }]
    });
    //总共的页数
    const pages = Math.ceil(total / pageSize);
    //显示的数据
    const data = await payforlistsModel.find({
        $or: [{
            sq_date: {
                $regex: value,
                $options: '$i'
            },
            yes_date: {
                $regex: value,
                $options: '$i'
            },
        }]
    }).populate({
        path: 'safeorder_id',
        populate: {
            path: 'acceptor_id',
        }
    }).populate({
        path: 'safeorder_id',
        populate: {
            path: 'holder_id',
        }
    }).populate({
        path: 'safeorder_id',
        populate: {
            path: 'type_id',
        }
    })
        .populate(
            'users_id'
        ).limit(pageSize - 0).skip((currentPage - 1) * pageSize);

    return {
        total,
        pages,
        data
    }
}
//新增理赔
module.exports.addPayforlists = async function (data) {
    //直接添加到理赔订单数据库
    return await payforlistsModel.create({
        ...data,

    })
}
//更新理赔或者管理员审批理赔
module.exports.updatePayforlist = async function (data) {
    //按照id查找
    return await payforlistsModel.updateOne({
        _id: data._id
    }, data)
}
//删除理赔
module.exports.deletePayforlist = async function (data) {
    return await payforlistsModel.deleteOne(data)
}
//通过id查找理赔
module.exports.getPayforlistById = async function (data) {

    return await payforlistsModel.findOne(data).populate({
        path: 'safeorder_id',
        populate: {
            path: 'acceptor_id',
        }
    }).populate({
        path: 'safeorder_id',
        populate: {
            path: 'holder_id',
        }
    }).populate({
        path: 'safeorder_id',
        populate: {
            path: 'type_id',
        }
    });
}