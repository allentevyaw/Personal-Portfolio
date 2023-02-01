import React from 'react'
import Headshot from '../assets/headshot.png'



const About = () => {
  return (
    <div name='about' className='w-full min-h-screen flex items-center bg-[#2E5978] text-[#EDEAEA]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#64FFDA]'>About</p>
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4'>
                <div className='flex justify-center'>
                    <img 
                    src={Headshot} 
                    alt='headshot'
                    className='rounded-lg shadow-lg shadow-black opacity-30 hover:opacity-100'/>
                </div>
                <div>
                I am a highly skilled full stack web developer with a passion 
                for creating innovative and user-friendly websites. With experience 
                in React.js, JavaScript, HTML, Node, CSS, and iOS mobile applications, I bring a 
                wealth of knowledge and expertise to every project I work on. My attention 
                to detail and dedication to staying up-to-date with the latest technologies 
                ensure that I deliver high-quality and effective solutions to meet my clients' 
                needs. I am driven by a desire to make a difference and bring ideas to life through 
                the power of technology.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About