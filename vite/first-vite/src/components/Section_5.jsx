import React from 'react'

const Section_5 = () => {
    return (
        <div className="w-full h-screen text-center pt-[16vh]">
            <span className="text-3xl font-semibold">OUR SERVICES</span>
            <div className="w-full flex justify-between items-center px-[14vw] my-[8vh]">
                {/* Service 1 */}
                <div className="w-[8cm] h-[6cm] shadow-md shadow-black border border-gray-400 bg-white p-5 icon">
                    <img src="../Icon/s1.png" alt="Service 1" className="h-[2cm] w-[2cm] mx-auto svg-icon" />
                    <span className="text-xl font-medium">Maintenance</span>
                    <br />
                    <span className="text-[12px]">
                        When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    </span>
                </div>
                {/* /Service 1 */}

                {/* Service 2 */}
                <div className="w-[8cm] h-[6cm] shadow-md shadow-black border border-gray-400 bg-white p-5 icon">
                    <img src="../Icon/s2.png" alt="Service 2" className="h-[2cm] w-[2cm] mx-auto svg-icon" />
                    <span className="text-xl font-medium">Maintenance</span>
                    <br />
                    <span className="text-[12px]">
                        When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    </span>
                </div>
                {/* /Service 2 */}

                {/* Service 3 */}
                <div className="w-[8cm] h-[6cm] shadow-md shadow-black border border-gray-400 bg-white p-5 icon">
                    <img src="../Icon/s3.png" alt="Service 3" className="h-[2cm] w-[2cm] mx-auto svg-icon" />
                    <span className="text-xl font-medium">Maintenance</span>
                    <br />
                    <span className="text-[12px]">
                        When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    </span>
                </div>
                {/* /Service 3 */}
            </div>
            <button className="bg-[#0761f2] h-10 rounded-[5px] text-white hover:bg-white border hover:border-[#0761f2] hover:text-[#0761f2]">
                <a href="" className="p-4">
                    VIEW MORE
                </a>
            </button>
        </div>
    )
}

export default Section_5