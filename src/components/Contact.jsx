import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#2E5978] flex justify-center items-center pl-4 pr-4 pt-8'>
       
       {/* Used Getform.io */}
        <form method='POST' action='https://getform.io/f/ab6579e6-2066-4086-994f-06aad61a1cc3' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-[#64FFDA] text-[#EDEAEA]'>Contact</p>
                <p className='text-[#EDEAEA] py-4'>Let's build something! Fill out the contact form below 
                or reach out on one of my social media accounts</p>
            </div>
            <input className='p-2 bg-[#EDEAEA] rounded-lg' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#EDEAEA] rounded-lg' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#EDEAEA] p-2 rounded-lg' name='message' rows='9' placeholder='Leave a message...'></textarea>
            {/* <button className='text-white border-2 bg-[#14B7B9] px-4 py-3 my-8 mx-auto flex items-center rounded-xl hover:opacity-75'>Send</button> */}

            <button className="text-[#EDEAEA] my-8 mx-auto shadow-md shadow-[#040c16] flex items-center p-0.5 overflow-hidden text-md font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="hover:text-white px-5 py-2.5 transition-all ease-in 
                        duration-75 bg-[#1B2739] rounded-md group-hover:bg-opacity-0 ">
                            Send
                        </span>
                </button>

            <div>
                <p className='text-[#EDEAEA] text-sm hover:text-[#64FFDA] flex justify-center'>Designed & Built by Allen Tevyaw</p>
            </div>
        </form>
    </div>
  )
}

export default Contact