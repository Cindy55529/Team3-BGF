import React from 'react';

function BreadCrumbs() {
  return (
    <>
      <div className="mt-20">
        <div>
          <ol className="flex py-4 pl-8 rounded list-reset bg-grey-light text-grey">
            <li className="px-2">
              <a
                href="#"
                className="text-gray-800 no-underline hover:text-yellow-500"
              >
                首頁
              </a>
            </li>
            <li>/</li>
            <li className="px-2">
              <a
                href="MemberCenter.html"
                className="text-gray-800 no-underline hover:text-yellow-500"
              >
                會員中心
              </a>
            </li>
            <li>/</li>
            <li className="px-2 text-gray-800 ">帳戶資訊</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default BreadCrumbs;
