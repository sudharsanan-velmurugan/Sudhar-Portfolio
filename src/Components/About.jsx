import React from 'react'
import aboutImg from '../assets/about.png'
const About = () => {

  const config = {
    line1: "Hi , My name is Sudharsanan. I am a Full-Stack web developer. I built beautiful websites with React.js and Tailwind CSS",
    line2: "I am proficient in Frontend skills like React.js, Redux, Redux toolkit, axios, Tailwind, CSS and HTML.",
    line3: "I am proficient in Backend skills like C#, .NET Framework, .Net Core MVC, .NET Core web API.",
    line4: "I also have experience with MongoDB and the .NET Blazor framework.",
  }
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
      <div className='md:w-1/2 py-5 '>
        <img src={aboutImg} alt="" />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className=' text-4xl border-b-4 border-primary mb-4 font-bold'>About me</h1>
          <p className='pb-5'>{config.line1}</p>
          <p className='pb-5'>{config.line2}</p>
          <p className='pb-5'>{config.line3}</p>
          <p className='pb-5'>{config.line4}</p>
        </div>
      </div>
    </section>
  )
}

export default About