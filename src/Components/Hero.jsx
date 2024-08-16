import React from 'react'
import heroImg from '../assets/hero.png'
import { Typewriter } from 'react-simple-typewriter';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";

const Hero = () => {
    const config = {
        subtitle: "I' m a",
        words: ['Front-End Developer', 'Back-End Developer', 'Full stack Developer', '.NET Developer']
    }

    return (
        <section className='flex flex-col md:flex-row justify-center px-5 py-32 bg-primary '>
            <div className='md:w-1/2  text-white font-hero-1'>
                <h1 className=' text-6xl '>Hi, </h1>
                <h1 className=' text-6xl  mt-3'>I'm Sudharsanan  </h1>
                <p className='text-4xl mt-6 font-hero-2' >
                    <span>
                        {config.subtitle}
                    </span>
                    <span className='ml-4'>
                        <Typewriter
                            words={config.words}
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={2000}
                            loop={true}
                            cursor
                        />
                    </span>
                </p>
                <div className='flex mt-5'>
                    <a href="https://www.linkedin.com/in/sudharsanan-velmurugan/" target='_blank' className='text-white text-3xl pr-5 hover:text-black'>{<AiOutlineLinkedin />}</a>
                    <a href="https://github.com/sudharsanan-velmurugan" target='_blank' className='text-white text-3xl pr-5 hover:text-black'>{<AiOutlineGithub />}</a>
                </div>
            </div>

            <img className='md:w-1/3' src={heroImg} />
        </section>
    )
}

export default Hero