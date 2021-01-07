const {
    usersModel
} = require('./model/usersModel');
//获取所有用户
module.exports.getUsers = async function (params) {
    const {
        currentPage,
        pageSize,
        value
    } = params;

    //total 总条数
    const total = await usersModel.countDocuments({
        $or: [{
            username: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            name: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            age: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            sex: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            phone: {
                $regex: value,
                $options: '$i'
            }
        },
        {
            sfz: {
                $regex: value,
                $options: '$i'
            }
        },
        ]
    });

    // pages 总页数
    const pages = Math.ceil(total / pageSize);
    var count = parseInt(pageSize);
    const users = await usersModel.find({
        $or: [
            { username: { $regex: value, $options: '$i' } },
            { name: { $regex: value, $options: '$i' } },
            { age: { $regex: value, $options: '$i' } },
            { sex: { $regex: value, $options: '$i' } },
            { phone: { $regex: value, $options: '$i' } },
            { sfz: { $regex: value, $options: '$i' } },
        ]
    }).populate({
        path: 'orders_id',
        populate: {
            path: 'acceptor_id'
        }
    })
        .populate({
            path: 'orders_id',
            populate: {
                path: 'holder_id',
            },
        }).populate({
            path: 'orders_id',
            populate: {
                path: 'type_id',
            },
        })
        .populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',
                populate: {
                    path: 'acceptor_id',
                },

            }
        }).populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',

                populate: {
                    path: 'holder_id',
                },

            }
        }).populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',
                populate: {
                    path: 'type_id',
                },
            }
        })
        .populate({
            path: 'orders_id',
            populate: {
                path: 'holder_id',
            },
        }).populate({
            path: 'orders_id',
            populate: {
                path: 'type_id',
            },
        })

        .limit(count).skip((currentPage - 1) * parseInt(count));
    return {
        total,
        pages,
        users
    }
}
module.exports.getAllUsers = async function () {
    return await usersModel.find({

    }).populate({
        path: 'orders_id',
        populate: {
            path: 'acceptor_id'
        }
    })
        .populate({
            path: 'orders_id',
            populate: {
                path: 'holder_id',
            },
        }).populate({
            path: 'orders_id',
            populate: {
                path: 'type_id',
            },
        })
        .populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',
                populate: {
                    path: 'acceptor_id',
                },

            }
        }).populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',

                populate: {
                    path: 'holder_id',
                },

            }
        }).populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',
                populate: {
                    path: 'type_id',
                },
            }
        })
        .populate({
            path: 'orders_id',
            populate: {
                path: 'holder_id',
            },
        }).populate({
            path: 'orders_id',
            populate: {
                path: 'type_id',
            },
        });

}

//添加新用户
module.exports.addUser = async function (params) {
    return await usersModel.create(params);
    //返回给第二层结果
}

//注册用户名验证
module.exports.isExist = async function (params) {
    return await usersModel.find(params);
}

//用户登录
module.exports.login = async function (params) {
    return await usersModel.find(params);
    //返回给第二层结果
}

//通过_id获取用户
module.exports.getUserById = async function (params) {
    return await usersModel.find(params).populate({
        path: 'orders_id',
        populate: {
            path: 'acceptor_id'
        }
    })
        .populate({
            path: 'orders_id',
            populate: {
                path: 'holder_id',
            },
        }).populate({
            path: 'orders_id',
            populate: {
                path: 'type_id',
            },
        })
        .populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',
                populate: {
                    path: 'acceptor_id',
                },

            }
        }).populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',

                populate: {
                    path: 'holder_id',
                },

            }
        }).populate({
            path: 'payfor_id',
            populate: {
                path: 'safeorder_id',
                populate: {
                    path: 'type_id',
                },
            }
        })
        .populate({
            path: 'orders_id',
            populate: {
                path: 'holder_id',
            },
        }).populate({
            path: 'orders_id',
            populate: {
                path: 'type_id',
            },
        });


    //返回给第二层结果
}

//修改用户
module.exports.updateUser = async function (params) {
    return await usersModel.updateMany({
        _id: params._id
    }, params);
    //返回给第二层结果
}
module.exports.addorderUser = async function (params) {
    return await usersModel.updateMany({
        _id: params._id
    }, {
        $push:{
            'orders_id':params.orders_id
        }
    });
    //返回给第二层结果
}

//通过id删除用户
module.exports.deleteUser = async function (params) {
    return await usersModel.deleteOne(params);
    //返回给第二层结果
}

module.exports.addorderUser = async function (params) {
    // console.log(params);
    return await usersModel.findOneAndUpdate({
        _id: params._id
    },{
        $push:{
            'orders_id':params.orders_id
            
        }
    });
    //返回给第二层结果
}