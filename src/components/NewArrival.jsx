import React from "react";
import "aos/dist/aos.css";

const ProductCard = ({ imgSrc, title, price, oldPrice }) => (
    <div className="flex flex-col cursor-pointer transition duration-300 hover:scale-105 items-center px-4 pt-4 pb-6 rounded-xl bg-[#fff]">
        <img
            src={imgSrc}
            alt={title}
            className="rounded-lg w-full h-80 object-cover"
        />
        <h3 className="mt-2 text-[16px] not-italic font-semibold leading-[20px] tracking-[0.08px] w-full">{title}</h3>
        <div className="flex text-[20px] mt-3 not-italic font-medium leading-6 tracking-[0.1px] gap-2 w-full space-x-2">
            <span className="">${price}</span>
            <span className="line-through text-[#9B9B9B]">${oldPrice}</span>
        </div>
    </div>
);


function NewArrival() {
  
    return (
        <div className='bg-[#F6F5F5]'>
            <div className='flex flex-col'>
                <div data-aos="fade-up" className='font-montserrat xs:text-[36px] sm:text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] text-center 2xl:text-start not-italic font-semibold leading-[84px] tracking-[0.5px] uppercase w-full px-[50px] lg:px-[150px] mt-[100px]'>
                    New Arrival
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 z-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 pt-[48px] px-[50px] md:px-[120px] xl:px-[100px] 2xl:px-[150px] pb-[100px]">
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

export default NewArrival