import React from 'react'

const ProductCard = ({ imgSrc, title, price, oldPrice }) => (
    <div className="flex flex-col items-center">
        <img
            src={imgSrc}
            alt={title}
            className="rounded-lg w-full object-cover"
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
        <div className='min-h-[780px]'>
            <div className='flex justify-center py-[100px] px-[150px]'>
                <div className='w-1/3 mt-10'>
                    <p className='font-actOfRejection text-[100px] text-[#272312] not-italic font-normal leading-[120px] tracking-[0.5px] uppercase'>Future <br /> Looks <br /> Bright</p>
                    <p className='text-[#7F1BCD] font-montserrat text-[50px] mt-6 italic font-semibold leading-[60px] tracking-[0.5px] uppercase'>Purple <span className='font-montserrat text-[#272312] font-[275]'>&</span></p>
                    <p className='text-[#E0A408] font-montserrat text-[50px] italic mt-3 font-bold leading-[60px] tracking-[0.5px] uppercase'>Gold <span className='stroketext'>Series</span></p>
                </div>
                <div className='w-2/3'>
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