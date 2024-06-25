import React from 'react';
import './About.css';
import profile from '../../assets/profile-photo.jpeg'

const About = () => {
  return (
   <section id='About'>
    <div className='h-96'>
    <div className='flex items-center relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 py-8 flex-col md:flex-row px-4 md:px-0 w-full mx-0 md:mx-auto max-w-2xl lg:max-w-screen-lg '>
                <div className='w-[175px] h-[175px] rounded-full overflow-hidden border-[5px] border-gray-300 dark:border-gray-400 hover:bg-sky-500 dark:hover:bg-sky-600 transition-all duration-500 ease-in-out'>
                    <img src={profile}
                        alt="Profile Photo"
                        className='w-full scale-[1.1] hover:scale-[1.2] drop-shadow-[3px_0_3px_rgba(0,0,0,0.3)] transition-all duration-500 ease-in-out cursor-pointer' />
                </div>
                <div className='w-full md:w-[calc(100%-175px)] pt-6 md:pt-0 md:px-6'>
                    <h2 className='font-bold text-2xl'>Haloo! I'm</h2>
                    <h3 className='font-bold text-3xl my-2 flex items-center gap-2'>
                        Zaryab Tahir
                        <svg className='' fill="rgb(0, 149, 246)" height="24" width="24" role="img" viewBox="0 0 40 40"><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"></path></svg>

                    </h3>
                    <p className='mt-2 mb-4'>A beginner enthusiast exploring modern tech, <br />especially in software development.</p>
                    
                </div>
            </div>
    </div>
    </section>
    
  )
}

export default About
