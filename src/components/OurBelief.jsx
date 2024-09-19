import React from "react";
import "aos/dist/aos.css";

function OurBelief() {
    
    return (
        <div className='eigth-section min-h-[1056px] relative z-100'>
            <div className='hidden lg:block absolute -bottom-8 right-2 transform -translate-x-1/2'>
                <img src='/images/queen.png' alt='queen' />
            </div>
            <div data-aos="fade-up" className='z-50 flex absolute w-full justify-center pt-[50px] lg:pt-[150px]'>
                <p className='text-[#fff] font-actOfRejection text-center text-[48px] sm:text-[84px] md:text-[100px] lg:text-[140px] not-italic leading-[168px] tracking-[1px] uppercase'>what we believe</p>
            </div>
            <div className='relative' >
                <div className='hidden lg:block absolute top-[60px] right-[52px]'>
                    <img className='opacity-5 2xl:opacity-10 w-full h-[706px]' src='logo/valuetainment_red.svg' alt='logo' />
                </div>
                <div className='pt-[137px] lg:pt-[237px] z-20 flex flex-col justify-center 2xl:flex-row w-full gap-[52px]'>
                    <div data-aos="fade-right" className='flex justify-center px-[30px] lg:px-0'>
                        <img className='w-[641px] h-[652px] rounded-xl object-cover' src='/images/hero_2.png' alt='hero_2' />
                    </div>
                    <div data-aos="fade-left" className='flex justify-center'>
                        <div className='flex flex-col pt-0 2xl:pt-20 items-start relative px-[30px] lg:px-0'>
                            <div className='text-left'>
                                <p className='text-[rgba(255,255,255,0.80)] pb-12 text-[16px] font-medium leading-[150%] tracking-[0.08px]'>
                                    <span className='text-[#fff] font-montserrat text-[32px] font-medium leading-[38px] tracking-[0.16px]'>Leadership</span> is vital from the top of corporations to the military to small <br className="hidden sm:inline-block" /> businesses to parents to students. We all can be leaders.
                                </p>
                            </div>
                            <div className=" w-full border-t border-gray-600"></div>
                            <div className='text-left'>
                                <p className='text-[rgba(255,255,255,0.80)] mt-8 pb-12 text-[16px] font-medium leading-[150%] tracking-[0.08px]'>
                                    <span className='text-[#fff] font-montserrat text-[32px] font-medium leading-[38px] tracking-[0.16px]'>Entrepreneurs </span> are heroes who should be respected and celebrated for <br className="hidden sm:inline-block" /> taking risks, launching products, creating jobs and building companies.
                                </p>
                            </div>
                            <div className=" w-full border-t border-gray-600"></div>
                            <div className='text-left '>
                                <p className='text-[rgba(255,255,255,0.80)] mt-8 pb-12 text-[16px] font-medium leading-[150%] tracking-[0.08px]'>
                                    <span className='text-[#fff] font-montserrat text-[32px] font-medium leading-[38px] tracking-[0.16px]'>Capitalism </span> is a critically important economic system that has <br className="hidden sm:inline-block" /> advanced society and the quality of life we enjoy today.
                                </p>
                            </div>
                            <div className=" w-full border-t border-gray-600"></div>
                            <div className='text-left '>
                                <p className='text-[rgba(255,255,255,0.80)] mt-8 pb-12 text-[16px] font-medium leading-[150%] tracking-[0.08px]'>
                                    <span className='text-[#fff] font-montserrat text-[32px] font-medium leading-[38px] tracking-[0.16px]'>Debate </span> is welcome and necessary as it can lead to consensus, epiphanies, and expose <br className="hidden sm:inline-block" /> the truth. When a clash of ideas, often emotionally-charged, evolves into civil debate and <br className="hidden sm:inline-block" /> objective processing of issues, everyone wins. Free speech is critical to productive debate.
                                </p>
                            </div>
                            <div class=" w-full border-t border-gray-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBelief