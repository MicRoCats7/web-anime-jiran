import Image from 'next/image'
import React from 'react'
import notFound from '../public/not-found.jpg'

const Page = () => {
    return (
        <div className='h-screen max-w-7xl'>
            <Image
                src={notFound}
                alt='404'
                width='1920'
                height='1080'
                objectFit='cover'
            />
        </div>
    )
}

export default Page