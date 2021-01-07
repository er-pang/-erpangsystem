const { getUsers, addUser, login, getUserById, updateUser, deleteUser, getAllUsers, isExist,addorderUser } = require('../dao/usersDao');
var {
    TOKEN_SECRET
} = require('../utils/consts')
const jwt = require('jsonwebtoken')
//获取所有用户
module.exports.getUsers = async function (params) {
    return await getUsers(params);
    //   console.log('get',data);
}
module.exports.getAllUsers = async function () {
    return await getAllUsers();
    //   console.log('get',data);
}

//新增用户
module.exports.addUser = async function (params) {
    const data = await addUser(params);
    // console.log(data);
    if (data._id) {
        return {
            msg: '注册用户成功',
            status: 1,
            data
        };
    } else {
        return {
            msg: '新增用户失败',
            status: 0,
            data
        };
    }
}

//用户名验证
module.exports.isExist = async function (params) {
    //形参params 接收是第一层发送过来的参数
//    console.log(2,params);
    const data = await isExist(params); //接收第三层数据
    if (data.length > 0) {
        //返回给第一层结果
      
        return {
            message: '验证失败',
            status: 0
        };
    } else {
        return {
            message: '验证成功',
            status: 1
        };
    }
}

//用户登录
module.exports.login = async function ({username,password}) {
    //形参params 接收是第一层发送过来的参数
    const data = await login({username,password}); //接收第三层数据
    if (data.length > 0) {
        //返回给第一层结果
        const token = jwt.sign({
            username
        },
        TOKEN_SECRET, {
            expiresIn: 60 * 60
        }
    );
        return {
            msg:'登录成功',
            status: 1,
            _id:data[0]._id,
            token
            
        };
    } else {
        return {
            msg: '登录失败',
            status: 0
        };
    }
}

//通过_id 获取用户
module.exports.getUserById = async function (params) {
    //形参params 接收是第一层发送过来的参数
    const data = await getUserById(params); //接收第三层数据
    return data;
}

//修改用户
module.exports.updateUser = async function (params) {
    //形参params 接收是第一层发送过来的参数
    const data = await updateUser(params); //接收第三层数据
    if (data.nModified > 0) {
        return {
            msg: '修改用户成功',
            status: 1,
            data
        };
    }
    return {
        msg: '修改用户失败',
        status: 0
    }

}
module.exports.addorderUser = async function (params) {
    //形参params 接收是第一层发送过来的参数
    const data = await addorderUser(params); //接收第三层数据
    if (data.nModified > 0) {
        return {
            msg: '添加订单id成功',
            status: 1,
            data
        };
    }
    return {
        msg: '添加订单id失败',
        status: 0
    }

}

//删除用户
module.exports.deleteUser = async function (params) {
    //形参params 接收是第一层发送过来的参数
    const data = await deleteUser(params); //接收第三层数据
    if (data.deletedCount > 0) {
        return {
            msg: '删除用户成功',
            status: 1
        };
    }
    return {
        msg: '删除用户失败',
        status: 0
    }

}

module.exports.addorderUser = async function (params) {
    //形参params 接收是第一层发送过来的参数
    const data = await addorderUser(params); //接收第三层数据
        return {
            msg: '添加成功',
            status: 1
        };

}