import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='flex items-center w-full min-h-screen bg-[#2E5978]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#14B7B9]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Allen Tevyaw</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#1B2739]'>I'm a Full Stack Developer.</h2>
            <p className='text-white py-4 max-w-[700px]'>I'm a full-stack developer specializing in building 
                exceptional digital experiences. Currently, I'm focused on
                building responsive full-stack web applications.
            </p>
            <div>
                <button className='text-white shadow-md shadow-[#040c16] group border-2 border-white-600 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#14B7B9] hover:border-[#14B7B9]'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <Link to="work" smooth={true} duration={500}>
                        <HiArrowNarrowRight className='ml-3'/>
                    </Link>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home