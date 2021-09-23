import { useEffect, useState } from 'react';

//錯誤訊息步驟
//1.建立一個新的錯誤處理狀態
//2.一個錯誤處理的function
//3.送回去給表單

const useFormL = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //使用者修改欄位時 清空錯誤訊息
  const handleFormChange = (e) => {
    console.log('更新欄位: ', e.target.name);

    // 該欄位的錯誤訊息清空
    const updatedErrors = {
      ...errors,
      [e.target.name]: '',
    };

    setErrors(updatedErrors);
  };

  // 表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息預設呈現方式(跳出的訊息泡泡)
    e.preventDefault();
    setErrors(validate(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //錯誤處理
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleFormChange,
    handleFormInvalid,
    handleSubmit,
    values,
    errors,
  };
};

export default useFormL;
