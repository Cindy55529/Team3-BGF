import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import login1 from '../images/login1.jpg';
import usePasswordToggle from '../hooks/usePasswordToggle';
import '../css/eye.css';
import useForm from '../hooks/useForm';
import validate from '../components/ValidateLogin';

function Login2(props) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
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
      <div className="container w-full md:mx-auto">
        <div className="flex w-full md:w-2/3 md:mx-auto mt-10 mb-10 shadow-md">
          <div className="hidden md:flex md:w-1/2">
            <img className="object-cover" src={login1} alt="sidePicture" />
          </div>

          <div className="md:w-1/2 md:mx-auto mb-2 w-full">
            <div className="flex justify-between w-full py-3 px-10 text-2xl font-semibold">
              <Link to="/Login2">
                <div className="border-b-2 border-yellow-600 py-1">登入</div>
              </Link>

              <Link to="/Login2/Signup">
                <div className="py-1">註冊</div>
              </Link>
            </div>
            <div className="block mx-10">
              <form
                onSubmit={handleSubmit}
                onChange={handleFormChange}
                onInvalid={handleFormInvalid}
              >
                <div className="my-5">
                  <label className="block text-sm font-medium  ">
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
                <div className="my-5 relative">
                  <label className="block text-sm font-medium ">密碼</label>
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
                </div>
                <button
                  type="submit"
                  className="w-full py-2 my-1  bg-yellow-500 rounded text-white active:bg-gold-300"
                >
                  登入
                </button>
                <div
                  className="
                flex 
                justify-between 
                mt-1"
                >
                  <Link
                    to="/Login2/Signup"
                    className="
                text-sm 
                hover:text-yellow-500"
                  >
                    點此註冊
                  </Link>
                  <Link
                    to="#"
                    className="
                text-sm 
                hover:text-yellow-500"
                    href="#"
                  >
                    忘記密碼?
                  </Link>
                </div>
                <hr className="mt-3 mb-4 border-gray-400" />
              </form>
              <div className="md:flex justify-between">
                <Link
                  to="#"
                  className="flex items-center hover:bg-yellow-500 py-2 px-2 rounded-lg justify-center hover:text-white"
                >
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    clipRule="evenodd"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#1877f2"
                      fillRule="nonzero"
                      d="M374.245 285.825l14.104-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.117V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.442 320.442 0 00250.408 512a320.42 320.42 0 0049.708-3.865v-222.31h74.129z"
                    ></path>
                  </svg>
                  <p className="text-sm xl:tracking-wider">使用facebook登入</p>
                </Link>
                <Link
                  to="#"
                  className="flex items-center hover:bg-yellow-500 py-2 px-2 rounded-lg justify-center hover:text-white"
                >
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="#167EE6"
                      d="M492.668 211.489l-208.84-.01c-9.222 0-16.697 7.474-16.697 16.696v66.715c0 9.22 7.475 16.696 16.696 16.696h117.606c-12.878 33.421-36.914 61.41-67.58 79.194L384 477.589c80.442-46.523 128-128.152 128-219.53 0-13.011-.959-22.312-2.877-32.785-1.458-7.957-8.366-13.785-16.455-13.785z"
                    ></path>
                    <path
                      fill="#12B347"
                      d="M256 411.826c-57.554 0-107.798-31.446-134.783-77.979l-86.806 50.034C78.586 460.443 161.34 512 256 512c46.437 0 90.254-12.503 128-34.292v-.119l-50.147-86.81c-22.938 13.304-49.482 21.047-77.853 21.047z"
                    ></path>
                    <path
                      fill="#0F993E"
                      d="M384 477.708v-.119l-50.147-86.81c-22.938 13.303-49.48 21.047-77.853 21.047V512c46.437 0 90.256-12.503 128-34.292z"
                    ></path>
                    <path
                      fill="#FFD500"
                      d="M100.174 256c0-28.369 7.742-54.91 21.043-77.847l-86.806-50.034C12.502 165.746 0 209.444 0 256s12.502 90.254 34.411 127.881l86.806-50.034c-13.301-22.937-21.043-49.478-21.043-77.847z"
                    ></path>
                    <path
                      fill="#FF4B26"
                      d="M256 100.174c37.531 0 72.005 13.336 98.932 35.519 6.643 5.472 16.298 5.077 22.383-1.008l47.27-47.27c6.904-6.904 6.412-18.205-.963-24.603C378.507 23.673 319.807 0 256 0 161.34 0 78.586 51.557 34.411 128.119l86.806 50.034c26.985-46.533 77.229-77.979 134.783-77.979z"
                    ></path>
                    <path
                      fill="#D93F21"
                      d="M354.932 135.693c6.643 5.472 16.299 5.077 22.383-1.008l47.27-47.27c6.903-6.904 6.411-18.205-.963-24.603C378.507 23.672 319.807 0 256 0v100.174c37.53 0 72.005 13.336 98.932 35.519z"
                    ></path>
                  </svg>
                  <p className="text-sm xl:tracking-wider">使用Google登入</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login2;
