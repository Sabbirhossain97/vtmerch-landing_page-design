import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Pagination, A11y, Autoplay, Navigation } from 'swiper';

import { Arrow } from "./SVGComponents/SVG";

function ShopCollection() {
  

    return (
        <div className='relative fifth-section min-h-[900px] 2xl:min-h-[1169px]'>
            <div >
                <img className='absolute top-6 left-0 sm:left-5 opacity-50 w-[640px] px-[20px] sm:px-0' src='logo/valuetainment_dark.svg' alt='logo' />
            </div>
            <div className='flex justify-center w-full'>
                <div data-aos="fade-up" className='z-10 absolute top-[100px] lg:top-[150px] left-[0] 2xl:left-[160px] flex w-full flex-col items-center 2xl:items-start'>
                    <p className='text-[#fff] font-montserrat xs:text-[48px] sm:text-[70px] font-semibold leading-[84px] uppercase tracking-[0.5px]'>
                        Shop
                    </p>
                    <p className='text-[#fff] second-stroketext font-montserrat xs:text-[48px] sm:text-[70px] font-semibold leading-[84px] uppercase tracking-[0.5px]'>
                        Collection
                    </p>
                    <div data-aos="fade-right" className="z-20">
                        <button className='bg-[#FFF] text-[#000] transition duration-300 hover:scale-105 group font-inter text-[16px] not-italic text-center font-medium leading-[19px] tracking-[0.08px] mt-12 rounded-xl uppercase w-[186px] h-14 px-4 xs:py-6 sm:py-8 flex justify-center items-center gap-3'>View All
                            <Arrow />
                        </button>
                    </div>
                </div>
            </div>
            <div className='hidden 2xl:flex gap-6 xl:px-[100px] 2xl:px-[160px] py-[150px]'>
                <div className='inline-flex items-end relative' >
                    <img className='mt-6 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl brightness-90 object-cover w-[371px] h-[531px]' src='/images/collection_1.jpeg' alt='col1' />
                    <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                        THE BOSS COLLECTION
                    </p>
                </div>
                <div className='flex items-end'>
                    <div className='flex flex-col '>
                        <div className='relative'>
                            <img className='mt-6 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl brightness-90 object-cover w-[424px] h-[282px]' src='/images/collection_2.png' alt='col2' />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                Headgear
                            </p>
                        </div>
                        <div className='relative'>
                            <img className='mt-6 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl brightness-90 object-cover w-[424px] h-[282px]' src='/images/collection_3.png' alt='col3' />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                Value books
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-end relative'>
                    <img className='rounded-xl cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 object-cover brightness-90 w-[300px] h-[700px]' src='/images/collection_4.jpeg' alt='col4' />
                    <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                        Accessories
                    </p>
                </div>
                <div className='flex items-end'>
                    <div className='flex flex-col'>
                        <div className='relative '>
                            <img className='mt-6 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl brightness-90 object-cover w-[424px] h-[424px]' src='/images/collection_5.jpeg' alt='col5' />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                The Future Looks Bright Collection
                            </p>
                        </div>
                        <div className='relative '>
                            <img className='mt-6 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 rounded-xl brightness-90 object-cover w-[424px] h-[424px]' src='/images/collection_6.jpeg' alt='col6' />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                TOPS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[500px] px-[50px] md:px-[84px] lg:px-[120px] 2xl:hidden'>
                <Swiper
                    modules={[Pagination, A11y, Autoplay, Navigation]}
                    spaceBetween={0}
                    autoplay={{ delay: 2000 }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1536: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-custom-pagination",
                    }}
                    navigation
                >
                    <SwiperSlide>
                        <div>
                            <img
                                src="/images/collection_1.jpeg"
                                alt='col7'
                                width="1800px"
                                height="400px"
                                className="w-[300px] cursor-pointer brightness-90 h-[300px] object-cover object-center block  rounded-md"
                            />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                THE BOSS COLLECTION
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="/images/collection_2.png" className='w-[300px] cursor-pointer brightness-90 h-[300px] object-cover object-center block  rounded-md' alt='col8' />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                Headgear
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src="/images/collection_3.png"
                                alt='col9'
                                className="w-[300px] h-[300px] cursor-pointer brightness-90 object-cover object-center block  rounded-md"
                            />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                Value books
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src="/images/collection_4.jpeg"
                                alt='col10'
                                className="w-[300px] h-[300px] cursor-pointer brightness-90 object-cover object-center block  rounded-md"
                            />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                Accessories
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src="/images/collection_5.jpeg"
                                alt='col11'
                                className="w-[300px] h-[300px] cursor-pointer brightness-90 object-cover object-center block  rounded-md"
                            />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                The Future Looks Bright Collection
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src="/images/collection_6.jpeg"
                                alt='col12'
                                className="w-[300px] h-[300px] cursor-pointer brightness-90 object-cover object-center block  rounded-md"
                            />
                            <p className='text-[#fff] uppercase absolute left-5 bottom-4 2xl:text-[24px] 3xl:text-[32px] font-montserrat font-bold leading-[38.4px] tracking-[0.16px]'>
                                TOPS
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ShopCollection