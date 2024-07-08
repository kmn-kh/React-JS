import React from 'react'

const Section_1 = () => {
  return (
    <div className="w-full h-[120vh] bg-[#d5e3f7]">
      <div className="w-full">
        <nav className="flex justify-between bg-black">
          <div className="w-1/5 h-10 flex items-center text-white pl-5">
            <img src="../Icon/telephone-fill.svg" alt="Telephone" />
            <span>&nbsp;Call:+01 123455878775</span>
          </div>
          <div className="w-1/5 h-10 flex items-center text-white pl-5">
            <img src="../Icon/envelope-fill.svg" alt="Envelope" />
            <span>&nbsp;Email: kunlauyla@gmail.com</span>
          </div>
        </nav>
        <nav className="w-full h-14 flex justify-between items-center pr-5 font-medium">
          <div className="w-1/5 pl-5">
            <p className="text-2xl font-Anton text-[#2a74db]">INANCE</p>
          </div>
          <div className="w-1/4 flex justify-between">
            <span className="text-[#2a74db]">Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact Us</span>
          </div>
        </nav>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 h-[90vh] pl-[10vw] pt-[34vh]">
          <p className="text-[#2a74db] text-4xl font-Anton mb-4">
            Repair and <br />
            Maintenance
            <br />
            Services
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aliquid exercitationem voluptates iusto
            dolores velit totam voluptate expedita, iure doloribus praesentium dolorum tenetur rem consequuntur odio? Iste
            voluptatum quibusdam ipsum?
          </p>
          <br />
          <button className="text-white bg-orange-500 hover:bg-transparent border hover:border-orange-500 hover:text-orange-500 h-10 rounded-md">
            <a href="" className="px-4 py-2">
              CONTACT US
            </a>
          </button>
        </div>
        <div className="w-1/2 pl-[5vw]">
          <img src="../Icon/slider-img.png" alt="Slider" />
        </div>
      </div>
    </div>
  )
}

export default Section_1