import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:h-screen lg:px-10 lg:py-5 lg:bg-white lg:border-r">
        <h2 className="pl-3 mt-5 text-3xl font-semibold text-left text-gray-800">
          會員中心
        </h2>
        <h3 className="pl-10 mt-8 font-semibold text-left">Hi,Gail</h3>
        <div className="flex flex-col justify-between flex-1 mt-5">
          <div>
            <ul>
              <a
                className="flex items-center px-4 py-2 text-gray-700 hover:text-black rounded-md"
                href="#"
              >
                <span className="mx-4 text-xl font-medium">帳戶資訊</span>
              </a>
              <div>
                <li>
                  <Link
                    className="flex items-center justify-start px-4 py-1 mt-1 text-gray-600 hover:text-gray-900 rounded-md"
                    to="/MemberCenter/MemberEdit"
                  >
                    <span className="mx-4 text-sm">會員資料修改</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-start px-4 py-1 mt-1 text-gray-600 hover:text-gray-900 rounded-md"
                    to="/MemberCenter/PasswordEdit"
                  >
                    <span className="mx-4 text-sm">密碼修改</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-start px-4 py-1 mt-1 text-gray-600 hover:text-gray-900 rounded-md"
                    to="/MemberCenter/Coupon"
                  >
                    <span className="mx-4 text-sm">我的折價券</span>
                  </Link>
                </li>
              </div>
            </ul>
            <ul className="mt-8">
              <a
                className="flex items-center px-4 py-2 text-gray-700 hover:text-black rounded-md"
                href="#"
              >
                <span className="mx-4 text-xl font-medium">我的訂單</span>
              </a>
              <div>
                <li>
                  <a
                    className="flex items-center justify-start px-4 py-1 mt-1 text-gray-600 hover:text-gray-900 rounded-md"
                    href="#"
                  >
                    <span className="mx-4 text-sm">訂單紀錄</span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
