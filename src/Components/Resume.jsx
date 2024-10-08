import React from 'react'
import resumeImg from '../assets/resume.jpg'

const Resume = () => {
    const config={
        link:'https://sudharsanan-resume.tiiny.site/',
    }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='md:w-1/2 py-5 flex justify-center md:justify-end '>
        <img className='w-[300px]' src={resumeImg} alt="" />
    </div>
    <div className='md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
        <h1 className=' text-4xl border-b-4 border-primary mb-4 w-[140px] font-bold'>Resume</h1>
        <p className=' pb-5 '>You can view my resume <a className='btn' href={config.link} target='_blank'>Download</a></p>
    </div>
    </div>
</section>
    
  )
}

export default Resume