import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import login1 from '../images/login1.jpg';
import usePasswordToggle from '../hooks/usePasswordToggle';
import '../css/eye.css';
import useForm from '../hooks/useForm';
import validate from '../components/ValidateSignUp';

function Signup(props) {
  const {
    handleChange,
    handleFormChange,
    handleFormInvalid,
    handleSubmit,
    values,
    errors,
  } = useForm(submit, validate);
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  function submit() {
    console.log('成功送出!!');
  }
  return (
    <>
      <div className="container w-full md:mx-auto ">
        <div className="flex w-full md:w-2/3 md:mx-auto mt-10 mb-10 shadow-md">
          <div className="hidden md:flex md:w-1/2">
            <img className="object-cover" src={login1} alt="sidePicture" />
          </div>

          <div className="md:w-1/2 md:mx-auto mb-2 w-full">
            <div className="flex justify-between w-full py-3 px-10 text-2xl font-semibold">
              <Link to="/Login2">
                <div className="py-1">登入</div>
              </Link>

              <Link to="/Login2/Signup">
                <div className="border-b-2 border-yellow-600 py-1">註冊</div>
              </Link>
            </div>
            <div className="block mx-10">
              <form
                onSubmit={handleSubmit}
                onChange={handleFormChange}
                onInvalid={handleFormInvalid}
              >
                <div className="my-3">
                  <label className="block text-sm font-medium ">姓名</label>
                  <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    className={`${
                      errors.username && 'ring-red-300 ring-1'
                    } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-wider`}
                  />
                  {errors.username && (
                    <p className="text-red-400 text-xs">{errors.username}</p>
                  )}
                </div>
                <div className="my-3">
                  <label className="block text-sm  font-medium  ">
                    電子信箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`${
                      errors.email && 'ring-red-300 ring-1'
                    } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-wider`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs">{errors.email}</p>
                  )}
                </div>
                <div className="my-3 relative">
                  <label className="block text-sm  font-medium ">密碼</label>
                  <input
                    type={PasswordInputType}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className={`${
                      errors.password && 'ring-red-300 ring-1'
                    } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-widest`}
                  />
                  <span className="password-toogle-icon">{ToggleIcon}</span>
                  {errors.password && (
                    <p className="text-red-400 text-xs">{errors.password}</p>
                  )}

                  <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>
                <div className="my-3 relative">
                  <label className="block text-sm  font-medium ">
                    再次輸入密碼
                  </label>
                  <input
                    type={PasswordInputType}
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    className={`${
                      errors.password2 && 'ring-red-300 ring-1'
                    } w-full h-8 mt-2  border-b-2 rounded focus:ring-gold-300 focus:outline-none focus:ring-2 focus:border-opacity-0 tracking-widest`}
                  />
                  <span className="password-toogle-icon">{ToggleIcon}</span>
                  {errors.password2 && (
                    <p className="text-red-400 text-xs">{errors.password2}</p>
                  )}

                  <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 my-1  bg-yellow-500 rounded text-white active:bg-gold-300"
                >
                  註冊
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
