export default function ValidateSignUp(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = '請輸入此欄位';
  }
  if (!values.email) {
    errors.email = '請輸入此欄位';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '無效的電子信箱';
  }
  if (!values.password) {
    errors.password = '請輸入此欄位';
  } else if (values.password.length < 6) {
    errors.password = '密碼需大於6位數';
  }
  if (!values.password2) {
    errors.password2 = '請輸入此欄位';
  } else if (values.password2 !== values.password) {
    errors.password2 = '兩個密碼不相符';
  }

  return errors;
}
