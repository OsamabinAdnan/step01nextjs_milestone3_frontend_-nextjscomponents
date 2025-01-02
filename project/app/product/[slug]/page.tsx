import AddtoCart from '@/app/components/AddtoCart'
import CheckOutNow from '@/app/components/CheckOutNow'
import ImageGallery from '@/app/components/imageGallery'
import { FullProduct } from '@/app/interface/interface'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { Star, Truck } from 'lucide-react'
import React from 'react'

export const revalidate = 20; //revalidate every 20 seconds

async function getData(slug:string) {
  const query = `
   *[_type == 'product' && slug.current == "${slug}"] [0] {
      _id,
      images,
      price,
      name,
      description,
     "slug":slug.current,
     "categoryName": category->name,
      "rating": {
        "average": rating.average,
        "count": rating.count
      },
      price_id
  } 
  `
  const data = await client.fetch(query)
  return data
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data:FullProduct = await getData(slug);
  return (
    <div className='mt-32 mb-8'>
      <div className=' mx-auto max-w-[1440px] px-4 md:px-8'>
        {/* Images */}
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
          <ImageGallery images={data.images}/>
          <div className='md:py-8'>
            {/* Category and product name */}
            <div className='mb-2 md:mb-3'>
              <span className='mb-0.5 inline-block text-gray-600 dark:text-gray-400 text-sm font-semibold'>
                {data.categoryName}
              </span>
              <h2 className='text-2xl font-bold lg:text-3xl'>{data.name}</h2>
            </div>
            {/* Rating and Reviews */}
            <div className='mb-4 flex items-center justify-between gap-3 md:mb-8'>
              {/* Rating */}
              <div className='flex items-center  gap-3'>
                <span className='text-yellow-400 fill-current'><Star fill=''/></span>
                <span className='text-sm font-semibold'>{data.rating.average}/5.0</span>
              </div>
              {/* Reviews */}
              <div>
                <span className='text-sm font-semibold'>({data.rating.count}) Ratings</span>
              </div>
            </div>
            {/* Price */}
            <div className='mb-4'>
              <div className='flex items-end gap-2'>
                <span className='text-xl font-bold md:text-2xl dark:text-primary'>$ {data.price}</span>
                <span className='text-red-500 mb-0.5 line-through font-semibold'>${data.price+30}</span>
              </div>
              <span className='text-sm text-gray-600 dark:text-gray-400'>Incl. VAT plus shipping</span>
            </div>
            {/* Shipping */}
            <div className='mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400'>
              <Truck width={25} height={25}/>
              <span className='text-sm'>Deliver within 2 to 4 working days</span>
            </div>
            {/* Checkout button */}
            <div className='flex gap-2.5'>
              <AddtoCart 
                currency='USD'
                description={data.description}
                name={data.name}
                price={data.price}
                image={data.images[0]}
                key={data._id}
                price_id={data.price_id}/>
              <CheckOutNow
                currency='USD'
                description={data.description}
                name={data.name}
                price={data.price}
                image={data.images[0]}
                key={data._id}
                price_id={data.price_id}/>
            </div>
            {/* Description */}
            <div className='mt-6'>
              <p className='text-base text-gray-600 dark:text-gray-400 tracking-wide'>{data.description}</p> 
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
  )
}
