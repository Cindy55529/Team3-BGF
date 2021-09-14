import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MemberCenter() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 xl:py-32">
        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
          <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-center text-gray-900 sm:text-4xl md:mx-auto">
            會員中心
          </h2>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="md:grid-cols-2 grid gap-8 row-gap-5">
            <div className="relative p-px overflow-hidden border rounded hover:scale-105 group hover:shadow-xl transition duration-300 transform shadow-sm">
              <div className="absolute bottom-0 left-0 w-full h-1 group-hover:scale-x-100 duration-300 origin-left transform scale-x-0"></div>
              <div className="absolute bottom-0 left-0 w-1 h-full group-hover:scale-y-100 duration-300 origin-bottom transform scale-y-0"></div>
              <div className="absolute top-0 left-0 w-full h-1 group-hover:scale-x-100 duration-300 origin-right transform scale-x-0"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full group-hover:scale-y-100 duration-300 origin-top transform scale-y-0"></div>
              <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                <div className="mx-auto mb-6 lg:mb-0 lg:ml-20">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-50 lg:w-32 lg:h-32">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div>
                    <div className="mb-2 text-2xl font-semibold text-center leading-5">
                      帳戶資訊
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center mx-auto mt-2 text-lg text-deep-purple-accent-400 hover:text-yellow-500 transition-colors duration-200"
                    to="/MemberCenter/MemberEdit"
                  >
                    {' '}
                    會員資料修改
                  </Link>
                  <Link
                    className="inline-flex items-center mx-auto mt-2 text-lg text-deep-purple-accent-400 hover:text-yellow-500 transition-colors duration-200"
                    to="/MemberCenter/PasswordEdit"
                  >
                    {' '}
                    密碼修改
                  </Link>
                  <Link
                    className="inline-flex items-center mx-auto mt-2 text-lg hover:text-yellow-500 transition-colors duration-200"
                    to="/MemberCenter/Coupon"
                  >
                    我的折價券
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative p-px overflow-hidden border rounded hover:scale-105 group hover:shadow-xl transition duration-300 transform shadow-sm">
              <div className="absolute bottom-0 left-0 w-full h-1 group-hover:scale-x-100 duration-300 origin-left transform scale-x-0"></div>
              <div className="absolute bottom-0 left-0 w-1 h-full group-hover:scale-y-100 duration-300 origin-bottom transform scale-y-0"></div>
              <div className="absolute top-0 left-0 w-full h-1 group-hover:scale-x-100 duration-300 origin-right transform scale-x-0"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full group-hover:scale-y-100 duration-300 origin-top transform scale-y-0"></div>
              <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                <div className="mx-auto mb-6 lg:mb-0 lg:ml-20">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-50 lg:w-32 lg:h-32">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow ">
                  <div>
                    <div className="mb-2 text-2xl font-semibold text-center leading-5">
                      我的訂單
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center mx-auto mt-2 text-lg text-deep-purple-accent-400 hover:text-yellow-500 transition-colors duration-200"
                    to="/MemberCenter"
                  >
                    訂單紀錄
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberCenter;
