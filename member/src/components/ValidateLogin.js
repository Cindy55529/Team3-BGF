export default function ValidateLogin(values) {
  let errors = {};
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
  return errors;
}
