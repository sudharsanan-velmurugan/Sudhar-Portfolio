import React from 'react'
import websiteImg from '../assets/Kaarvens.png'
import websiteImg2 from '../assets/display port.png'
import websiteImg3 from '../assets/wireless power.png'
const Projects = () => {
    const projects = [
        {
            img: websiteImg,
            disc: 'A Task Master application  build with React, Mongo DB and .NET Core',
            link: '',
        },
        {
            img: websiteImg2,
            disc: 'Display Port solution application used for testing Type-C to Type-C cables.. using .NET Blazor framework ',
            link: '',
        },
        {
            img: websiteImg3,
            disc: 'Wireless Power Solution application used for testing wireless chargers and mobile devices like Samsung, Apple, etc., using .NET Core and React.',
            link: '',
        }
    ]

    return (
        <section id='projects' className='flex flex-col  py-20 px-5 justify-center bg-primary text-white'>
            <div className='w-full'>
                <div className='flex  flex-col px-10 py-5'>
                    <h1 className=' text-4xl border-b-4 border-secondary mb-4 font-bold w-[140px]' >Projects</h1>
                    <p>Therse are some of my best projects. I have build it with React, Mongo DB and .NET check out them</p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row px-10 gap-5 ' >
                    {
                        projects.map((project) => {
                            return (
                                
                                <div className='relative'>
                                    <img className='h-[250px] w-[500px]' src={project.img} />
                                    <div className='project-description'>
                                        <p className='text-center px-5 py-6'>{project.disc} </p>
                                        <div className='flex justify-center'>
                                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                                        </div>
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects