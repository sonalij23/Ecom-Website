import React from 'react'

import { FaFacebook , FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className= "flex py-24 text-white bg-black justify-evenly z-1">
        <div>
            <h1 className='mb-6 text-sm font-bold md:text-xl'>Our Company</h1>
            <p className='py-1 text-[9px] md:text-base hover:text-gray-300'>About Us</p>
            <p className='py-1 text-[9px] md:text-base hover:text-gray-300'>Contact Us</p>
            <p className='py-1 text-[9px] md:text-base hover:text-gray-300'>FAQs</p>
        </div>
        <div>
        <h1 className='mb-6 text-sm font-bold md:text-xl ' >Quick Links</h1>
            <p className='py-1 text-[9px] md:text-base hover:text-gray-300'>Privacy Policy</p>
            <p className='py-1 text-[9px] md:text-base hover:text-gray-300'>Terms and Conditions</p>
            <p className='py-1 text-[9px] md:text-base hover:text-gray-300'>Delivery and Refund Policy</p>
        </div>
        <div>
        <h1 className='mb-6 text-sm font-bold md:text-xl '>Social Media</h1>
        <div className="flex items-center justify-center my-1"> 
            <i className='mx-2 text-[9px] md:text-2xl hover:text-gray-300'><FaFacebook/></i>
            <i className='mx-2 text-[9px] md:text-2xl hover:text-gray-300'><FaInstagram/></i>
            <i className='mx-2 text-[9px] md:text-2xl hover:text-gray-300'><FaLinkedin/></i>
            </div>
        </div>
    </div>
  )
}

export default Footer