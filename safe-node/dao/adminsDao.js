const {
    adminsModel
} = require('../dao/model/adminsModel')
//获取管理员数据
module.exports.getAdmins = async function ({
    role,
    value = '',
    pageSize,
    currentPage
}) {
    //满足value的总条数
    const total = await adminsModel.countDocuments({
        role,
        $or: [{
            name: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            username: {
                $regex: value,
                $options: '$i'
            }
        },

        ]
    })
    //总共的页数
    const pages = Math.ceil(total / pageSize);
    //显示的数据
    const data = await adminsModel.find({
        role,
        $or: [{
            name: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            username: {
                $regex: value,
                $options: '$i'
            }
        },

        ]
    }).limit(pageSize - 0).skip((currentPage - 1) * pageSize);
    return {
        total,
        pages,
        data
    }
}
//获取所有管理员
module.exports.getallAdmins = async function ({
    role
}) {
    const data = await adminsModel.find({
        role,
    })
    return data
}
//添加管理员

module.exports.addAdmin = async function (data) {
    //直接添加到管理员数据库
    return await adminsModel.create({
        ...data,
        power: true
    })
}
//更新管理员数据
module.exports.updateAdmin = async function (data) {
    //按照id查找
    return await adminsModel.updateOne({
        _id: data._id
    }, data)
}
//通过id找到管理数据
module.exports.getAdminById = async function (data) {
    return await adminsModel.findOne(data)
}
//删除管理员数据
module.exports.deleteAdmin = async function (data) {
    return await adminsModel.deleteOne(data)
}
module.exports.login = async function (data) {
    return await adminsModel.findOne(data)
}