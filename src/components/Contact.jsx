import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#2E5978] flex justify-center items-center pl-4 pr-4 pt-8'>
       
       {/* Used Getform.io */}
        <form method='POST' action='https://getform.io/f/ab6579e6-2066-4086-994f-06aad61a1cc3' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#64FFDA] text-gray-200'>Contact</p>
                <p className='text-gray-300 py-4'>If you would like to connect, fill out the form below!</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] rounded-lg' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-lg' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#14B7B9] hover:border-[#14B7B9] px-4 py-3 my-8 mx-auto flex items-center rounded-xl'>Send</button>
        </form>
    </div>
  )
}

export default Contact