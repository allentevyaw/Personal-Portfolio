import React from 'react'
import NetflixImg from '../assets/netflix_build.png'
import MemeImg from '../assets/meme-generator.png'

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen flex items-center text-[#EDEAEA] bg-[#2E5978]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#EDEAEA] border-[#64FFDA]'>
                    Projects
                </p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${NetflixImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
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
                </div>
                <div style={{backgroundImage: `url(${MemeImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div items-center'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EDEAEA] tracking-wider flex text-center'>
                            Random Meme Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href='https://github.com/allentevyaw/Meme-generator'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work