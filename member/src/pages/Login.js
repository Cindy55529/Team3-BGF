import React from 'react';
import Navbar from '../components/Navbar';

function Login() {
  return (
    <>
      <Navbar />
      <div className="justify-center md:h-screen md:flex">
        <div
          className="container relative w-full h-full max-w-full mt-12 overflow-hidden bg-white rounded shadow-2xl md:w-2/3 min-h-1/2 lg:h-3/4"
          id="container"
        >
          <div className="absolute left-0 z-10 w-1/2 h-full opacity-0 form-container sign-up-container transition-all duration-700 ease-in-out">
            <form
              className="flex flex-col items-center justify-center h-full text-center bg-white px-14"
              action="#"
            >
              <h1 className="text-3xl font-extrabold">創建帳戶</h1>
              <input
                className="w-full my-1 bg-gray-200 border-0 rounded"
                type="text"
                placeholder="姓名"
              />
              <input
                className="w-full my-1 bg-gray-200 border-0 rounded"
                type="email"
                placeholder="電子信箱"
              />
              <input
                className="w-full my-1 bg-gray-200 border-0 rounded"
                type="password"
                placeholder="密碼"
              />
              <input
                className="w-full my-1 bg-gray-200 border-0 rounded"
                type="password"
                placeholder="再次輸入密碼"
              />
              <button className="px-10 py-1 text-lg font-semibold tracking-widest text-white bg-orange-400 border-0 rounded-full active:scale-95 ease-in delay-75 transform">
                註冊
              </button>
            </form>
          </div>
          <div className="absolute left-0 z-20 w-1/2 h-full form-container sign-in-container transition-all duration-700 ease-in-out">
            <form
              className="flex flex-col items-center justify-center h-full text-center bg-white px-14"
              action="#"
            >
              <h1 className="text-3xl font-extrabold">會員登入</h1>

              <input
                className="w-full h-10 my-1 bg-gray-200 border-0 rounded"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full h-10 my-1 bg-gray-200 border-0 rounded"
                type="password"
                placeholder="Password"
              />
              <a className="my-2" href="#">
                忘記密碼?
              </a>
              <button className="px-10 py-1 text-lg font-semibold tracking-widest text-white bg-black border-0 rounded-full active:scale-95 ease-in delay-75 transform">
                登入
              </button>
            </form>
          </div>
          <div className="absolute top-0 z-40 w-1/2 h-full overflow-hidden overlay-container left-1/2 duration-700 ease-in-out transform">
            <div className="relative h-full overlay bg-gradient-to-r from-orange-700 to-red-500 -left-full w-2full duration-700 ease-in-out transform translate-x-0">
              <div className="absolute top-0 flex flex-col items-center justify-center w-1/2 h-full px-3 text-center overlay-panel overlay-left -translate-x-1/5 duration-700 ease-in-out transform translate-x-0">
                <h1 className="text-3xl font-extrabold text-white">歡迎回來</h1>
                <p className="my-2 text-xl font-extrabold text-white">
                  Board Game Friend
                </p>
                <button
                  id="signIn"
                  className="px-10 py-1 text-lg font-semibold tracking-widest text-white border rounded-full active:scale-95 ease-in delay-75 transform"
                >
                  登入
                </button>
              </div>
              <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-1/2 h-full px-3 text-center overlay-panel overlay-right duration-700 ease-in-out transform translate-x-0">
                <h1 className="text-3xl font-extrabold text-white">加入我們</h1>
                <p className="my-2 text-xl font-extrabold text-white">
                  開始我們的桌遊冒險
                </p>
                <button
                  id="signUp"
                  className="px-10 py-1 text-lg font-semibold tracking-widest text-white border rounded-full active:scale-95 ease-in delay-75 transform"
                >
                  註冊
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full mb-5 md:hidden">
          <form className="text-center bg-white px-14" action="#">
            <h1 className="text-3xl font-extrabold">會員登入</h1>
            <input
              className="w-full my-1 bg-gray-200 border-0 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full my-1 bg-gray-200 border-0 rounded"
              type="password"
              placeholder="Password"
            />
            <a className="block my-2" href="#">
              忘記密碼?
            </a>
            <button className="px-10 py-1 text-lg font-semibold tracking-widest text-white bg-orange-400 border-0 rounded-full active:scale-95 ease-in delay-75 transform">
              登入
            </button>
            <div className="mt-3">
              不是會員嗎?
              <a className="hover:text-yellow-500" href="/s2.html">
                點此註冊
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
