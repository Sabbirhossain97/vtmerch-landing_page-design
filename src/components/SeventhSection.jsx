import React from 'react'

const ProductCard = ({ imgSrc, title, price, oldPrice }) => (
    <div className="flex flex-col items-end">
        <img
            src={imgSrc}
            alt={title}
            className="rounded-lg sm:w-full object-cover w-84 "
        />
        <h3 className="mt-6 text-[16px] not-italic font-medium leading-[20px] tracking-[0.08px] w-full">{title}</h3>
        <div className="flex text-[20px] mt-4 not-italic font-medium leading-6 tracking-[0.1px] gap-2 w-full space-x-2">
            <span className="">${price}</span>
            <span className="line-through text-[#9B9B9B] opacity-80">${oldPrice}</span>
        </div>
    </div>
);

function SeventhSection() {
    return (
        <div className='py-[100px] px-[50px] lg:px-[100px] xl:px-[120px]'>
            <div className='flex flex-col 2xl:flex-row justify-center '>
                <div className='w-full 2xl:w-1/3 flex flex-col justify-end'>
                    <p className='font-actOfRejection text-[40px] sm:text-[48px] lg:text-[100px] text-[#272312] not-italic font-normal leading-[64px] lg:leading-[100px] 2xl:leading-[120px] tracking-[0.5px] uppercase text-center 2xl:text-left'>Future Looks Bright</p>
                    <div className='hidden sm:flex flex-row 2xl:flex-col 2xl:items-start justify-center items-center lg:py-6'>
                        <p className='text-[#7F1BCD] font-montserrat text-[28px] lg:text-[50px] italic font-semibold leading-[60px] tracking-[0.5px] uppercase'>Purple <span className='font-montserrat text-[#272312] font-[275]'>&</span></p>
                        <p className='text-[#E0A408] font-montserrat text-[28px] ml-2 2xl:ml-0 lg:text-[50px] italic font-bold leading-[60px] tracking-[0.5px] uppercase'>Gold <span className='stroketext'>Series</span></p>
                    </div>
                </div>
                <div className='w-full 2xl:w-2/3 flex items-end mt-6'>
                    <div className="relative grid grid-cols-1 z-20 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
                        <ProductCard
                            imgSrc="/images/shirt_1.jpeg"
                            title="FLB Shirt - Purple"
                            price="34.95"
                            oldPrice="34.95"
                        />
                        <ProductCard
                            imgSrc="/images/cap_4.jpeg"
                            title="FLB Shirt - Purple"
                            price="34.95"
                            oldPrice="34.95"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeventhSection