const connection = require("./utils/db");
connection.getConnection((err) => {
    if (err) {
      console.error("資料庫連不上");
    }else{console.log("連線成功")}
    // connection.end(function (err) {
    //     console.log("關閉失敗")
    //   });
  });

