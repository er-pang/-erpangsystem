import apis from '../../../http/apis'
export default {
    namespaced: true,
    // 数据
    state: {
        UsersData: [],
        total: 0,
        pages: 0,
    },
    // 修改数据
    mutations: {
        changeUsersData(state, data) {
            state.UsersData = data.users
            state.total = data.total;
            state.pages = data.pages;
        },
    },
    // 异步方法
    actions: {
        // 查询客户
        async getUsers(context, datas) {
            const {
                data
            } = await apis.Users.getUsers(datas);
            if (data.users.length) {
                context.commit('changeUsersData', data);

            } else {
                alert("查询失败")
            }
        },
        // 删除客户
        async deleteUser(context, datas) {
            const data = await apis.Users.deleteUser(datas);
            if (data) {
                alert("删除成功")
            } else {
                alert("删除失败")
            }
        },
        // 修改客户
        async updateUser(context, datas) {
            const {
                data
            } = await apis.Users.updateUser(datas);
            if (data.status) {
                alert("修改成功")
            } else {
                alert("修改失败")
            }
        },
        // 增加客户
        async addUser(context, datas) {
            const data = await apis.Users.addUser(datas);
            if (data.status) {
                alert("添加成功")
            } else {
                alert("添加失败")
            }
        },
        // _id查询客户
        async getUserById(context, datas) {
            const data = await apis.Users.getUserById(datas);
            if (data.data) {
                return data.data
            } else {
                alert("查询失败")
            }
        },
        

    }

}