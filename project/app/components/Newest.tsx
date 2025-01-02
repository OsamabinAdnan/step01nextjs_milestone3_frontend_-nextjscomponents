import { client } from '@/sanity/lib/client'
import React from 'react'
import { NewestProducts } from '../interface/interface'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

async function getData() {
    const query = `
    *[_type == 'product'] [0...4] | order(_createdAt desc) {
        _id,
        name,
        price,
        "rating": {
        "average": rating.average,
        "count": rating.count
        },
        "slug":slug.current,
        "categoryName":category->name,
        "imageUrl": images[0].asset->url
    }
  `
  const data = await client.fetch(query)
  return data
}

export default async function Newest() {
    const data:NewestProducts[] = await getData()
  return (
    <div className=''>
        <div className='mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
            <div className='flex justify-between items-center sm:gap-0 gap-2'>
                <h2 className='sm:text-4xl text-xl font-bold tracking-tight'>Our Newest Products</h2>
                <Link href='/allproducts' className='text-primary flex items-center gap-x-1 font-semibold'>See All <span><ArrowRight/></span></Link>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {data.map((product)=>(
                    <div key={product._id} className='group relative  border-[2px] rounded-lg '>
                        <div className='aspect-square overflow-hidden w-full rounded-md group-hover:opacity-75 lg-h-80 bg-gray-200'>
                            <Image src={product.imageUrl} alt={product.name} className='w-full h-full object-cover object-center' width={300} height={300}/>
                        </div>
                        <div className='mt-4 flex justify-between px-2 py-2 '>
                            <div>
                                <h3 className='text-sm justify between line-clamp-1 dark:text-gray-400 text-gray-600'>
                                    <Link href={`/product/${product.slug}`}>
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className='text-sm mt-1 text-primary'>{product.categoryName}</p>
                            </div>
                            <p className='text-sm font-medium'>${product.price}</p>
                        </div>
                        <div className='mt-1 flex justify-between px-2 py-1 '>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-sm font-semibold'>{product.rating.average}</p><span className='text-yellow-400 fill-current'><Star fill=''/></span>
                            </div>
                            <div>
                                <p className='text-sm font-semibold'>({product.rating.count})</p>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}
