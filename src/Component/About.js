import React from 'react';

const About = () => {
  return (
    <div className=''>
      <div className='h-64 bg-gradient-to-r from-red-400 via-rose-500 to-red-400 flex items-center justify-center shadow-inner shadow-red-600'>
        <h1 className='px-56 text-center text-white italic font-serif font-light text-3xl'>Welcome to Good Good Dairy, your go-to destination for convenient and delicious food ordering!</h1>
      </div>

      <div className='py-7 px-32 h-80 bg-gradient-to-tl from-rose-500 via-red-400 to-rose-500 flex flex-col text-center items-center justify-evenly  shadow-inner shadow-red-600 ' >
        <h1 className='font-semibold text-3xl '>Our Vision</h1>
        <p className=' font-serif'>At Good Good Dairy, our vision is to revolutionize the way people experience food delivery. We're passionate about connecting food lovers with their favorite dishes from the comfort of their own homes.</p>

        <h1 className='font-semibold text-3xl pt-5 '>Our Mission</h1>
        <p className='font-serif'>Our mission is to provide a seamless and enjoyable food ordering experience for everyone. We strive to offer a diverse selection of cuisines, exceptional customer service, and hassle-free delivery, all while supporting local restaurants and businesses.</p>
      </div>

      <div className='py-7 px-40 h-80 bg-gradient-to-bl from-black via-red-400 to-black flex flex-col text-center items-center justify-evenly  shadow-md shadow-black '>
        <h1 className='font-semibold text-3xl pt-5 text-white'>Meet the Developer</h1>
        <p className='font-serif text-white' >Our mission is to provide a seamless and enjoyable food ordering experience for everyone. We strive to offer a diverse selection of cuisines, exceptional customer service, and hassle-free delivery, all while supporting local restaurants and businesses.</p>

        <h1 className='font-semibold text-3xl pt-5 text-white'>Get in Touch</h1>
        <p className='font-serif text-white'>Have questions or feedback? I'd love to hear from you! Feel free to reach out via <button className='text-black font-bold '>Contact</button></p>
        
      </div>

    </div>
  )
}

export default About