import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Sidebar from '../components/Sidebar';
import user from '../images/user.png';
import closeicon from '../images/closeicon.svg';
import { API_URL } from '../utils/config';
import ValidateMemberEdit from '../components/ValidateMemberEdit';
import axios from 'axios';

//測試有無讀取到環境變數
console.log(API_URL);

function MemberEdit(props) {
  const [image, setImage] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [date, setDate] = useState('2021-08-01');
  // const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');

  const [values, setValues] = useState({
    username: '',
    email: '',
    birth: '',
    phone: '',
    address: '',
    image: '',
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
    setErrors(ValidateMemberEdit(values));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //送資料到後端
    try {
      let formData = new FormData();
      formData.append('username', values.username);
      formData.append('email', values.email);
      formData.append('birth', values.birth);
      formData.append('phone', values.phone);
      formData.append('address', values.address);
      formData.append('image', values.image);
      let response = await axios.post(`${API_URL}/member/memberEdit`, formData);
      console.log(response);
    } catch (e) {
      console.error(e.response);
      //alert(e.response.data.message);
    }
    //錯誤處理
    setErrors(ValidateMemberEdit(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
    }
  }, [errors]);

  function submit() {
    console.log('成功送出!!');
  }

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (event) {
        setImage(event.target.result);
        setValues({
          ...values,
          image: e.target.files[0],
        });
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <>
      <div className="container flex mx-auto">
        <Sidebar />
        <div className="w-full xl:w-3/4">
          <BreadCrumbs />
          <h2 className="pl-10 text-3xl font-medium">會員資料修改</h2>
          <div className="mx-8 md:my-5 my-0">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form
                onSubmit={handleSubmit}
                onChange={handleFormChange}
                onInvalid={handleFormInvalid}
              >
                <div className="overflow-hidden shadow rounded-md">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="">
                      <div className="w-3/5 my-5 mx-auto">
                        <p className="text-center font-normal">上傳頭像</p>
                        <p className=" text-center font-normal">
                          (僅支援jpg、jpeg、png檔)
                        </p>
                        <div className="mx-auto mt-5 mb-14 relative w-28 h-28">
                          {!isUploaded ? (
                            <>
                              <label htmlFor="upload-input">
                                <img
                                  className="h-28 w-28 rounded-full border border-gray-100 shadow-sm object-cover hover:opacity-80 cursor-pointer"
                                  src={user}
                                  alt="user image"
                                  draggable={'false'}
                                />
                                <div className="absolute top-16 right-0 h-7 w-7 my-1 border-4 border-white rounded-full bg-white z-2">
                                  <svg
                                    className="fill-current text-yellow-600 hover:opacity-80 cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0"
                                    y="0"
                                    enableBackground="new 0 0 490.667 490.667"
                                    version="1.1"
                                    viewBox="0 0 490.667 490.667"
                                    xmlSpace="preserve"
                                  >
                                    <path d="M448 128h-67.627l-39.04-42.667H192v64h-64v64H64v213.333c0 23.467 19.2 42.667 42.667 42.667H448c23.467 0 42.667-19.2 42.667-42.667v-256C490.667 147.2 471.467 128 448 128zM277.333 405.333c-58.88 0-106.667-47.787-106.667-106.667S218.453 192 277.333 192 384 239.787 384 298.667s-47.787 106.666-106.667 106.666z"></path>
                                    <path d="M64 192L106.667 192 106.667 128 170.667 128 170.667 85.333 106.667 85.333 106.667 21.333 64 21.333 64 85.333 0 85.333 0 128 64 128z"></path>
                                    <path d="M277.333 230.4c-37.76 0-68.267 30.507-68.267 68.267 0 37.76 30.507 68.267 68.267 68.267 37.76 0 68.267-30.507 68.267-68.267S315.093 230.4 277.333 230.4z"></path>
                                  </svg>
                                </div>
                              </label>
                              <input
                                id="upload-input"
                                type="file"
                                name="image"
                                className="hidden"
                                accept=".jpg, .jpeg, .png"
                                onChange={handleImageChange}
                              />
                            </>
                          ) : (
                            <div className="relative">
                              <img
                                src={closeicon}
                                className="absolute top-16 right-0 h-7 w-7 my-1 border-4 border-white rounded-full bg-white z-5 cursor-pointer hover:opacity-80"
                                alt="closeIcon"
                                onClick={() => {
                                  setIsUploaded(false);
                                  setImage(null);
                                }}
                              />
                              <img
                                src={image}
                                alt="uploaded-img"
                                className="h-28 w-28 rounded-full object-cover"
                                draggable={'false'}
                              />
                            </div>
                          )}
                        </div>
                        <label
                          htmlFor="username"
                          className="block text-base font-medium text-gray-700"
                        >
                          姓名
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          id="username"
                          autoComplete="name"
                          className={`${
                            errors.username && 'ring-red-300 ring-1'
                          } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-wider`}
                        />
                        {errors.username && (
                          <p className="text-red-400 text-xs">
                            {errors.username}
                          </p>
                        )}
                      </div>

                      <div className="w-3/5 my-5 mx-auto">
                        <label
                          htmlFor="email"
                          className="block text-base font-medium text-gray-700"
                        >
                          電子信箱
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          id="email"
                          autoComplete="email"
                          className={`${
                            errors.email && 'ring-red-300 ring-1'
                          } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-wider`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs">{errors.email}</p>
                        )}
                      </div>
                      <div className="w-3/5 my-5 mx-auto">
                        <label
                          htmlFor="birth"
                          className="block text-base font-medium text-gray-700"
                        >
                          生日
                        </label>
                        <input
                          type="date"
                          name="birth"
                          id="birth"
                          value={values.birth}
                          onChange={handleChange}
                          className={`${
                            errors.birth && 'ring-red-300 ring-1'
                          } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-widest`}
                        />
                        {errors.birth && (
                          <p className="text-red-400 text-xs">{errors.birth}</p>
                        )}
                      </div>
                      <div className="w-3/5 my-5 mx-auto">
                        <label
                          htmlFor="phone"
                          className="block text-base font-medium text-gray-700"
                        >
                          手機號碼
                        </label>
                        <input
                          type="number"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          id="phone"
                          autoComplete="phone"
                          className={`${
                            errors.phone && 'ring-red-300 ring-1'
                          } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-widest`}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs">{errors.phone}</p>
                        )}
                      </div>
                      <div className="w-3/5 my-5 mx-auto">
                        <label
                          htmlFor="address"
                          className="block text-base font-medium text-gray-700"
                        >
                          地址
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          id="address"
                          autoComplete="address"
                          className={`${
                            errors.address && 'ring-red-300 ring-1'
                          } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-widest`}
                        />
                        {errors.address && (
                          <p className="text-red-400 text-xs">
                            {errors.address}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="px-4 py-3 w-3/5 mx-auto sm:px-6 text-right">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-base font-medium text-white border border-transparent rounded shadow-sm bg-gold-300 active:bg-yellow-500 focus:outline-none"
                      >
                        儲存
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberEdit;
