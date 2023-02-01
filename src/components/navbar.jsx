import React, {useState, useEffect} from 'react'
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import Logo from '../assets/AT.png'
import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai'
 

const Navbar = () => {
const [nav, setNav] = useState(false)
const [shadow, setShadow] = useState(false)

const handleClick = () => setNav(prevNav => !prevNav)

useEffect(() => {
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', handleShadow)
}, [])

  return (
    <div className={shadow ? 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2E5978] text-gray-300 shadow-xl'
                            : 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2E5978] text-gray-300'}>
       <div className='flex justify-between items-center w-full'>
        <div>
            <img src={Logo} style={{width: '90px'}}/>
        </div>
        <div>
    <div>
        {/* menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-[#64FFDA]'>
                     <Link to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li className='hover:text-[#64FFDA]'>
                    <Link to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li className='hover:text-[#64FFDA]'>
                    <Link to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='hover:text-[#64FFDA]'>
                    <Link to="work" smooth={true} duration={500}>
                    Projects
                    </Link>
                </li>
                <li className='hover:text-[#64FFDA]'>
                    <Link to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>
        </div>
                {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden text-[#64FFDA]'>
            <FaBars size={25}/>
        </div>
    </div>
</div>

{/* Mobile menu */}
<div className={nav ? 'md:hidden fixed left-0 top-0 w-full min-h-screen bg-[#1B2739]/70' : ''}>
    <div className={nav ? 'fixed right-0 top-0 w-[50%] sm:w-[40%] h-screen bg-[#1B2739] p-10 ease-in duration-100' : 
                        'fixed left-[-100] top-0 p-10 ease-in duration-100'}>
        <div className='flex w-full items-center justify-between'>
        <img src={Logo} style={{width: '80px'}}/>
        <div onClick={handleClick} className='rounded-full bg-[#EDEAEA] p-3 cursor-pointer'>
            <AiOutlineClose className='text-[#1B2739]'/>
        </div>
        </div>
        <div className='border-b border-[#EDEAEA] my-4'>
            <p className='w-[85%] md:w-[90%] py-4 text-[#EDEAEA]'>Let's build something legendary together</p>
        </div>

        <div className='flex flex-col py-4'>
       <ul className='text-[#EDEAEA]'>
       <li className='py-6 text-2xl hover:text-[#64FFDA]'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                    </Link> 
                </li>
                <li className='py-6 text-2xl hover:text-[#64FFDA]'>
                    <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li className='py-6 text-2xl hover:text-[#64FFDA]'>
                    <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='py-6 text-2xl hover:text-[#64FFDA]'>
                    <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li className='py-6 text-2xl hover:text-[#64FFDA]'>
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
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-00'
                    href='/'>
                        Linkedin <FaLinkedin size={25} />
                    </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-00'
                    href='https://github.com/allentevyaw'>
                        Github <FaGithub size={25} />
                    </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8f47b9] rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-00'
                    href='/'>
                        Email <HiOutlineMail size={25} />
                    </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-00'
                    href='/'>
                        Twitter <AiOutlineTwitter size={25} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar