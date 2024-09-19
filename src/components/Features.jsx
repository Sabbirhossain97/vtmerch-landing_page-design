import React from 'react'
import { ShippingIcon, ReturnIcon, PaymentIcon, SupportIcon } from './SVGComponents/SVG'
function Features() {
    return (
        <div className='features'>
            <div className='py-[100px] flex flex-wrap justify-center lg:flex-nowrap gap-[36px] px-[50px] md:px-[100px] lg:px-[160px] lg:gap-[50px] xl:gap-[70px] 2xl:gap-[93px]'>
                <div className='flex flex-col items-center lg:items-start'>
                    <div>
                        <ShippingIcon />
                    </div>
                    <p className='pt-6 text-[#fff] font-montserrat text-[24px] font-medium leading-[28.8px] tracking-[0.12px]'>
                        Shipping
                    </p>
                    <p className='pt-3 text-center lg:text-start text-[#fff] text-[16px] font-normal leading-[24px] tracking-[0.08px]'>
                        The attention to detail is evident in every aspect of this backpack.
                    </p>
                </div>
                <div className='flex flex-col items-center lg:items-start'>
                    <div>
                        <ReturnIcon />
                    </div>
                    <p className='pt-6 text-[#fff] font-montserrat text-[24px] font-medium leading-[28.8px] tracking-[0.12px]'>
                        Return
                    </p>
                    <p className='pt-3 text-center lg:text-start text-[#fff] text-[16px] font-normal leading-[24px] tracking-[0.08px]'>
                        The attention to detail is evident in every aspect of this backpack.
                    </p>
                </div>
                <div className='flex flex-col items-center lg:items-start'>
                    <div>
                        <SupportIcon />
                    </div>
                    <p className='pt-6 text-[#fff] font-montserrat text-[24px] font-medium leading-[28.8px] tracking-[0.12px]'>
                        Support
                    </p>
                    <p className='pt-3 text-center lg:text-start text-[#fff] text-[16px] font-normal leading-[24px] tracking-[0.08px]'>
                        The attention to detail is evident in every aspect of this backpack.
                    </p>
                </div>
                <div className='flex flex-col items-center lg:items-start'>
                    <div>
                        <PaymentIcon />
                    </div>
                    <p className='pt-6 text-[#fff] font-montserrat text-[24px] font-medium leading-[28.8px] tracking-[0.12px]'>
                        Payment
                    </p>
                    <p className='pt-3 text-center lg:text-start text-[#fff] text-[16px] font-normal leading-[24px] tracking-[0.08px]'>
                        The attention to detail is evident in every aspect of this backpack.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features