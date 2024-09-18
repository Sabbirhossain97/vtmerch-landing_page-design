import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ThirdSection() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className='bg-[#111] min-h-[852px] flex flex-wrap'>
                <div className='w-full xl:w-1/2 pt-32 xl:pl-[152px]'>
                    <div data-aos="fade-right">
                        <p className='text-[#fff] text-center xl:text-left font-montserrat text-[36px] sm:text-[49px] not-italic font-medium leading-[59px] tracking-[0.5px] uppercase'>Patrick Bet-David's</p>
                    </div>
                    <div data-aos="fade-right">
                        <p className='gradient-text text-center xl:text-left mt-8 font-montserrat text-[52px] sm:text-[70px] not-italic font-bold leading-[59px] tracking-[0.5px] uppercase'>
                            Signed
                        </p>
                    </div>
                    <div data-aos="fade-right">
                        <p data-aos="fade-right" className='gradient-text text-center xl:text-left mt-8 font-montserrat text-[52px] sm:text-[70px] not-italic font-bold leading-[59px] tracking-[0.5px] uppercase'>
                            Collection
                        </p>
                    </div>
                    <div data-aos="fade-up-right" className='flex justify-center xl:justify-start'>
                        <button className='bg-[#FFF] transition duration-300 hover:scale-105 group text-[#000] font-inter text-[16px] not-italic text-center font-medium leading-[19px] tracking-[0.08px] mt-12 rounded-xl uppercase w-[186px] h-14 px-4 py-8 flex justify-center items-center gap-3'>Shop Now
                            <svg className='scale-100 transition duration-300 group-hover:translate-x-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18.9222 9.41089L13.0888 3.57755C12.9317 3.42576 12.7212 3.34176 12.5027 3.34366C12.2842 3.34556 12.0752 3.4332 11.9207 3.58771C11.7662 3.74221 11.6785 3.95122 11.6766 4.16972C11.6747 4.38822 11.7587 4.59872 11.9105 4.75589L16.3213 9.16672H1.66634C1.44533 9.16672 1.23337 9.25452 1.07709 9.4108C0.920805 9.56708 0.833008 9.77904 0.833008 10.0001C0.833008 10.2211 0.920805 10.433 1.07709 10.5893C1.23337 10.7456 1.44533 10.8334 1.66634 10.8334H16.3213L11.9105 15.2442C11.8309 15.3211 11.7674 15.413 11.7238 15.5147C11.6801 15.6164 11.6571 15.7257 11.6561 15.8364C11.6552 15.947 11.6763 16.0568 11.7182 16.1592C11.7601 16.2616 11.8219 16.3546 11.9002 16.4329C11.9784 16.5111 12.0715 16.573 12.1739 16.6149C12.2763 16.6568 12.386 16.6779 12.4967 16.6769C12.6073 16.676 12.7167 16.653 12.8183 16.6093C12.92 16.5656 13.012 16.5021 13.0888 16.4226L18.9222 10.5892C19.0784 10.4329 19.1662 10.221 19.1662 10.0001C19.1662 9.77908 19.0784 9.56716 18.9222 9.41089Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-center xl:justify-start'>
                        <img className='mt-6' src="/images/signature.png" alt='signature' />
                    </div>
                </div>
                <div className='hidden w-full xl:w-1/2 xl:inline-flex gap-6 items-center '>
                    <img data-aos="fade-up-right" className="xl:w-[354px] 2xl:w-[454px] xl:h-[480px] 2xl:h-[580px]" src='/images/book_1.png' alt='book1' />
                    <img data-aos="fade-up-left" className="xl:w-[304px] 2xl:w-[404px] xl:h-[418px] 2xl:h-[518px]" src='/images/book_2.png' alt='book2' />
                </div>
            </div>
        </div>
    )
}

export default ThirdSection