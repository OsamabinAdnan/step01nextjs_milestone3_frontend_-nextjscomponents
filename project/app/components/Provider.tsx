'use client'
import React from 'react'
import {CartProvider as USCProvider} from "use-shopping-cart"

export default function CartProvider({children}:{children:React.ReactNode}) {
  return (
    <div>
        <USCProvider 
            mode='payment'
            cartMode='client-only'
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
            successUrl='https://bazariox-osamabinadnan.vercel.app/stripe/success'
            cancelUrl='https://bazariox-osamabinadnan.vercel.app/stripe/error'
            currency='USD'
            billingAddressCollection={false}
            shouldPersist={true}
            language='en-US'>
            
            {children}

        </USCProvider>
    </div>
  )
}
