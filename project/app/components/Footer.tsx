'use client'

import Link from 'next/link'
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { useShoppingCart } from 'use-shopping-cart';


export default function Footer() {
    const { handleCartClick } = useShoppingCart()
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 sm:px-8 mt-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* About Section */}
                <div className='space-y-4'>
                    <h2 className="text-2xl font-bold mb-4">Bazario<span className="text-primary">X</span></h2>
                    <p className="text-gray-400 text-sm">
                        Your one-stop solution for all your e-commerce needs. From top-quality products to exceptional customer service, we strive to deliver the best.
                    </p>
                    <div className="flex  gap-2">
                        <Button onClick={() => handleCartClick()}>
                            <ShoppingCart />
                        </Button>
                        <div className='text-black dark:text-white'>
                            <ModeToggle />
                        </div>
                        
                    </div>
                </div>
                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link>
                        </li>
                        <li>
                            <Link href="/allproducts" className="hover:text-primary transition-colors duration-200">Products</Link>
                        </li>
                        <li>
                            <Link href="/allcategories" className="hover:text-primary transition-colors duration-200">Categories</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-primary transition-colors duration-200">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                {/* Contact and Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Subscribe to our newsletter for the latest updates and offers.
                    </p>
                    <form className="flex items-center space-x-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 text-black dark:text-white rounded focus:ring-2 focus:ring-primary"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex space-x-4 mt-4 items-end justify-start">
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <LuFacebook className="w-5 h-5 hover:text-primary transition-colors duration-300"  />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                            <BsTwitterX className="w-5 h-5 hover:text-primary transition-colors duration-300" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <FaInstagram className="w-5 h-5 hover:text-primary transition-colors duration-300" />
                        </Link>
                        <Link href="/contact" aria-label="Email">
                            <IoMailOutline className="w-5 h-5 hover:text-primary transition-colors duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                © 2025 BazarioX. All rights reserved.
            </div>
        </footer>
    )
}
