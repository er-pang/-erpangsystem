var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const  jwtAuth =require('./utils/jwt')
const {
    get
} = require('axios').default;

var usersRouter = require('./routes/users');
var safetypesRouter = require('./routes/safetypes');
var safegoodsRouter = require('./routes/safegoods');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var adminsRouter = require('./routes/admins')
var safeordersRouter = require('./routes/safeorders')
var payforlistsRouter = require('./routes/payforlists')
var imagesRouter = require('./routes/images')
const mongoose = require('mongoose');
const {
    log
} = require('console');
//设置要连接的MongoDB服务器地址
const dbURL = 'mongodb://localhost:27017/safesystem' ///safesystem要连接的数据库名称
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log(dbURL + "数据库连接成功");
})
var app = express();
app.use(cors());
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
}; //跨域

app.use(allowCrossDomain);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(jwtAuth)
app.use('/users', usersRouter);
app.use('/safetypes', safetypesRouter);
app.use('/safegoods', safegoodsRouter);
app.use('/images', imagesRouter);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/admins', adminsRouter)
app.use('/safeorders', safeordersRouter)
app.use('/payforlists', payforlistsRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log('3000端口启动成功');
})