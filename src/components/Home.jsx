import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer'



const Home = () => {
    const {ref, inView } = useInView(false)


  return (
    <div name='home' className='flex items-center w-full min-h-screen bg-[#0f161a]'>
        
        {/* Container */}
        <div className={`${inView ? 'animate-fadeIn max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' 
        : 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'}`}>
            <p className='text-2xl text-[#64FFDA]'>Welcome, my name is</p>

            <h1 className='pt-6 text-5xl sm:text-8xl font-bold text-[#EDEAEA] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 animate-text'>Allen Tevyaw</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#5170a0]'>Full Stack Developer.</h2>
            <p className='pt-9 text-[#EDEAEA] py-4 max-w-[700px]'>
            As a full-stack developer, I bring a wealth of technical expertise and creative problem solving to the table. 
            With experience in React.js, Next.js, JavaScript, and iOS mobile applications, I am well-equipped to deliver high-quality, user-friendly web and mobile solutions.
            </p>
            <div className='pt-6'>
                <button className='text-[#EDEAEA] shadow-md shadow-[#040c16] group border-2 px-6 py-3 my-2 flex items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-[#64FFDA] '
                > View Work
                    <span className='group hover:rotate-90 duration-300 '>
                    <Link to="work" smooth={true} duration={500}>
                        <HiArrowNarrowRight className='ml-3 '/>
                    </Link>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home