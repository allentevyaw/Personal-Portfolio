import React from 'react'
import CSS from '../assets/css.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactLogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import HTML from '../assets/html.png'


const Skill = () => {
  return (
    <div name='skills' className='w-full min-h-screen flex items-center bg-[#2E5978] text-gray-300 '>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4  border-[#E26240]'>Skills</p>
                <p className='py-4'>These are the technologies that I have experience working with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={CSS} />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={Firebase} />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={Javascript} />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={ReactLogo} />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={Tailwind} />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={HTML} />
                    <p className='my-4'>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill