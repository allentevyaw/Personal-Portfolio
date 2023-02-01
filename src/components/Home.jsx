import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='flex items-center w-full min-h-screen bg-[#2E5978]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-[#64FFDA]'>Hi, my name is</p>
            <h1 className='pt-6 text-5xl sm:text-8xl font-bold text-[#EDEAEA]'>Allen Tevyaw</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#1B2739]'>I'm a Full Stack Developer.</h2>
            <p className='pt-9 text-[#EDEAEA] py-4 max-w-[700px]'>
            As a full-stack developer, I bring a wealth of technical expertise and creative problem solving to the table. 
            With experience in React.js, Next.js, JavaScript, and iOS mobile applications, I am well-equipped to deliver high-quality, user-friendly web and mobile solutions.
            </p>
            <div className='pt-6'>
                <button className='text-[#EDEAEA] shadow-md shadow-[#040c16] group border-2 px-6 py-3 my-2 flex items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 '
                > View Work
                    <span className='group hover:rotate-90 duration-300 '>
                    <Link to="work" smooth={true} duration={500}>
                        <HiArrowNarrowRight className='ml-3 '/>
                    </Link>
                    </span>
                </button>

                <button class="shadow-md shadow-[#040c16] flex items-center p-0.5 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                        <span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-[#1B2739] rounded-md group-hover:bg-opacity-0">
                                <Link to="work" smooth={true} duration={500}>
                            Check Out My Work
                            <span className='group hover:rotate-90 duration-300 flex justify-center'>
                                     <HiArrowNarrowRight className='ml-3'/>
                            </span>
                                </Link>
                        </span>
                </button>



            </div>
        </div>
    </div>
  )
}

export default Home