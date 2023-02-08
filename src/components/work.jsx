import React from 'react'
import NetflixImg from '../assets/netflix_build.png'
import Meme from '../assets/meme.png'
import Ecom from '../assets/ecom.png'
import {FiGithub} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen flex items-center text-[#EDEAEA] bg-[#0f161a] px-8 md:px-12'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 text-[#EDEAEA] border-[#64FFDA]'>
                    Some things I have built 
                </p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center'>
                {/* <div style={{backgroundImage: `url(${NetflixImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EDEAEA] tracking-wider'>
                            Netflix Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href='https://github.com/allentevyaw/Netflix-Clone'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}








<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Ecom} className="w-full h-full" alt="E-Commerce" />
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-90 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0">

    <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Featured Project</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>E-Commerce</h1>
    
    <div className='absolute bottom-0 right-0 p-2'>
        <div></div>
        <div className='flex'>
        <a href='https://github.com/allentevyaw/Electronics-ecom'>
            <FiGithub className='text-2xl hover:text-sky-300 pr-1'/>
        </a>
            <CgWebsite className='text-2xl hover:text-sky-300'/>
        </div>
    </div>
    </div>
    </div>
    <h1>React.js</h1>
</div>

<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={NetflixImg} className="w-full h-full" alt="Netflix" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-90 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Featured Project</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Netflix Clone</h1>
    
    <div className='absolute bottom-0 right-0 p-2'>
        <div></div>
        <div className='flex'>
        <a href='https://github.com/allentevyaw/Netflix-Clone'>
            <FiGithub className='text-2xl hover:text-sky-300 pr-1'/>
        </a>
            <CgWebsite className='text-2xl hover:text-sky-300'/>
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