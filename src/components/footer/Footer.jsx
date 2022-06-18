import React from 'react'
import {FaArrowUp} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <div className="footerContent bg-[#f4f4f4] h-20 flex justify-center items-center border-t-2 border-[#ccc]">
      <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <FaArrowUp className="text-2xl animate-bounce cursor-pointer" />
      </Link>
    </div>
  )
}

export default Footer