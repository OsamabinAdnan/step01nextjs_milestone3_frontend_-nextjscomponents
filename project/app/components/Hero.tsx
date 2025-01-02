import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const query = "*[_type == 'heroImage'] [0]"

  // Fetch data from the Sanity API
  const data = await client.fetch(query)
  return data
  
}

export default async function Hero() {
  const data = await getData()
  return (
    <>
      <section className='mx-auto max-w-full px-4 sm:px-6 lg:px-8 mt-32 border-b  pb-8'>
        <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
          <div className='flex flex-col justify-center w-full lg:w-1/3 mb-6 sm:mb-12 lg:mb-0 lg:pb-24 lg:pt-48'>
            <h1 className='mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl'>Top Fashion for a top price!</h1>
            <p className='max-w-md leading-relaxed text-gray-600 dark:text-gray-400 xl:text-lg'>We sell only the most exclusive and high quality products for you. We are the best so come shop with us</p>
          </div>
          <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
          {/* 1st image */}
            <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
           <Image src={urlFor(data.image1).url()} alt='image1' className=' h-full  w-full object-cover object-center' width={500} height={500} priority/>
            </div>
          {/* 2nd image */}
          <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
            <Image src={urlFor(data.image2).url()} alt='image2' className=' h-full  w-full object-cover object-center' width={500} height={500} priority/>
          </div>
          </div>
        </div>
        {/* All product links */}
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
          <div className='flex divide-x  rounded-lg  gap-2'>
            <Button className='flex  items-center justify-center transition-all duration-300 hover:scale-105 rounded-lg '> 
              <Link href='/Men'>Men</Link>
            </Button>
            <Button className='flex  items-center justify-center transition-all duration-300 hover:scale-105 rounded-lg'> 
              <Link href='/Women'>Women</Link>
            </Button>
            <Button className='flex  items-center justify-center transition-all duration-300 hover:scale-105 rounded-lg'> 
              <Link href='/Kids'>Kids</Link>
            </Button>
          </div>
        </div>
      </section>  
    </>
  )
}
