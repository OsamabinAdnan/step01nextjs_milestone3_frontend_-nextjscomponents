'use client'
import { Button } from '@/components/ui/button'
import { urlFor } from '@/sanity/lib/image';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'


export interface ProductCart{
    name:string;
    description:string;
    price:number;
    currency:string;
    image:any;
    price_id:string;
}

export default function AddtoCart({name, currency, description, image, price, price_id}:ProductCart) {
    const {addItem, handleCartClick}= useShoppingCart()

    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image: urlFor(image).url(),
        price_id:price_id
    }
  return (
    <div>
        <Button onClick={()=>{addItem(product), handleCartClick()}}>Add to Cart</Button>
    </div>
  )
}
