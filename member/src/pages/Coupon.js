import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Coupon() {
  return (
    <>
      <Navbar />
      <div className="container flex mx-auto">
        <Sidebar />
        <div className="">
          <BreadCrumbs />
          <h2 className="mb-3 pl-10 text-3xl font-medium text-left">我的折價券</h2>
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="sm:mx-auto max-w-screen-lg">
              <div className="flex flex-col items-start justify-between py-4 text-left rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-yellow-50 transition duration-300 transform">
                <div className="mb-4 lg:mb-0">
                  <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                    歡慶新站開張 50% OFF
                  </h5>
                  <div className="relative pr-8">
                    <p className="text-base text-gray-700 md:text-lg">
                      為慶祝「BoardGameFriend 桌友」新站上線，邀請您共襄盛舉!
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                      折價面額：5折
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                      適用商品：全站所有商品
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                      使用期限：2021/09/01~2021/10/31
                    </p>
                  </div>
                </div>
                <div className="flex justify-start w-56 lg:justify-end">
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold text-deep-purple-accent-400 hover:text-yellow-500 transition-colors duration-200"
                  >
                    點此選購商品
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between py-4 text-left rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-yellow-50 transition duration-300 transform">
                <div className="mb-4 lg:mb-0">
                  <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                    新會員見面禮 20% OFF
                  </h5>
                  <div className="relative pr-8">
                    <p className="text-base text-gray-700 md:text-lg">
                      謝謝您加入「BoardGameFriend 桌友」
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                      折價面額：8折
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                      適用商品：全站所有商品
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                      使用期限：2021/09/01~2021/10/31
                    </p>
                  </div>
                </div>
                <div className="flex justify-start w-56 lg:justify-end">
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold text-deep-purple-accent-400 hover:text-yellow-500 transition-colors duration-200"
                  >
                    點此選購商品
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coupon;
