import React from "react";

import { BlockQuote } from "./SVGComponents/SVG";

function OurMission() {
 
    return (
        <div>
            <div className='hidden xl:block relative third-section min-h-[577px]'>
                <div className='absolute top-[54px] left-[32px] lg:left-[90px]'>
                    <BlockQuote />
                </div>
                <div data-aos="fade-right" className='px-[100px] text-center lg:text-left lg:pl-[150px] pt-[204px] text-[28px] 2xl:text-[36px] 3xl:text-[48px]'>
                    <p className='text-[#fff] font-montserrat  not-italic font-bold leading-[57px] tracking-[0.24px] uppercase'>
                        Our mission is to enlighten, entertain
                    </p>
                    <p className='text-[#fff] font-montserrat not-italic font-bold leading-[57px] tracking-[0.24px] uppercase'>
                        and empower current and future
                    </p>
                    <p className='text-[#fff] font-montserrat not-italic font-bold leading-[57px] tracking-[0.24px] uppercase'>
                        leaders around the world.
                    </p>
                </div>
                <div data-aos="fade-left" className='hidden xl:block absolute bottom-0 lg:right-2 2xl:right-[78px]'>
                    <img className='lg:w-10/12 2xl:w-11/12 3xl:w-full' src='/images/patrick.png' alt='pat' />
                </div>
            </div>
            <div className="block xl:hidden relative third-section text-white">
                <div className="mb-6 p-12">
                    <p className='text-[#fff] text-[48px] font-montserrat text-center not-italic font-bold leading-[57px] tracking-[0.24px] uppercase'>
                        Our mission is to enlighten, entertain and empower current and future  leaders around the world.
                    </p>
                </div>
                <div className="max-w-screen-sm mx-auto text-center ">
                    <div className="flex justify-center">
                        <img src="/images/patrick.png" alt="Person" class="w-full sm:w-1/2 object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission