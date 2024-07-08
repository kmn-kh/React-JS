import React from 'react'

const Section_7 = () => {
    return (
        <div className="w-full h-[120vh] flex justify-between">
            <div className="w-1/2 h-screen pl-[6vw] pt-[6vh]">
                <h1 className="text-2xl font-semibold">CONTACT US</h1>
                <form action="" className="w-[41vw] h-[90vh] mt-[4vh]">
                    <input type="text" name="" placeholder="Name" className="w-full p-4 mb-6 outline-none input" />
                    <input type="text" name="" placeholder="Phone Number" className="w-full p-4 my-6 outline-none input" />
                    <input type="text" name="" placeholder="Email" className="w-full p-4 my-6 outline-none input" />
                    <input type="text" name="" placeholder="Message" className="w-full px-6 py-12 my-6 outline-none input" />
                    <button type="submit" className="px-14 py-3 bg-[#0761f2] text-white font-semibold border hover:bg-transparent hover:border-[#0761f2] hover:text-[#0761f2]">
                        SEND
                    </button>
                </form>
            </div>
            <div className="w-1/2 h-screen flex items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3257.314371380666!2d104.58703647410485!3d11.996677835504157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU5JzQ4LjAiTiAxMDTCsDM1JzIyLjYiRQ!5e1!3m2!1sen!2skh!4v1719979431118!5m2!1sen!2skh"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Section_7