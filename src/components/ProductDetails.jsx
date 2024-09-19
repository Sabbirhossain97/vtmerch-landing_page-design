import React from "react";
import "aos/dist/aos.css";
import { UpArrow, DownArrow, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from "./SVGComponents/SVG";

function ProductDetails() {
  
    return (
        <div className='bg-[#F6F5F5] relative min-h-screen'>
            <h1 data-aos="fade-up" className='pt-[100px] text-center text-[#060606] font-montserrat xs:text-[48px] sm:text-[56px] md:text-[70px] font-semibold leading-[84px] tracking-[0.5px] uppercase'>Product of <span className='stroketext'>the month</span></h1>
            <div className='flex flex-wrap px-[50px] sm:px-[150px] xl:px-[263px] pt-[48px] pb-[100px]'>
                <div className='w-full 2xl:w-1/2 flex'>
                    <div className='flex flex-col items-center'>
                        <button>
                            <UpArrow />
                        </button>
                        <div>
                            <img className='cursor-pointer rounded-lg hover:scale-105 transition duration-300 hover:opacity-80' src='/images/bag_small1.png' alt='bag1' />
                            <img className='cursor-pointer rounded-lg hover:scale-105 transition duration-300 hover:opacity-80' src='/images/bag_small2.png' alt='bag2' />
                            <img className='cursor-pointer rounded-lg hover:scale-105 transition duration-300 hover:opacity-80' src='/images/bag_small3.png' alt='bag3' />
                            <img className='cursor-pointer rounded-lg hover:scale-105 transition duration-300 hover:opacity-80' src='/images/bag_small4.png' alt='bag4' />
                        </div>
                        <button>
                            <DownArrow />
                        </button>
                    </div>
                    <div>
                        <img className='rounded-3xl' src='/images/bag_large.png' alt='bag5' />
                    </div>
                </div>
                <div className='w-full 2xl:w-1/2'>
                    <div className='flex flex-col '>
                        <p className='font-montserrat text-[32px] text-wrap 2xl:text-nowrap not-italic font-bold leading-[38.4px] tracking-[0.16px]'>
                            Premium Valuetainment Leather Backpack
                        </p>
                        <p className='text-[16px] pt-3 font-normal leading-[24px] tracking-[0.08px]'>
                            The attention to detail is evident in every aspect of this backpack. From the sturdy hardware and reinforced stitching to the smooth zippers and luxurious lining, no detail has been overlooked.
                        </p>
                        <p className='font-montserrat pt-6 text-[24px] not-italic font-bold leading-[28.8px] tracking-[0.12px]'>
                            Price: <span className='text-[#EA2127] font-montserrat text-[24px] not-italic font-bold leading-[28.8px] tracking-[0.12px]'>$199.95</span>
                        </p>
                        <div className='flex flex-wrap justify-start gap-3 pt-6 items-center'>
                            <p className='text-[20px] not-italic font-bold leading-[24px] tracking-[0.1px]'>
                                Size:
                            </p>
                            <div className='flex list-none '>
                                <li className='px-4 py-2 border cursor-pointer hover:border-black transition duration-300'>S</li>
                                <li className='px-4 py-2 border cursor-pointer hover:border-black transition duration-300'>M</li>
                                <li className='px-4 py-2 border cursor-pointer hover:border-black transition duration-300'>L</li>
                                <li className='px-4 py-2 border cursor-pointer hover:border-black transition duration-300'>XL</li>
                                <li className='px-4 py-2 border cursor-pointer hover:border-black transition duration-300'>XXL</li>
                            </div>
                        </div>
                        <div className='flex flex-col pt-[24px]'>
                            <p className='text-[20px] not-italic font-bold leading-[24px] tracking-[0.1px]'>
                                Quantity:
                            </p>
                            <div className='flex list-none pt-[12px]'>
                                <li className='px-4 py-2 border border-[#000] hover:border-blue-400 transition duration-300 cursor-pointer'><button>-</button></li>
                                <li className='px-4 py-2 border border-[#000]'>1</li>
                                <li className='px-4 py-2 border border-[#000] hover:border-blue-400 transition duration-300 cursor-pointer'><button>+</button></li>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row pt-[24px] gap-6 w-full flex-1'>
                            <button className='text-[16px] hover:border-blue-500 transistion duration-300 w-full lg:w-1/2 rounded-xl border border-[#272312] px-8 py-4 not-italic font-medium leading-[20px] tracking-[0.08px]'>
                                <p className='text-[#000] text-center text-[16px] font-medium leading-[19.2px] tracking-[0.08px] '>ADD TO CART</p>
                            </button>
                            <button className='text-[16px] hover:bg-black/70 transistion duration-300 w-full lg:w-1/2 bg-[#000] px-8 py-4 rounded-xl not-italic font-medium leading-[20px] tracking-[0.08px]'>
                                <p className='text-[#fff] text-center text-[16px] font-medium leading-[19.2px] tracking-[0.08px] '> BUY IT NOW</p>
                            </button>
                        </div>
                        <div className='pt-[24px] flex gap-3'>
                            <p className='text-[20px] not-italic font-bold leading-[24px] tracking-[0.1px]'>Share:</p>
                            <div className='flex list-none gap-3'>
                                <li className="cursor-pointer">
                                    <FacebookIcon />
                                </li>
                                <li className="cursor-pointer">
                                    <TwitterIcon />
                                </li>
                                <li className="cursor-pointer">
                                    <LinkedInIcon />
                                </li>
                                <li className="cursor-pointer">
                                    <InstagramIcon />
                                </li>
                            </div>
                        </div>
                        <div className='pt-[24px]'>
                            <p className='border-b border-[#000] hover:border-blue-500 hover:text-blue-500 transition duration-300 inline-flex cursor-pointer'>View Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails