import React from 'react'
import BoardGameFriend from '../images/Board Game Friend.png'

function MyFooter(props) {
    return (
        <>
        <footer className="relative pt-1 bg-gray-800 footer">
            <div className="container px-6 pt-5 mx-auto">
                <div
                className="flex flex-col justify-center mt-6 sm:mt-0 sm:w-full sm:px-8 md:flex-row"
                >
                <div className="flex flex-col items-center">
                    <img src={BoardGameFriend} alt="" className=""/>
                    <span className="my-3 text-sm text-white">本網站為中壢資策會前端設計工程師班MFEE17第三組學員專題成果作品，本平台僅供學習、展示之用。<br />
                    若有侵權疑慮，您可以私訊臉書 -
                    【中壢】前端工程師就業養成班(MFEE17)，後續會由專人協助處理。</span>
                </div>
                </div>
            </div>
            <div className="container px-6 mx-auto">
                <div className="flex flex-col items-center mt-5 border-t-2 border-gray-300">
                <div className="py-4 text-center sm:w-2/3">
                    <p className="mb-2 text-sm font-bold text-white">
                    Copyright © 2021 BoardGameFriend.com.tw Inc. All Rights Reserved
                    </p>
                </div>
                </div>
            </div>
            </footer>
        </>
    )
}


export default MyFooter

