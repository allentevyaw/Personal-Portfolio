import React from 'react'
import NetflixImg from '../assets/netflix_build.png'
import Meme from '../assets/meme.png'
import Ecom from '../assets/ecom.png'
import {FiGithub} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'
import { useInView } from 'react-intersection-observer'


const Work = () => {
const {ref, inView } = useInView(false)

return (
    <div name='work' className='w-full min-h-screen flex justify-center items-center text-[#EDEAEA] bg-[#0f161a] px-8 md:px-12'>
        <div ref={ref}>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p 
                className='text-3xl text font-bold inline border-b-4 text-[#EDEAEA] border-[#64FFDA]'>
                    Some things I have built 
                </p>
            </div>

            {/* Container */}
            <div className={`${inView ? 'animate-fadeIn grid sm:grid-cols-2 gap-4 justify-center' 
            : 'grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center'}`}>
  
<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Ecom} className="w-full h-full" alt="E-Commerce" />
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] via-[#1bd7bb] to-[#08b3e5] opacity-0">

    <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Featured Project</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>E-Commerce</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>E-commerce web app utilizing Stripe API to handle
        payments and MongoDB backend</p>
    
    <div className='absolute bottom-0 right-0 p-2'>
        <div></div>
        <div className='flex'>
        <a href='https://github.com/allentevyaw/Electronics-ecom'>
            <FiGithub className='text-3xl hover:text-gray-800 pr-1'/>
        </a>
            <CgWebsite className='text-3xl hover:text-gray-800'/>
        </div>
    </div>
    </div>
    </div>
    <h1>React.js</h1>
</div>

<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={NetflixImg} className="w-full h-full" alt="Netflix" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Featured Project</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Netflix Clone</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>Netlfix clone utilizing
    Firebase API for user authentification and backend</p>
    
    <div className='absolute bottom-0 right-0 p-2'>
        <div></div>
        <div className='flex'>
        <a href='https://github.com/allentevyaw/Netflix-Clone'>
            <FiGithub className='text-3xl hover:text-gray-800 pr-1'/>
        </a>
            <CgWebsite className='text-3xl hover:text-gray-800'/>
        </div>
    </div>
    </div>
  </div>
</div>







            </div>

        </div>
        </div>
    </div>
  )
}

export default Work