import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-[#f7fdfb] px-6 py-20 text-gray-800'>
            <div className='max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mx-auto'>

                <div className='flex flex-col gap-6 col-span-1 sm:col-span-2'>
                    <h1 className='text-2xl md:text-4xl font-bold text-green-700'>
                        Shop<span className='text-emerald-500'>Smart</span>
                    </h1>
                    <p>
                        Discover the best deals on fashion, gadgets, and home essentials. 
                        ShopSmart offers fast delivery, easy returns, and unbeatable customer service 
                        to make your online shopping seamless.
                    </p>
                    <div className='flex gap-6 text-2xl text-gray-700'>
                        <FaFacebookSquare className='hover:text-emerald-500 transition-transform duration-300 hover:scale-110 cursor-pointer' />
                        <FaInstagram className='hover:text-emerald-500 transition-transform duration-300 hover:scale-110 cursor-pointer' />
                        <FaTwitterSquare className='hover:text-emerald-500 transition-transform duration-300 hover:scale-110 cursor-pointer' />
                        <FaGithubSquare className='hover:text-emerald-500 transition-transform duration-300 hover:scale-110 cursor-pointer' />
                    </div>
                </div>

                <div>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-green-700 font-semibold'>Shop</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Men's Fashion</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Women's Fashion</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Electronics</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Home & Kitchen</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-green-700 font-semibold'>Support</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Help Center</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Track Order</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Returns & Refunds</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Shipping Info</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-green-700 font-semibold'>Company</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>About Us</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Careers</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Affiliates</li>
                        <li className='hover:text-emerald-500 cursor-pointer'>Contact Us</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

