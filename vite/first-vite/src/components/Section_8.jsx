import React from 'react'

const Section_8 = () => {
    return (
        <div className="w-full h-[90vh] bg-[#0a0f43] flex flex-col justify-center items-center relative">
            <h1 className="text-white text-2xl font-semibold">GET IN TOUCH</h1>
            <div className="w-full h-[24vh] flex flex-col justify-center items-center mb-[8vh] mt-[5vh]">
                {/* Icon */}
                <div className="w-[70vw] h-[24vh] flex justify-between text-white mt-[6vh] absolute">
                    {/* Icon 1 */}
                    <div className="w-[20vw] h-[24vh] flex flex-col justify-center items-center">
                        <div className="w-[16vh] h-[16vh] rounded-[8vh] bg-blue-600 flex justify-center items-center hover:bg-orange-500">
                            <img src="../Icon/geo-alt-fill.svg" alt="Geo Alt" />
                        </div>
                        <span className="mt-5">Lorem Ipsum is simply dummy text</span>
                    </div>
                    {/* /Icon 1 */}

                    {/* Icon 2 */}
                    <div className="w-[20vw] h-[24vh] flex flex-col justify-center items-center">
                        <div className="w-[16vh] h-[16vh] rounded-[8vh] bg-blue-600 flex justify-center items-center hover:bg-orange-500">
                            <img src="../Icon/phone.svg" alt="Phone" />
                        </div>
                        <span className="mt-5">+02 120491249929</span>
                    </div>
                    {/* /Icon 2 */}

                    {/* Icon 3 */}
                    <div className="w-[20vw] h-[24vh] flex flex-col justify-center items-center">
                        <div className="w-[16vh] h-[16vh] rounded-[8vh] bg-blue-600 flex justify-center items-center hover:bg-orange-500">
                            <img src="../Icon/mail.svg" alt="Mail" />
                        </div>
                        <span className="mt-5">kunlauyla@gmail.com</span>
                    </div>
                    {/* /Icon 3 */}
                </div>
                {/* /Icon */}
                <span className="border border-white w-[54vw]"></span>
            </div>
            <h1 className="text-white text-2xl font-semibold">FOLLOW US</h1>
            <br />
            {/* Social media Icon */}
            <div className="w-40 h-10 px-2 bg-white flex justify-between items-center mb-[12vh]">
                <img src="../Icon/facebook.svg" alt="Facebook" className="h-6 social-icon" />
                <img src="../Icon/twitter.svg" alt="Twitter" className="h-6 social-icon" />
                <img src="../Icon/youtube.svg" alt="YouTube" className="h-6 social-icon" />
                <img src="../Icon/instagram.svg" alt="Instagram" className="h-6 social-icon" />
            </div>
            {/* /Social media Icon */}
            <span className="w-[80vw] border border-white"></span>
            <br />
            <span className="flex text-white">
                <img src="../Icon/copyright.svg" alt="Copyright" />
                2024 All Rights Reserved By Free Html Templates
            </span>
        </div>
    )
}

export default Section_8