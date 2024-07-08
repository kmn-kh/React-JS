import React from 'react'

const Section_3 = () => {
    return (
        <div className="w-full h-screen flex pt-[3cm] justify-center items-center">
            <div className="w-[40vw] h-[53vh] pt-[8vh] pr-12">
                <span className="text-2xl font-bold">ABOUT US</span>
                <br />
                <br />
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected humour, or randomised
                </p>
                <button className="bg-[#0761f2] h-10 rounded-sm mt-6 hover:bg-transparent border hover:border-[#0761f2]">
                    <a href="" className="text-white font-semibold p-8 hover:text-[#0761f2]">
                        READ MORE
                    </a>
                </button>
            </div>
            <div className="w-[44vw] h-[53vh]">
                <img src="../Icon/man-wearing.jpg" alt="Man Wearing" />
            </div>
        </div>
    )
}

export default Section_3