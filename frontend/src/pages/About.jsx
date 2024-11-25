import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to MediLink, your trusted partner in simplifying your healthcare journey. We understand the challenges you face in scheduling appointments with doctors and managing your health records effectively.</p>
          <p>At MediLink, we are dedicated to advancing healthcare technology to meet your needs. Our platform is continuously updated with the latest features to enhance your experience and provide you with top-notch service. Whether you are booking your first appointment or managing ongoing care, MediLink is here to assist you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at MediLink is to create a seamless healthcare experience for all users. We strive to bridge the gap between patients and healthcare providers, ensuring that you can easily access the care you need, whenever you need it. Our goal is to empower you with the tools and support necessary for optimal health management.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-pink-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Effortless appointment scheduling tailored to your hectic lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-pink-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Connect with a reliable network of healthcare experts in your locality.

</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-pink-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Personalized suggestions and alerts to keep your health in check..</p>
        </div>
      </div>

    </div>
  )
}

export default About
