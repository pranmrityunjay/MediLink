import React from 'react'
import { useNavigate } from 'react-router-dom'
import appointment_img from "../assets/appointment_img.png"

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='relative flex items-center justify-between bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl px-6 sm:px-10 md:px-14 lg:px-16 my-20 md:mx-10 shadow-lg overflow-hidden'>

            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight'>
                    <p>Schedule Your Visit</p>
                    <p className='mt-4 text-lg sm:text-xl md:text-2xl font-medium'>With 500+ Trusted Doctors</p>
                </div>

                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='bg-white text-sm sm:text-base text-[#595959] px-10 py-4 rounded-full mt-6 hover:bg-[#f1f1f1] hover:scale-105 transition-all duration-300 ease-in-out shadow-lg'
                >
                    Create Account
                </button>
            </div>

            <div className='hidden md:block md:w-1/2 lg:w-[400px] relative'>
                <img 
                    className='w-full max-w-md mx-auto transform transition duration-500 hover:scale-105'
                    src={appointment_img} 
                    alt="Appointment Illustration" 
                />
            </div>
        </div>
    )
}

export default Banner;
