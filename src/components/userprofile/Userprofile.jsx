import React from 'react';
import Profile from '../../assets/profilephoto.png'
import Getcoding from '../../assets/gclogo.svg'
import {FaArrowDown} from 'react-icons/fa'
import {FaLinkedin, FaTwitter, FaInstagram, FaGithub} from 'react-icons/fa'

const Userprofile = () => {
  return (
    
      <div className='cardContent w-full my-5 mx-auto bg-white rounded-xl border-2 shadow-md border-[#ccc] md:w-1/2 lg:w-1/2'>
        <div className='cardHeader bg-profile-header text-center h-32 rounded-t-xl'></div>
        <div className='profileImage -mt-20'>
          <img className='w-1/2 rounded-xl mx-auto my-2' src={Profile} alt='' />
        </div>
        <div className='profileInfo mt-10 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-semibold pb-5'>Michael Miller</h1>
          <h3 className='text-xl font-semibold'>🚀 Future Full Stack Developer 💻 </h3>
          <a className='font-semibold py-2' href='mailto:millergm30@gmail.com'>Contact Me</a>
          <div className='studentInfo text-center'>
            <h4 className='text-lg font-semibold py-2'>Current Student</h4>
            <FaArrowDown className='mx-auto my-3 text-2xl animate-bounce'/>
            <a href='http://www.get-coding.ca' target='_blank' rel='noopener noreferrer'><img className='h-16' src={Getcoding} alt='' /></a>
          </div>
        </div>
        <div className='socialContent flex flex-row py-3 mt-5 justify-center border-t-2 border-gray-300'>
          <a href='https://www.linkedin.com/in/michael-miller-0aa2bb229' target='_blank' rel='noopener noreferrer'><FaLinkedin className='text-5xl mx-3 text-[#a5a5a5] hover:scale-125 transition-all duration-700'/></a>
          <a href='http://www.twitter.com/millerm30' target='_blank' rel='noopener noreferrer'><FaTwitter className='text-5xl mx-3 text-[#a5a5a5] hover:scale-125 transition-all duration-700'/></a>
          <a href='https://www.instagram.com/millergm302022' target='_blank' rel='noopener noreferrer'><FaInstagram className='text-5xl mx-3 text-[#a5a5a5] hover:scale-125 transition-all duration-700'/></a>
          <a href='http:///www.github.com/millerm30' target='_blank' rel='noopener noreferrer'><FaGithub className='text-5xl mx-3 text-[#a5a5a5] hover:scale-125 transition-all duration-700'/></a>
        </div>
      </div>
    
  )
}

export default Userprofile