import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import Logo from '../assets/AT.png'
import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai'
 

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleClick = () => setNav(prevNav => !prevNav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-xl'>
        <div>
            <img src={Logo} style={{width: '90px'}}/>
        </div>
        <div>
        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                     <Link to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            <FaBars size={25}/>
        </div>
    </div>


{/* Mobile menu */}

<div className={nav ? 'fixed left-0 top-0 w-full min-h-screen bg-black/70' : ''}>
    <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-100' : 
                        'fixed left-[-100] top-0 p-10 ease-in duration-100'}>
        <div className='flex w-full items-center justify-between'>
        <img src={Logo} style={{width: '80px'}}/>
        <div onClick={handleClick} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
            <AiOutlineClose />
        </div>
        </div>
        <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
        </div>

        <div className='flex flex-col py-4'>
       <ul>
       <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                    </Link> 
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
        </ul> 
    </div>
    </div>
</div>



        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-00'
                    href='/'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-00'
                    href='/'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8f47b9]'>
                    <a className='flex justify-between items-center w-full text-gray-00'
                    href='/'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-00'
                    href='/'>
                        Twitter <AiOutlineTwitter size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar