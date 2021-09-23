import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import Sidebar from '../components/Sidebar';
import usePasswordToggle from '../hooks/usePasswordToggle';
import '../css/eye.css';

function PasswordEdit() {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  return (
    <>
      <div className="container flex mx-auto">
        <Sidebar />
        <div className="w-full xl:w-3/4">
          <BreadCrumbs />
          <div className="px-5 md:pl-10">
            <h2 className="text-3xl font-medium">密碼修改</h2>
            <div className="shadow py-5 w-full md:w-3/5 px-10 rounded-md my-5">
              <form>
                <div className="my-5 relative">
                  <label className="block text-base font-medium text-gray-700 ">
                    目前密碼
                  </label>
                  <input
                    type={PasswordInputType}
                    className="block w-full  mt-1 h-8 border-b-2 focus:ring-gold-300 focus:outline-none focus:ring-2 tracking-widest focus:border-opacity-0  text-base rounded-md "
                  />
                  <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>
                <div className="my-5 relative">
                  <label className="block text-base font-medium text-gray-700">
                    新設密碼
                  </label>
                  <input
                    type={PasswordInputType}
                    className="block w-full  mt-1 h-8 border-b-2 focus:ring-gold-300 focus:outline-none focus:ring-2 tracking-widest focus:border-opacity-0  text-base rounded-md "
                  />
                  <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>
                <div className="my-5 relative">
                  <label className="block text-base font-medium text-gray-700">
                    再次輸入新設密碼
                  </label>
                  <input
                    type={PasswordInputType}
                    className="block w-full  mt-1 h-8 border-b-2 focus:ring-gold-300 focus:outline-none focus:ring-2 tracking-widest focus:border-opacity-0  text-base rounded-md "
                  />
                  <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-base font-medium text-white border border-transparent rounded shadow-sm bg-gold-300 active:bg-yellow-500 focus:outline-none"
                  >
                    確認修改
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordEdit;
