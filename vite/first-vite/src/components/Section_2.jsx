import React from 'react'

const Section_2 = () => {
    return (
        <div className="w-full h-8 flex justify-between px-[18vw] absolute mt-[-16vh]">
            <div className="w-[7cm] h-[5cm] shadow-md shadow-black border border-gray-400 bg-white flex justify-center items-center icon">
                <span className="text-[gray] font-semibold">
                    <img src="../Icon/construction.svg" alt="Construction" className="h-20 svg-icon" />
                    &nbsp;&nbsp;&nbsp;REPAIR
                </span>
            </div>
            <div className="w-[7cm] h-[5cm] shadow-md shadow-black border border-gray-400 bg-orange-500 flex justify-center items-center">
                <span className="text-white font-semibold">
                    <img src="../Icon/aq_indoor.svg" alt="Improve" className="h-20" />
                    &nbsp;IMPROVE
                </span>
            </div>
            <div className="w-[7cm] h-[5cm] shadow-md shadow-black border border-gray-400 bg-white flex justify-center items-center icon">
                <span className="text-[gray] font-semibold">
                    <img src="../Icon/house-gear.svg" alt="House Gear" className="h-20 svg-icon" />
                    &nbsp;MAINTAIN
                </span>
            </div>
        </div>
    )
}

export default Section_2