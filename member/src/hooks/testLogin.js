import react from 'react';
import axios from 'axios';

function testLogin() {
  // 帳號
  const [userName, setUserName] = react.useState(undefined);

  // 密碼
  const [userPwd, setUserPwd] = react.useState(undefined);

  // 錯誤訊息
  const [errMsg, setErrMsg] = react.useState(undefined);

  const handleUserNameOnChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPwdOnChange = (e) => {
    setUserPwd(e.target.value);
  };

  let userData = {
    userName: userName,
    userPwd: userPwd,
  };

  axios.post(`/api/login`, userData).then((resp) => {
    if (resp.status === 200) {
      if (resp.data === 'error') {
        setErrMsg('登入錯誤!!');
      } else {
        // 登入成功
      }
    }
  });

  return <div></div>;
}

export default testLogin;
