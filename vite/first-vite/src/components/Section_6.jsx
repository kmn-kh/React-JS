import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

function slideP() {
    console.log("run");
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");
    var slide4 = document.getElementById("slide4");
    if (slide1.style.display == '') {
        slide1.style.display = "none";
        slide2.style.display = "flex";
    }
    else if (slide2.style.display == 'flex') {
        slide2.style.display = "none";
        slide3.style.display = "flex";
    }
    else if (slide3.style.display == 'flex') {
        slide3.style.display = "none";
        slide4.style.display = "flex";
    }
    else if (slide4.style.display == 'flex') {
        slide4.style.display = "none";
        slide1.style.display = "flex";
    }
    else if (slide1.style.display == 'flex') {
        slide1.style.display = "none";
        slide2.style.display = "flex";
    }
}
setInterval(slideP, 8000);
function slideS() {
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");
    var slide4 = document.getElementById("slide4");
    if (slide1.style.display == '') {
        slide1.style.display = "none";
        slide4.style.display = "flex";
    }
    else if (slide2.style.display == 'flex') {
        slide2.style.display = "none";
        slide1.style.display = "flex";
    }
    else if (slide3.style.display == 'flex') {
        slide1.style.display = "none";
        slide4.style.display = "flex";
    }
    else if (slide4.style.display == 'flex') {
        slide4.style.display = "none";
        slide3.style.display = "flex";
    }
    else if (slide1.style.display == 'flex') {
        slide4.style.display = "none";
        slide3.style.display = "flex";
    }
}
const Section_6 = () => {

    return (
        <div className="w-full h-[90vh] border border-[#cfcfcf] pt-10">
            <h1 className="text-center text-2xl font-bold">WHAT OUR CLIENTS SAY</h1>
            <div className="w-[80vw] mx-auto h-[54vh] mt-14 px-2 
             items-center scrollbar">
                <div className="w-full flex outline-none" id='slide1'>
                    {/* 1 */}
                    <div className="w-[38vw] h-[50vh] bg-white  px-6 shadow-xm shadow-gray-300 ml-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-96 h-[22vh] flex items-center my-6">
                                <img src="../Icon/3d-rendering.jpg" alt="" className="h-32 w-32 rounded-[64px] overflow-hidden" />
                                <div className='grid grid-flow-row grid-cols-5 gap-1 ml-3'>
                                    <p className='col-span-5 text-center'>Number 1</p>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                            </div>
                            <RiDoubleQuotesL className='mr-10 text-3xl' />
                        </div>
                        <p>chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum</p>
                    </div>
                    {/* 2 */}
                    <div className="w-[38vw] h-[50vh] bg-white  px-6 shadow-xm shadow-gray-300 mx-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-96 h-[22vh] flex items-center my-6">
                                <img src="../Icon/global-business.jpg" alt="" className="h-32 w-32 rounded-[64px] overflow-hidden" />
                                <div className='grid grid-flow-row grid-cols-5 gap-1 ml-3'>
                                    <p className='col-span-5 text-center'>Jorch morik</p>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                            </div>
                            <RiDoubleQuotesL className='mr-10 text-3xl' />
                        </div>
                        <p>chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum</p>
                    </div>
                </div>
                <div className="w-full hidden" id='slide2'>
                    {/* 3 */}
                    <div className="w-[38vw] h-[50vh] bg-white  px-6 shadow-xm shadow-gray-300 ml-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-96 h-[22vh] flex items-center my-6">
                                <img src="../Icon/global-business.jpg" alt="" className="h-32 w-32 rounded-[64px] overflow-hidden" />
                                <div className='grid grid-flow-row grid-cols-5 gap-1 ml-3'>
                                    <p className='col-span-5 text-center'>Number 2</p>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                            </div>
                            <RiDoubleQuotesL className='mr-10 text-3xl' />
                        </div>
                        <p>chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum</p>
                    </div>
                    {/* 4 */}
                    <div className="w-[38vw] h-[50vh] bg-white  px-6 shadow-xm shadow-gray-300 mx-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-96 h-[22vh] flex items-center my-6">
                                <img src="../Icon/3d-rendering.jpg" alt="" className="h-32 w-32 rounded-[64px] overflow-hidden" />
                                <div className='grid grid-flow-row grid-cols-5 gap-1 ml-3'>
                                    <p className='col-span-5 text-center'>Jorch morik</p>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                            </div>
                            <RiDoubleQuotesL className='mr-10 text-3xl' />
                        </div>
                        <p>chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum</p>
                    </div>
                </div>
                <div className="w-full hidden" id='slide3'>
                    {/* 5 */}
                    <div className="w-[38vw] h-[50vh] bg-white  px-6 shadow-xm shadow-gray-300 ml-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-96 h-[22vh] flex items-center my-6">
                                <img src="../Icon/3d-rendering.jpg" alt="" className="h-32 w-32 rounded-[64px] overflow-hidden" />
                                <div className='grid grid-flow-row grid-cols-5 gap-1 ml-3'>
                                    <p className='col-span-5 text-center'>Number 3</p>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                            </div>
                            <RiDoubleQuotesL className='mr-10 text-3xl' />
                        </div>
                        <p>chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum</p>
                    </div>
                    {/* 6 */}
                    <div className="w-[38vw] h-[50vh] bg-white  px-6 shadow-xm shadow-gray-300 mx-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-96 h-[22vh] flex items-center my-6">
                                <img src="../Icon/global-business.jpg" alt="" className="h-32 w-32 rounded-[64px] overflow-hidden" />
                                <div className='grid grid-flow-row grid-cols-5 gap-1 ml-3'>
                                    <p className='col-span-5 text-center'>Jorch morik</p>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                            </div>
                            <RiDoubleQuotesL className='mr-10 text-3xl' />
                        </div>
                        <p>chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum</p>
                    </div>
                </div>
                <div className="w-full hidden" id='slide4'>
                    {/* 7 */}
                    <div className="w-[38vw] h-[50vh] bg-white  px-6 shadow-xm shadow-gray-300 ml-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-96 h-[22vh] flex items-center my-6">
                                <img src="../Icon/global-business.jpg" alt="" className="h-32 w-32 rounded-[64px] overflow-hidden" />
                                <div className='grid grid-flow-row grid-cols-5 gap-1 ml-3'>
                                    <p className='col-span-5 text-center'>Number 4</p>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                            </div>
                            <RiDoubleQuotesL className='mr-10 text-3xl' />
                        </div>
                        <p>chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum</p>
                    </div>
                    {/* 8 */}
                    <div className="w-[38vw] h-[50vh] bg-white  px-6 shadow-xm shadow-gray-300 mx-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-96 h-[22vh] flex items-center my-6">
                                <img src="../Icon/3d-rendering.jpg" alt="" className="h-32 w-32 rounded-[64px] overflow-hidden" />
                                <div className='grid grid-flow-row grid-cols-5 gap-1 ml-3'>
                                    <p className='col-span-5 text-center'>Jorch morik</p>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                            </div>
                            <RiDoubleQuotesL className='mr-10 text-3xl' />
                        </div>
                        <p>chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-5">
                <button className='bg-red-400 py-2 px-4 mr-2 rounded-md ' onClick={slideS}>Back</button>
                <button className='bg-blue-400 py-2 px-4 ml-2 rounded-md button' onClick={slideP}>Next</button>
            </div>
        </div>
    )
}

export default Section_6