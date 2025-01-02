'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


export default function Contact() {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white my-16 py-12 px-4 sm:px-8">
            <div className="container mx-auto max-w-[1440px]">
                <h1 className="text-4xl font-bold text-center mb-8">
                Have <span className="text-primary">Questions?</span>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Have a question or need assistance? Reach out to us using the form or the information below.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <MapPin className="w-6 h-6 text-primary" />
                                <p>123 E-Commerce St, Online City, Webland</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-primary" />
                                <p>+1 234 567 890</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-primary" />
                                <p>support@bazariox.com</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-6">
                            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                                <LuFacebook className="w-6 h-6 hover:text-primary transition-colors duration-200" />
                            </a>
                            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                                <BsTwitterX className="w-6 h-6 hover:text-primary transition-colors duration-200" />
                            </a>
                            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                                <FaInstagram className="w-6 h-6 hover:text-primary transition-colors duration-200" />
                            </a>
                            <a href="mailto:support@bazariox.com" aria-label="Email">
                                <IoMailOutline className="w-6 h-6 hover:text-primary transition-colors duration-200" />
                            </a>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="name">
                                    Your Name
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="email">
                                    Your Email
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-primary focus:outline-none"
                                ></textarea>
                            </div>
                            <Button
                                type="submit"
                                className="w-full py-2 px-4 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition duration-200"
                            > <IoIosSend />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
