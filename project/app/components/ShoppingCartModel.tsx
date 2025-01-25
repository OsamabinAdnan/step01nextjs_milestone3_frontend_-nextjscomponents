'use client'
import { Button } from '@/components/ui/button'
import { Sheet,  SheetContent,  SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function ShoppingCartModel() {
    const {cartCount,shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout, addItem } = useShoppingCart()

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
    // Handle quantity increase
    const increaseQuantity = (entry:any)=>{
        addItem(entry, {count:1})
    }
    // Handle quantity decrease
    const decreaseQuantity = (entry:any)=>{
        if(entry.quantity === 1){
            removeItem(entry.id)
        } else {
            addItem(entry, {count:-1})
        }
    }
  return (
    <div>
        <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()} >
      
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
                                        <div className='mx-4 flex flex-1 flex-col'>
                                            <div>
                                                <div className='flex justify-between text-base font-medium md:flex-row flex-col'>
                                                    <h3 className='md:text-sm text-xs'>{entry.name}</h3>
                                                    <p className='ml-2 text-sm'>${entry.price}</p>
                                                </div>
                                                <p className='line-clamp-2 mt-1 text-[14px] text-gray-600 dark:text-gray-400'>{entry.description}</p>
                                            </div>
                                            {/* Quantity and remove button */}
                                           
                                            <div className="flex flex-1 items-start justify-between text-sm md:gap-0 gap-2 mt-2 md:flex-row flex-col">
                                                <div className="flex items-center gap-2">
                                                   <Button className="md:px-2 md:py-1 px-0 py-0 bg-blue-600 hover:bg-blue-800"
                                                        onClick={() => decreaseQuantity(entry)}>
                                                        <Minus/> </Button>
                                                    <p className="text-sm font-semibold">{entry.quantity}</p>
                                                    <Button className="md:px-2 md:py-1 px-0 py-0 bg-blue-600 hover:bg-blue-800"
                                                        onClick={() => increaseQuantity(entry)}>
                                                        <Plus/> </Button>
                                                </div>
                                                <div className="flex">
                                                    <button
                                                    type="button"
                                                    className="font-medium text-blue-600 hover:text-blue-800 md:text-[18px] text-[12px]"
                                                    onClick={() => removeItem(entry.id)}>
                                                    Remove Item </button>
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
                            <p>{cartCount === 0 ? `$${0}`: `$${totalPrice?.toFixed(2)}`}</p>
                        </div>
                        <p className='mt-0.5 text-sm text-gray-600 dark:text-gray-400'>Shipping and taxes are calculated at checkout.</p>
                        <div className='mt-6'>
                            <Button className='w-full bg-blue-600 hover:bg-blue-800' onClick={handleCheckoutClick}>
                                Check Out Now
                            </Button>
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