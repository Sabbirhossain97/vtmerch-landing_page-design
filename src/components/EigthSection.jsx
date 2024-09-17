import React from 'react'

function EigthSection() {
    return (
        <div className='eigth-section h-[1056px] relative '>
            <div className='absolute -bottom-8 right-2 transform -translate-x-1/2 '>
                <img src='/images/queen.png' />
            </div>
            <div className='z-10 absolute pl-[462px] pt-[150px]'>
                <p className='text-[#fff] font-actOfRejection text-center text-[140px] not-italic leading-[168px] tracking-[1px] uppercase'>what we believe</p>
            </div>
            <div className='relative' >
                <div className='absolute top-[60px] right-[52px]'>
                    <img className='opacity-10 w-[571px] h-[706px]' src='logo/valuetainment_red.svg' />
                </div>
                <div className='pl-[150px] pt-[237px] z-20 flex gap-[52px]'>
                    <img className='w-[641px] h-[652px] rounded-xl object-cover' src='/images/hero_2.png' />
                    <div className='flex flex-col pt-20 justify-center relative'>
                        <p className='text-[rgba(255,255,255,0.80)] pb-12 text-[16px] font-medium leading-[150%] tracking-[0.08px]'>
                            <span className='text-[#fff] font-montserrat text-[32px] font-medium leading-[38px] tracking-[0.16px]'>Leadership</span> is vital from the top of corporations to the military to small <br /> businesses to parents to students. We all can be leaders.
                        </p>
                        <div class=" w-full border-t border-gray-600"></div>
                        <p className='text-[rgba(255,255,255,0.80)] mt-8 pb-12 text-[16px] font-medium leading-[150%] tracking-[0.08px]'>
                            <span className='text-[#fff] font-montserrat text-[32px] font-medium leading-[38px] tracking-[0.16px]'>Entrepreneurs </span> are heroes who should be respected and celebrated for <br /> taking risks, launching products, creating jobs and building companies.
                        </p>
                        <div class=" w-full border-t border-gray-600"></div>
                        <p className='text-[rgba(255,255,255,0.80)] mt-8 pb-12 text-[16px] font-medium leading-[150%] tracking-[0.08px]'>
                            <span className='text-[#fff] font-montserrat text-[32px] font-medium leading-[38px] tracking-[0.16px]'>Capitalism </span> is a critically important economic system that has <br /> advanced society and the quality of life we enjoy today.
                        </p>
                        <div class=" w-full border-t border-gray-600"></div>
                        <p className='text-[rgba(255,255,255,0.80)] mt-8 pb-12 text-[16px] font-medium leading-[150%] tracking-[0.08px]'>
                            <span className='text-[#fff] font-montserrat text-[32px] font-medium leading-[38px] tracking-[0.16px]'>Debate </span> is welcome and necessary as it can lead to consensus, epiphanies, and expose <br /> the truth. When a clash of ideas, often emotionally-charged, evolves into civil debate and <br /> objective processing of issues, everyone wins. Free speech is critical to productive debate.
                        </p>
                        <div class=" w-full border-t border-gray-600"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EigthSection