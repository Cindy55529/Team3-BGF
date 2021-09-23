const express = require('express');
const connection = require('./utils/db');

let app = express();

const cors = require('cors');
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

//在此設一個讀body資料的中間件 否則會出現undefined 要放在讀取的API前面
app.use(express.urlencoded({ extended: true }));
//此中間件為解析json資料
app.use(express.json());

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

app.use((req, res, next) => {
  console.log('沒有符合的路由QQ');
  next();
});

//有上面就不會顯示這段 所以先註解
// app.use((req,res,next) =>{
//     res.status(404).json({message:"NOT FOUND"});
// });

app.listen(3005, async () => {
  //await connection.connectAsync();
  console.log('web server啟動囉!!');
});
