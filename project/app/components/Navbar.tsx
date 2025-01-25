'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { AlignJustify, ShoppingCart, X } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { useShoppingCart } from 'use-shopping-cart'

const links = [
    { href: '/', name: 'Home' },
    { href: '/allproducts', name: 'Products' },
    { href: '/allcategories', name: 'Categories' },
    { href: '/contact', name: 'Contact' },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const pathname = usePathname()
    const {handleCartClick, cartCount}= useShoppingCart()

    return (
        <>
            <header className="fixed top-0 left-0 max-w-full w-full z-20 backdrop-blur-lg shadow-lg border-b py-2 px-4 sm:px-8">
                <div className="flex items-center justify-between mx-auto max-w-full sm:flex-row flex-col gap-4">
                    {/* Main Logo */}
                    <Link href="/">
                        <h1 className="sm:text-4xl text-2xl font-bold">
                            Bazario<span className="text-primary">X</span>
                        </h1>
                    </Link>
                    {/* Toggle Button */}
                    <Button
                        className="lg:hidden text-xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X /> : <AlignJustify />}
                    </Button>
                    {/* Navbar Link */}
                    <nav
                        className={`${
                            isMenuOpen ? 'block ' : 'hidden '
                        } lg:flex flex-col lg:flex-row gap-4 justify-center items-center absolute lg:static top-full left-0 w-full sm:py-2 py-4 px-4 sm:px-8 z-20 backdrop-blur-lg bg-white/80 sm:bg-white/0 sm:dark:bg-black/0 dark:bg-black/80 rounded-md transition-all duration-500`}
                    >
                        {links.map((link, index) => (
                            <div key={index}>
                                {pathname === link.href ? (
                                    <Link href={link.href} className="text-lg font-semibold text-primary">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-lg font-semibold transition-all duration-100 hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                    {/* Cart */}
                    <div className=" relative">
                        <Button onClick={() => handleCartClick()}>
                            <ShoppingCart  className='text-lg '/>
                        </Button>
                        <span className='absolute top-0 left-7 text-xs text-center h-[24px] w-[24px] bg-red-600 rounded-full text-white font-semibold '>{cartCount}</span>
                    </div>
                    <div>
                        <ModeToggle />
                    </div>
                </div>
            </header>
            {/* Spacer to prevent content from overlapping */}
            <div className="h-[70px]"></div>
        </>
    )
}
