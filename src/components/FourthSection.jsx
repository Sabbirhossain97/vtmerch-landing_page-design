import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FourthSection() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className='hidden xl:block relative third-section min-h-[577px]'>
                <div className='absolute top-[54px] left-[32px] lg:left-[90px]'>
                    <svg width="221" height="221" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="quotes" opacity="0.16">
                            <path id="Vector" d="M176.109 31.0781C176.436 31.0816 176.761 31.128 177.076 31.2162C177.794 31.4255 178.424 31.8617 178.872 32.4594C179.32 33.0571 179.562 33.7841 179.562 34.5312V101.643H217.547C218.463 101.643 219.341 102.007 219.989 102.654C220.636 103.302 221 104.18 221 105.096V186.469C221 187.385 220.636 188.263 219.989 188.91C219.341 189.558 218.463 189.922 217.547 189.922H131.219C130.303 189.922 129.425 189.558 128.777 188.91C128.129 188.263 127.766 187.385 127.766 186.469V105.165C127.765 104.511 127.951 103.87 128.301 103.317L173.191 32.6838C173.503 32.1919 173.934 31.7867 174.444 31.506C174.954 31.2252 175.527 31.078 176.109 31.0781ZM214.094 108.618H176.109C175.194 108.618 174.315 108.254 173.668 107.607C173.02 106.959 172.656 106.081 172.656 105.165V46.4618L134.672 106.184V183.016H214.094V108.618Z" fill="white" />
                            <path id="Vector_2" d="M48.3438 31.0781C48.6707 31.0816 48.9958 31.128 49.3106 31.2162C50.0279 31.4255 50.658 31.8617 51.1062 32.4594C51.5545 33.0571 51.7969 33.7841 51.7969 34.5312V101.643H89.7812C90.6971 101.643 91.5754 102.007 92.223 102.654C92.8706 103.302 93.2344 104.18 93.2344 105.096V186.469C93.2344 187.385 92.8706 188.263 92.223 188.91C91.5754 189.558 90.6971 189.922 89.7812 189.922H3.45312C2.5373 189.922 1.65898 189.558 1.01139 188.91C0.363808 188.263 0 187.385 0 186.469V105.165C-0.000152588 104.511 0.185455 103.87 0.535233 103.317L45.4259 32.6838C45.7374 32.1919 46.1683 31.7867 46.6784 31.506C47.1886 31.2252 47.7614 31.078 48.3438 31.0781ZM86.3281 108.618H48.3438C47.4279 108.618 46.5496 108.254 45.902 107.607C45.2544 106.959 44.8906 106.081 44.8906 105.165V46.4618L6.90625 106.184V183.016H86.3281V108.618Z" fill="white" />
                        </g>
                    </svg>
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

export default FourthSection