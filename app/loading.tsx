import Image from 'next/image'
import React from 'react'
import loadingIcon from '../public/spinner.svg'

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Image
                src={loadingIcon}
                alt="spinner"
                width={56}
                height={56}
                className="object-contain"
            />
        </div>
    )
}

export default Loading