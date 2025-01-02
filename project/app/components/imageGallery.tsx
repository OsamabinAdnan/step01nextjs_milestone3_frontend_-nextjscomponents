'use client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useState } from 'react'

interface ImageGalleryProps {
    images:any
}

export default function ImageGallery({images}:ImageGalleryProps) {
    const [bigImage, setBigImage] = useState(images[0])
    const handleSmallImageClick = (image:any) => {
        setBigImage(image)
    }
  return (
    <div className='grid gap-4 lg:grid-cols-5'>
        <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
            {images.map((image:any, idx:any)=>(
                <div key={idx} className='overflow-hidden rounded-lg bg-gray-100'>
                    <Image src={urlFor(image).url()} alt='image' width={200} height={200} className='' onClick={()=>handleSmallImageClick(image)}/>
                </div>
            ))}
        </div>
        <div className='relative overflow-hidden rounded-lg  lg:col-span-4'>
            <Image src={urlFor(bigImage).url()} alt='image' width={600} height={600} className=''/>
            <span className='absolute top-0 left-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>Sale</span>
        </div>
    </div>
  )
}
