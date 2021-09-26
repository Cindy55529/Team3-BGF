const express = require('express');
const connection = require('./utils/db');
const path = require('path');

let app = express();

const cors = require('cors');
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

//session全站都會用 所以放在共用區
//  const expressSession = require('express-session');
//  app.use(expressSession())

//在此設一個讀body資料的中間件 否則會出現undefined 要放在讀取的API前面
app.use(express.urlencoded({ extended: true }));
//此中間件為解析json資料
app.use(express.json());

//用中間件來設定靜態檔案位置
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  let current = new Date(+new Date() + 8 * 3600 * 1000);
  let currentDateTime = current.toISOString().slice(0, 19).replace('T', ' ');
  console.log(`有位訪客 at ${currentDateTime}`);
  next();
});

app.get('/', function (request, response, next) {
  response.send('Hello~~');
});

//引入auth router
let authRouter = require('./routers/auth');
app.use('/auth', authRouter);

//引入member router
let memberRouter = require('./routers/member');
const { MulterError } = require('multer');
app.use('/member', memberRouter);


app.use((req, res, next) => {
  console.log('沒有符合的路由QQ');
  next();
});

//有上面就不會顯示這段 所以先註解
// app.use((req,res,next) =>{
//     res.status(404).json({message:"NOT FOUND"});
// });

//集合所有錯誤處理
app.use((err, req, res, next) => {
  //特殊錯誤處理方式(以multer為例)
  //因為她有一個自己的錯誤處理格式叫做 MulterError
  if (err instanceof MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: '檔案太大啦' });
    }
    return res.status(400).json({ message: err.message });
  }
  res.status(err.status).json({ message: err.message });
});

app.listen(3005, async () => {
  //await connection.connectAsync();
  console.log('web server啟動囉!!');
});
