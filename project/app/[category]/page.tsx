import { NewestProducts } from '@/app/interface/interface'
import { client } from '@/sanity/lib/client'
import {  Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const revalidate = 30; //revalidate every 30 seconds

async function getData(category:string) {
    const query = `
    *[_type == "product" && category->name =='${category}'] {
        _id,
        "imageUrl":images[0].asset->url,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name,
        "rating": {
            "average": rating.average,
            "count": rating.count
        },
    }
    `
    const data = await client.fetch(query)
    return data

}

export default async function CategoryPage({params}:{params:Promise<{category:string}>}) {
    const resolvedParams = await params;
    const { category } = resolvedParams;
    const data:NewestProducts[] = await getData(category);
  return (
    <div className=''>
    <div className='mx-auto max-w-[1440px] px-4 sm:px-6 py-16 lg:px-8'>
        <div className='flex justify-between items-center sm:gap-0 gap-2'>
            <h2 className='sm:text-4xl text-xl font-bold tracking-tight'>Our Products For {category}</h2>
            
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {/* Image */}
            {data.map((product)=>(
                <div key={product._id} className='group relative  border-[2px] rounded-lg '>
                    <div className='aspect-square overflow-hidden w-full rounded-md group-hover:opacity-75 lg-h-80 bg-gray-200'>
                        <Image src={product.imageUrl} alt={product.name} className='w-full h-full object-cover object-center' width={300} height={300}/>
                    </div>
                    {/* Product Slug and Name */}
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
                    {/* Rating */}
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
