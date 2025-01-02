'use client'
import { Button } from '@/components/ui/button'
import { urlFor } from '@/sanity/lib/image';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { ProductCart } from './AddtoCart';




export default function CheckOutNow({name, currency, description, image, price, price_id}:ProductCart) {
    const {checkoutSingleItem}= useShoppingCart()

    function BuyNow(priceId:string){
        checkoutSingleItem(priceId)

    }

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
        <Button onClick={() => BuyNow(product.price_id)}>Check Out Now</Button>
    </div>
  )
}
