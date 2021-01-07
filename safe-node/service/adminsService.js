const {
    getAdmins,
    addAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin,
    getallAdmins,
    login
} = require('../dao/adminsDao')
//获取数据
var {
    TOKEN_SECRET
} = require('../utils/consts')
const jwt = require('jsonwebtoken')
module.exports.getAdmins = async data => {
    return await getAdmins(data)
}
//获取所有管理员数据
module.exports.getallAdmins = async data => {
    return await getallAdmins(data)
}
//添加管理员
module.exports.addAdmin = async data => {
    const statc = await addAdmin(data)
    if (statc._id) {
        return {
            status: 1,
            msg: '新增成功'
        }
    } else {
        return {
            status: 0,
            msg: '新增失败'
        }
    }
}
//更新管理员数据
module.exports.updateAdmin = async data => {
    const statc = await updateAdmin(data)
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
//通过Id找到管理员
module.exports.getAdminById = async data => {
    const statc = await getAdminById(data)
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
//删除管理员
module.exports.deleteAdmin = async data => {
    const statc = await deleteAdmin(data)
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
module.exports.login = async ({username,password,role}) => {
    const statc = await login({username,password,role})
    if (statc) {
        if (statc.power) {
            const token = jwt.sign({
                    username
                },
                TOKEN_SECRET, {
                    expiresIn: 60 * 60
                }
            );
            return {
                status: 1,
                msg: '登陆成功',
                _id: statc._id,
                token
            };
        } else {
            return {
                status: 2,
                msg: '登陆失败，权限不够'
            };
        }

    } else {
        return {
            status: 0,
            msg: '登陆失败'
        };
    }
}