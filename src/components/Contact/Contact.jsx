import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section id='Contact'>
    <div className='h-96'>
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/17fdeabb-74cb-47c7-bd35-5e427a476a0c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-300 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - <a href="Zaryabtahir970@gmail.com" className='text-gray-40'>zaryabtahir970@gmail.com</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
    </div>
    </section>
  )
}

export default Contact
