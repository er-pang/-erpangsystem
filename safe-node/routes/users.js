var express = require('express');
var router = express.Router();
const { getUsers, addUser, login, getUserById, updateUser, deleteUser, getAllUsers, isExist,addorderUser } = require('../service/usersService.js');


//获取所有用户
router.get('/getUsers', async function (req, res, next) {
    res.send(await getUsers(req.query));
});
router.get('/getAllUsers', async function (req, res, next) {
    res.send(await getAllUsers());
});

//新增用户
router.post('/addUser', async function (req, res, next) {
    res.send(await addUser(req.body));
});

//验证用户名是否存在
router.post('/isExist', async function (req, res, next) {
    res.send(await isExist(req.body));
});

//用户登录
router.post('/login', async function (req, res, next) {
    res.send(await login(req.body));
});

//通过_id 获取用户
router.get('/getUserById', async function (req, res, next) {
    res.send(await getUserById(req.query));
});

//修改用户
router.post('/updateUser', async function (req, res, next) {
    res.send(await updateUser(req.body));
});
//把订单id添加到用户里面
router.post('/addorderUser', async function (req, res, next) {
    res.send(await addorderUser(req.body));
});


//删除用户
router.post('/deleteUser', async function (req, res, next) {
   
    res.send(await deleteUser(req.body));
});

router.post('/addorderUser', async function (req, res, next) {
   
    res.send(await addorderUser(req.body));
});


module.exports = router;