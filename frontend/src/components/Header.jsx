import React from 'react'
import { assets } from '../assets/assets'
import header_img from '/src/assets/header_img.png';
const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg px-6 md:px-10 lg:px-20 '>

            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Schedule Your Visit<br />  With 500+ Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <p>Easily explore our wide selection of trusted doctors and <br className='hidden sm:block' /> book your appointment without any hassle.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3 ' src={assets.arrow_icon} alt=""  />
                </a>
            </div>

            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={header_img} alt="" />
            </div>
        </div>
    )
}

export default Header