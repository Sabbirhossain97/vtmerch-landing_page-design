import React from 'react'

const ProductCard = ({ imgSrc, title, price, oldPrice }) => (
    <div className="flex flex-col items-center px-4 pt-4 pb-6 rounded-xl bg-[#fff]">
        <img
            src={imgSrc}
            alt={title}
            className="rounded-lg w-80 h-80 object-cover"
        />
        <h3 className="mt-2 text-[16px] not-italic font-semibold leading-[20px] tracking-[0.08px] w-full">{title}</h3>
        <div className="flex text-[20px] mt-3 not-italic font-medium leading-6 tracking-[0.1px] gap-2 w-full space-x-2">
            <span className="">${price}</span>
            <span className="line-through text-[#9B9B9B]">${oldPrice}</span>
        </div>
    </div>
);

function SecondSection() {
    return (
        <div className='bg-[#F6F5F5]'>

            <div className='flex flex-col'>
                <div className='font-montserrat text-[70px] not-italic font-semibold leading-[84px] tracking-[0.5px] uppercase w-full px-[150px] mt-[100px]'>
                    Buy 1 get 1 Free  <br /> on <span className='stroketext'>best selling products</span>
                </div>
                <div className="relative grid grid-cols-1 z-20 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-[48px] px-[150px] pb-[100px]">
                    <ProductCard
                        imgSrc="/images/cap_1.jpeg"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />
                    <ProductCard
                        imgSrc="/images/cap_2.jpeg"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />
                    <ProductCard
                        imgSrc="/images/cap_2.jpeg"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />
                    <ProductCard
                        imgSrc="/images/cap_3.jpeg"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />

                </div>
            </div>
        </div>
    )
}

export default SecondSection