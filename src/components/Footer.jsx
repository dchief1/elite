import React from "react"
import logo from '../assets/images/elitelogo.png';
import { FacebookIcon, InstagramIcon, XIcon } from "lucide-react";

const Footer =() =>{
    return(
        <>
        <div className="bg-black w-full mx-auto p-5 text-white mt-5">
    <div className="flex items-start space-x-2 lg:space-x-20 justify-around ">
    {/* <div className="block"> */}

        <div className="block">
            <img src={logo} className='block w-16 lg:w-32 mb-1'></img>
            <p className='text-[0.7rem] lg:text-2xl mb-1'>Follow us</p>
            
            <div className="flex gap-1 lg:gap-3">
                  <div className="bg-blue-400 w-auto p-1 border rounded-md h-auto ">
                <FacebookIcon  className=""/>
                </div>
                <div className="bg-custom-radial w-auto p-1 border rounded-md h-auto ">

  <InstagramIcon />
</div>
<div className="bg-white text-[#000000] w-auto p-1 border rounded-md h-auto ">
                <XIcon />
                </div>
            </div>

        </div>

        <div className="block text-[0.7rem] lg:text-2xl ">
            <li className='mb-2'>For Companies</li>
            <li className='mb-2'>For Professionals</li>
            <li className='mb-2'>Pricing</li>
            <li className='mb-2'>Resources</li>

        </div>

        <div className="block text-[0.7rem]  lg:text-2xl ">
            <li className='mb-2'><a href="/about">About Us</a></li>
            <li className='mb-2'><a href="#contact">Contact Us</a></li>
            <li className='mb-2'><a href="#faq">FAQ</a></li>
            <li className='mb-2'><a href="#privacy">Privacy Policy</a></li>

        </div>

    </div>


</div>
        </>
    )
}

export default Footer