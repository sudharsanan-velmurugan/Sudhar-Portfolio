import React from 'react'

const Contact = () => {
    const config = {
        email: 'sudharsananvelmurugan@gmail.com',
        phone: '9360527598',
    }
    return (
        <section id='contact' className='flex flex-col bg-primary px-5 py-32'>

            <div className='flex flex-col items-center  text-white'>
                <h1 className=' text-4xl border-b-4 border-secondary mb-4 w-[140px] font-bold'>Contact</h1>
                <p className=' pb-5'>If you want to discuss more in detail please contact me</p>
                <p className='py-2 px-2'><span className='font-bold'>Email:</span>{config.email}</p>
                <p className='py-2 px-2'><span className='font-bold'>Phone:</span>{config.phone}</p>
            </div>
        </section>

    )
}

export default Contact