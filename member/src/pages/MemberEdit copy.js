import React, { useState } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import w1 from '../images/w1.jpg';

function MemberEdit(props) {
  const [date, setDate] = useState('2021-08-01');
  return (
    <>
      <div className="container flex mx-auto">
        <Sidebar />
        <div className="w-full xl:w-3/4">
          <BreadCrumbs />
          <h2 className="pl-10 text-3xl font-medium">會員資料修改</h2>
          <div className="mt-5">
            <div className="mx-8 mt-10 sm:mt-0">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="mx-auto mb-10 relative w-28 h-28">
                        <img
                          className="h-28 w-28 rounded-full border border-gray-100 shadow-sm object-cover"
                          src={w1}
                          alt="user image"
                        />
                        <input type="file"/>
                        <div className="absolute top-16 right-0 h-8 w-8 my-1 border-4 border-white rounded-full bg-white z-2">
                          <svg
                            className="fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 420.8 420.8"
                            version="1.1"
                            viewBox="0 0 420.8 420.8"
                            xmlSpace="preserve"
                          >
                            <path d="M406.8 96.4c-8.4-8.8-20-14-33.2-14h-66.4v-.8c0-10-4-19.6-10.8-26-6.8-6.8-16-10.8-26-10.8h-120c-10.4 0-19.6 4-26.4 10.8-6.8 6.8-10.8 16-10.8 26v.8h-66c-13.2 0-24.8 5.2-33.2 14-8.4 8.4-14 20.4-14 33.2v199.2C0 342 5.2 353.6 14 362c8.4 8.4 20.4 14 33.2 14h326.4c13.2 0 24.8-5.2 33.2-14 8.4-8.4 14-20.4 14-33.2V129.6c0-13.2-5.2-24.8-14-33.2zM400 328.8h-.4c0 7.2-2.8 13.6-7.6 18.4s-11.2 7.6-18.4 7.6H47.2c-7.2 0-13.6-2.8-18.4-7.6-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2 2.8-13.6 7.6-18.4s11.2-7.6 18.4-7.6h77.2c6 0 10.8-4.8 10.8-10.8V81.2c0-4.4 1.6-8.4 4.4-11.2s6.8-4.4 11.2-4.4h119.6c4.4 0 8.4 1.6 11.2 4.4 2.8 2.8 4.4 6.8 4.4 11.2v11.6c0 6 4.8 10.8 10.8 10.8H374c7.2 0 13.6 2.8 18.4 7.6s7.6 11.2 7.6 18.4v199.2z"></path>
                            <path d="M210.4 130.8c-27.2 0-52 11.2-69.6 28.8-18 18-28.8 42.4-28.8 69.6s11.2 52 28.8 69.6c18 18 42.4 28.8 69.6 28.8s52-11.2 69.6-28.8c18-18 28.8-42.4 28.8-69.6s-11.2-52-28.8-69.6c-17.6-17.6-42.4-28.8-69.6-28.8zM264.8 284c-14 13.6-33.2 22.4-54.4 22.4S170 297.6 156 284c-14-14-22.4-33.2-22.4-54.4 0-21.2 8.8-40.4 22.4-54.4 14-14 33.2-22.4 54.4-22.4s40.4 8.8 54.4 22.4c14 14 22.4 33.2 22.4 54.4.4 21.2-8.4 40.4-22.4 54.4z"></path>
                            <circle cx="352.8" cy="150" r="19.6"></circle>
                          </svg>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-5">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            姓名
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autocomplete="name"
                            className="block w-full mt-1 h-8 border-b-2  focus:ring-gold-300 focus:outline-none focus:ring-2 tracking-wider focus:border-opacity-0  sm:text-sm rounded-md "
                          />
                        </div>

                        <div className="col-span-5">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            電子信箱
                          </label>
                          <input
                            type="email"
                            name="email-address"
                            id="email-address"
                            autocomplete="email"
                            className="block w-full mt-1 h-8 border-b-2  focus:ring-gold-300 focus:outline-none focus:ring-2 tracking-wider focus:border-opacity-0  sm:text-sm rounded-md"
                          />
                        </div>
                        <div className="col-span-5 ">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            生日
                          </label>
                          <input
                            className="block w-full mt-1 h-8 border-b-2  focus:ring-gold-300 focus:outline-none focus:ring-2 tracking-wider focus:border-opacity-0  sm:text-sm rounded-md"
                            type="date"
                            value={date}
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-5">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            聯絡方式
                          </label>
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            autocomplete="phone"
                            className="block w-full mt-1 h-8 border-b-2  focus:ring-gold-300 focus:outline-none focus:ring-2 tracking-wider focus:border-opacity-0  sm:text-sm rounded-md"
                          />
                        </div>
                        <div className="col-span-5">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            地址
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autocomplete="street-address"
                            className="block w-full mt-1 h-8 border-b-2  focus:ring-gold-300 focus:outline-none focus:ring-2 tracking-wider focus:border-opacity-0  sm:text-sm rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded shadow-sm bg-gold-300 active:bg-yellow-500 focus:outline-none"
                      >
                        儲存
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberEdit;
