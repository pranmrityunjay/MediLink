import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to MediLink, your one-stop platform for connecting with trusted doctors. Our website simplifies the process of booking medical appointments, ensuring you have access to a wide range of healthcare professionals at your fingertips. With an intuitive interface, you can effortlessly explore profiles, check availability, and schedule appointments that suit your needs. MediLink is dedicated to providing a seamless experience, making healthcare accessible and convenient for everyone. Whether you're seeking a specialist or a general practitioner, we have you covered!</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 800XXXXX41</li>
            <li>pranmrityunjay@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ MediLink.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
