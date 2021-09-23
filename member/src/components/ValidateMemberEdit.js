export default function ValidateMemberEdit(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = '請輸入此欄位';
  }
  if (!values.email) {
    errors.email = '請輸入此欄位';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '無效的電子信箱';
  }
  if (!values.birth) {
    errors.birth = '請輸入此欄位';
  }
  if (!values.phone) {
    errors.phone = '請輸入此欄位';
  } else if (!/^09\d{2}-?\d{3}-?\d{3}$/.test(values.phone)) {
    errors.phone = '無效的手機號碼';
  }
  if (!values.address) {
    errors.address = '請輸入此欄位';
  }

  return errors;
}
