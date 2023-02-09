import React from 'react'
import Headshot from '../assets/headshot.png'
import {AiOutlineCheck} from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'



const About = () => {
const {ref, inView } = useInView()


  return (
    <div 
    name='about' 
    ref={ref}
    className='w-full min-h-screen flex items-center bg-[#0f161a] text-[#EDEAEA]'>
        <div className='flex flex-col px-8 md:px-12 justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2'>
                <div className='sm:text-right pb-8 pl-4 items-center '>
                    <p className='text-3xl font-bold inline border-b-4 border-[#64FFDA]'>About Me 
                    </p>
                </div>
            </div>


            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                <div className=''>
                    <img 
                    src={Headshot} 
                    alt='headshot'
                    className='rounded-lg shadow-lg shadow-black opacity-40 
                    hover:opacity-100 ease-out duration-500'/>
                </div>



                <div className={`${inView ? 'animate-fadeIn' : ''}`}>
                <p>I am a highly skilled full stack web developer with a passion 
                for creating innovative and user-friendly websites. With experience 
                in <span className='text-[#64FFDA]'> React.js, JavaScript, HTML, Next.js, CSS, and iOS  mobile applications</span>, I bring a 
                wealth of knowledge and expertise to every project I work on.</p>
                <p className='pt-2'>My attention to detail and dedication to staying up-to-date with the latest technologies 
                ensure that I deliver high-quality and effective solutions to meet my clients' 
                needs. I am driven by a desire to make a difference and bring ideas to life through 
                the power of technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About