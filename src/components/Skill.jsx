import React from 'react'
import CSS from '../assets/css.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactLogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'


const Skill = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 '>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4  border-pink-600'>Experience</p>
                <p className='py-4'>These are the technologies that i work with</p>
            </div>

            <div className='w-full grid grid-col-2 sm:grid-col-4 gap-4 text-center py-4'>
                <div>
                    <img className='w-[80px] mx-auto' src={CSS} />
                    <p>CSS</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Skill