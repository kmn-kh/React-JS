import React from 'react'

const Section_4 = () => {
    return (
        <div className="w-full h-[140vh] flex justify-center items-center bg-[#d5e3f7]">
            <div className="w-[44vw] h-[100vh]">
                <img src="../Icon/professional-img.png" alt="Professional" />
            </div>
            <div className="w-[40vw] h-[53vh] pt-[8vh] pr-12">
                <span className="text-2xl font-bold">WE PROVIDE PROFESSIONAL HOME SERVICES.</span>
                <br />
                <br />
                <p>
                    Randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                    you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which
                    don't look even slightly
                </p>
                <button className="bg-[#e69225] h-10 rounded-sm mt-6 hover:bg-transparent border hover:border-[#e69225] hover:text-[#e69225]">
                    <a href="" className="text-white font-semibold p-8 hover:text-[#e69225]">
                        READ MORE
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Section_4