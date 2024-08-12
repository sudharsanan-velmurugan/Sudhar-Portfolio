import React from 'react'
import websiteImg from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'
const Projects = () => {
    const projects = [
        {
            img: websiteImg,
            disc: 'A Ecomerce website  build with React, Mongo DB and .NET Core',
            link: '',
        },
        {
            img: websiteImg2,
            disc: 'A Food Ecomerce website  build with React, Mongo DB and .NET Core ',
            link: '',
        },
        {
            img: websiteImg3,
            disc: 'A basic blog website with React',
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