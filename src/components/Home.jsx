import React from 'react'

const ProductCard = ({ imgSrc, title, price, oldPrice }) => (
    <div className="flex flex-col items-center">
        <img
            src={imgSrc}
            alt={title}
            className="rounded-lg w-80 h-80 object-cover"
        />
        <h3 className="mt-2 text-[16px] not-italic font-medium leading-[20px] tracking-[0.08px] w-full text-white">{title}</h3>
        <div className="flex text-[20px] mt-3 not-italic font-medium leading-6 tracking-[0.1px] gap-2 w-full space-x-2">
            <span className="text-white ">${price}</span>
            <span className="line-through text-white opacity-80">${oldPrice}</span>
        </div>
    </div>
);

function Home() {
    return (
        <div>
            <div className="min-h-[940px] bg-red-600 relative">
                {/* Navbar */}
                <nav className="flex justify-between items-center px-20 py-10">
                    <div className="flex items-center">
                        <img
                            src="/logo/Valuetainment.svg"
                            alt="VTMerch Logo"
                            className="w-[115px] h-[115px]"
                        />

                        <p className="font-montserrat text-[112px] leading-[135px] not-italic tracking-[12px] font-[800] text-[#FFF] ml-[10px]">VTMERCH</p>
                    </div>
                    <div>
                        <button className="text-white text-4xl ">&#9776;</button>
                    </div>
                </nav>

                {/* Product Grid */}
                <div className="relative grid grid-cols-1 z-20 sm:grid-cols-2 lg:grid-cols-5 gap-5 py-[240px] pl-[200px]">
                    <ProductCard
                        imgSrc="/images/hero_1.png"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />
                    <ProductCard
                        imgSrc="/images/hero_2.png"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />
                    <ProductCard
                        imgSrc="/images/hero_3.jpeg"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />
                    <ProductCard
                        imgSrc="/images/hero_4.png"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />
                    <ProductCard
                        imgSrc="/images/hero_3.jpeg"
                        title="Army Green Active Short Sleeve"
                        price="34.95"
                        oldPrice="34.95"
                    />
                </div>

                {/* Future Looks Bright Text */}
                <div className=" absolute z-10 top-[320px] left-[150px] font-actOfRejection opacity-40 text-[140px] leading-[168px] tracking-[1px] text-center text-white text-4xl font-bold uppercase mt-8 ">
                    Future Looks Brights!
                </div>
            </div>
        </div>
    )
}

export default Home