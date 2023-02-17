import React from 'react'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'



const Contact = () => {
  const {ref, inView } = useInView(false)


  return (
    <div name='contact' className='w-full min-h-screen bg-[#0f161a] flex justify-center items-center pl-4 pr-4 pt-8'>
       
       {/* Used Getform.io */}
        {/* <form method='POST' action='https://getform.io/f/ab6579e6-2066-4086-994f-06aad61a1cc3' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-[#64FFDA] text-[#EDEAEA]'>Contact</p>
                <p className='text-[#EDEAEA] py-4'>Let's build something! Fill out the contact form below 
                or reach out on one of my social media accounts</p>
            </div>
            <input className='p-2 bg-[#EDEAEA] rounded-lg' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#EDEAEA] rounded-lg' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#EDEAEA] p-2 rounded-lg' name='message' rows='9' placeholder='Leave a message...'></textarea>



            <div>
                <p className='text-[#EDEAEA] text-sm hover:text-[#64FFDA] flex justify-center'>Designed & Built by Allen Tevyaw</p>
            </div>
        </form> */}




<div className="px-4 md:px-12 pb-8" ref={ref}>

<div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-[#64FFDA] text-[#EDEAEA]'>Let's Connect</p>
                <p className='text-[#EDEAEA] py-4'>Let's build something! Fill out the contact form below 
                or reach out on one of my social media accounts</p>
            </div>

      <div className={`${inView ? 'animate-fadeIn text-white rounded-lg shadow-sm shadow-[#64FFDA] pt-5 pb-1 md:py-4 px-4 md:px-6 bg-[#1B2739]' : 'text-white rounded-lg shadow-sm shadow-[#64FFDA] pt-5 pb-1 md:py-4 px-4 md:px-6 bg-[#1B2739]'}`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 mb-4">
          <div className="mb-6 lg:mb-0 text-center mx-auto">
            <AiOutlineInstagram className="w-8 h-8 mb-2 mx-auto cursor-pointer hover:text-[#64FFDA]"/>
            <h6 className="font-medium">Instagram</h6>
          </div>
          <div className="mb-6 lg:mb-0 text-center mx-auto">
            <AiOutlineTwitter className="w-8 h-8 mb-2 mx-auto cursor-pointer hover:text-[#64FFDA]"/>
            <h6 className="font-medium">Twitter</h6>
          </div>
          <div className="mb-6 md:mb-0 text-center mx-auto">
            <a href='https://github.com/allentevyaw'>
            <FaGithub 
            className="w-8 h-8 mb-2 mx-auto cursor-pointer hover:text-[#64FFDA]"/>
            </a>
            <h6 className="font-medium">Github</h6>
          </div>
          <div className="text-center mx-auto">
            <a href='mailto:atevyaw@gmail.com'>
            <AiOutlineMail 
            className="w-8 h-8 mb-2 mx-auto cursor-pointer hover:text-[#64FFDA]"/>
            </a>
            <h6 className="font-medium">Email</h6>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto">
          <form>
            <div className="form-group mb-6">
                <label className='pl-2'>Name*</label>
              <input type="text" className="block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#027E72] focus:outline-none"
                placeholder="Name"/>
            </div>
            <div className="form-group mb-6">
            <label className='pl-2'>Email*</label>
              <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"/>
            </div>
            <div className="mb-6">
            <label className='pl-2'>Message*</label>

              <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " rows="3" placeholder="Message"></textarea>
            </div>

            <button className="text-[#EDEAEA] my-8 mx-auto shadow-md shadow-[#040c16] flex items-center p-0.5 overflow-hidden text-md font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                        <span className="hover:text-white px-5 py-2.5 transition-all ease-in 
                        duration-75 bg-[#1B2739] rounded-md group-hover:bg-opacity-0 ">
                            Send
                        </span>
                </button>
          </form>
        </div>
      </div>
    </div>        
    </div>
  )
}

export default Contact