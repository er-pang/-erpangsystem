var express = require('express');
var router = express.Router();
const {
    getAdmins,
    addAdmin,
    updateAdmin,
    getAdminById,
    deleteAdmin,
    getallAdmins,
    login
} = require('../service/adminsService')
/* GET home page. */
//获取管理员的信息
router.get('/getAdmins', async function (req, res, next) {
    const data = req.query;
    res.send(await getAdmins(data))
});
//获取所有管理员信息
router.get('/getallAdmins', async function (req, res, next) {
    const data = req.query;
    res.send(await getallAdmins(data))
});
//新增管理员数据
router.post('/addAdmin', async function (req, res, next) {
    //接收前端的数据
    const data = req.body;
    res.send(await addAdmin(data))

});
//修改管理员数据
router.post('/updateAdmin', async function (req, res, next) {
    //接收前端需要修改的数据
    const data = req.body;
    res.send(await updateAdmin(data))
});
//通过_ID找到管理员
router.get('/getAdminById', async function (req, res, next) {
    const data = req.query;
    //接收一个id
    res.send(await getAdminById(data))
});
//删除管理员
router.post('/deleteAdmin', async function (req, res, next) {
    //前端接收要删除的数据_ID
    const data = req.body;
    res.send(await deleteAdmin(data))
});
//登陆管理员
router.post('/login', async function (req, res, next) {
    //前端接收要删除的数据_ID
    const data = req.body;
    res.send(await login(data))
});
module.exports = router;