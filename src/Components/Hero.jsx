import React from 'react'
import heroImg from '../assets/hero.png'
// import Typed  from 'react-typed';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";

const Hero = () => {
const config={
    subtitle:"I' m a FullStack Developer",
}

    return (
        <section className='flex flex-col md:flex-row justify-center px-5 py-32 bg-primary '>
            <div className='md:w-1/2'>
                <h1 className=' text-white text-4xl font-hero-1'>Hi, <br /> I'm Sudharsanan
                    <p className='text-2xl font-hero-2' >{config.subtitle}</p>
                {/* <Typed
                    strings={['Front-End Developer','Back-End Developer','Full stack Developer','.NET Developer']}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                    />             */}
                </h1>
                <div className='flex mt-5'>
                    <a href="" className='text-white text-3xl pr-5 hover:text-black'>{<AiOutlineTwitter />}</a>
                    <a href="" className='text-white text-3xl pr-5 hover:text-black'>{<AiOutlineFacebook />}</a>
                    <a href="" className='text-white text-3xl pr-5 hover:text-black'>{<AiOutlineLinkedin />}</a>
                    <a href="" className='text-white text-3xl pr-5 hover:text-black'>{<AiOutlineGithub />}</a>
                </div>
            </div>

            <img className='md:w-1/3' src={heroImg} />
        </section>
    )
}

export default Hero