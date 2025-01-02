'use client'
import { Button } from '@/components/ui/button'
import { Sheet,  SheetContent,  SheetHeader, SheetTitle } from '@/components/ui/sheet'
import Image from 'next/image'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function ShoppingCartModel() {
    const {cartCount,shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout} = useShoppingCart()

    // Handle checkout button
    async function handleCheckoutClick(event:any){
        event.preventDefault()
        try{
            const response = await redirectToCheckout()
            if(response?.error){
                console.log('Error', response)
            }
        } catch (error){
            console.log('Error', error)
        }
    }
  return (
    <div>
        <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
      
            <SheetContent className='sm:max-w-lg w-[100vw]'>
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
            
                </SheetHeader>
                <div className='h-full flex flex-col justify-between'>
                    <div className='mt-8 flex-1 overflow-y-auto max-h-[60vh]'>
                        <ul className='my-6 divide-y divide-gray-200'>
                            {cartCount === 0 ? (
                                <h1 className='text-2xl py-6'>You dont have any items in cart</h1>
                            ):(
                                <>
                                {Object.values(cartDetails ?? {}).map((entry)=>(
                                    <li key={entry.id} className='flex py-3'>
                                        {/* Image */}
                                        <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                            <Image src={entry.image as string} alt='Product image' width={200} height={200} className='object-center'/>
                                        </div>
                                        {/* Detail */}
                                        <div className='ml-4 flex flex-1 flex-col'>
                                            <div>
                                                <div className='flex justify-between text-base font-medium'>
                                                    <h3 className='text-sm'>{entry.name}</h3>
                                                    <p className='ml-2 text-sm'>${entry.price}</p>
                                                </div>
                                                <p className='line-clamp-2 mt-1 text-[14px] text-gray-600 dark:text-gray-400'>{entry.description}</p>
                                            </div>
                                            {/* Quantity and remove button */}
                                            <div className='flex flex-1 items-end justify-between text-sm '>
                                                <p className='text-sm font-semibold'>QTY: {entry.quantity}</p>
                                                <div className='flex'>
                                                    <button type='button' className='font-medium text-primary hover:text-primary/80' onClick={()=>removeItem(entry.id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                </>
                            )}
                        </ul>
                    </div>
                    <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                        <div className='flex justify-between text-base font-medium'>
                            <p>Subtotal:</p>
                            <p>{cartCount === 0 ? `$${0}`: `$${totalPrice}`}</p>
                        </div>
                        <p className='mt-0.5 text-sm text-gray-600 dark:text-gray-400'>Shipping and taxes are calculated at checkout.</p>
                        <div className='mt-6'>
                            <Button className='w-full' onClick={handleCheckoutClick}>Check Out</Button>
                        </div>
                        <div className='mt-6 flex justify-center text-center text-sm text-gray-600 dark:text-gray-400'>
                            <p>OR <button className='font-medium text-primary hover:text-primary/80' onClick={()=>handleCartClick()}>Continue Shopping</button></p>
                        </div>
                    </div>
                </div>
            
            
            </SheetContent>
        </Sheet>
    </div>
  )
}
