import React from 'react'

function TenthSection() {
    return (
        <div className='bg-[#F6F5F5] relative'>
            <h1 className='pt-[100px] text-center text-[#060606] font-montserrat text-[70px] font-semibold leading-[84px] tracking-[0.5px] uppercase'>Product of <span className='stroketext'>the month</span></h1>

            <div className='flex items-stretch px-[263px] pt-[48px] pb-[100px]'>
                <div className='w-1/2 flex '>
                    <div className='flex flex-col items-center'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                <path d="M6.87196 18.5838L6.87196 3.21319L9.75163 6.09283C10.5788 6.91998 11.8194 5.67925 10.9923 4.8521L8.36564 2.22952L6.61218 0.478813C6.27085 0.139511 5.7196 0.139511 5.37828 0.478813L0.99988 4.8521C0.828904 5.01849 0.73297 5.24752 0.734954 5.48614C0.735053 6.27381 1.69444 6.66037 2.24064 6.09283L5.12032 3.20635L5.12032 18.6291C5.18051 19.8422 6.93235 19.7516 6.87196 18.5838Z" fill="#272312" />
                            </svg>
                        </button>
                        <div>
                            <img className='rounded-lg' src='/images/bag_small1.png' />
                            <img className='rounded-lg' src='/images/bag_small2.png' />
                            <img className='rounded-lg' src='/images/bag_small3.png' />
                            <img className='rounded-lg' src='/images/bag_small4.png' />
                        </div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                <path d="M5.12804 1.41621L5.12804 16.7868L2.24837 13.9072C1.42123 13.08 0.180571 14.3207 1.00771 15.1479L3.63436 17.7705L5.38782 19.5212C5.72914 19.8605 6.2804 19.8605 6.62172 19.5212L11.0001 15.1479C11.1711 14.9815 11.267 14.7525 11.265 14.5139C11.2649 13.7262 10.3056 13.3396 9.75936 13.9072L6.87968 16.7936L6.87968 1.37092C6.81949 0.157826 5.06765 0.248402 5.12804 1.41621Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <img className='rounded-3xl' src='/images/bag_large.png' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col'>
                        <p className='font-montserrat text-[32px] text-nowrap not-italic font-bold leading-[38.4px] tracking-[0.16px]'>
                            Premium Valuetainment Leather Backpack
                        </p>
                        <p className='text-[16px] pt-3 font-normal leading-[24px] tracking-[0.08px]'>
                            The attention to detail is evident in every aspect of this backpack. From the sturdy hardware and reinforced stitching to the smooth zippers and luxurious lining, no detail has been overlooked.
                        </p>
                        <p className='font-montserrat pt-6 text-[24px] not-italic font-bold leading-[28.8px] tracking-[0.12px]'>
                            Price: <span className='text-[#EA2127] font-montserrat text-[24px] not-italic font-bold leading-[28.8px] tracking-[0.12px]'>$199.95</span>
                        </p>
                        <div className='flex pt-6 items-center'>
                            <p className='text-[20px] not-italic font-bold leading-[24px] tracking-[0.1px]'>
                                Size:
                            </p>
                            <div className='flex list-none pl-3'>
                                <li className='px-4 py-2 border border-[rgba(39, 35, 18, 0.50)]'>S</li>
                                <li className='px-4 py-2 border border-[rgba(39, 35, 18, 0.50)]'>M</li>
                                <li className='px-4 py-2 border border-[rgba(39, 35, 18, 0.50)]'>L</li>
                                <li className='px-4 py-2 border border-[rgba(39, 35, 18, 0.50)]'>XL</li>
                                <li className='px-4 py-2 border border-[rgba(39, 35, 18, 0.50)]'>XXL</li>
                            </div>
                        </div>
                        <div className='flex flex-col pt-[24px]'>
                            <p className='text-[20px] not-italic font-bold leading-[24px] tracking-[0.1px]'>
                                Quantity:
                            </p>
                            <div className='flex list-none pt-[12px]'>
                                <li className='px-4 py-2 border border-[#000]'><button>-</button></li>
                                <li className='px-4 py-2 border border-[#000]'>1</li>
                                <li className='px-4 py-2 border border-[#000]'><button>+</button></li>
                            </div>
                        </div>
                        <div className='flex pt-[24px] gap-6 w-full flex-1'>
                            <button className='text-[16px] w-1/2 rounded-xl border border-[#272312] not-italic font-medium leading-[20px] tracking-[0.08px]'>
                                <p className='text-[#000] text-center text-[16px] font-medium leading-[19.2px] tracking-[0.08px] '>ADD TO CART</p>
                            </button>
                            <button className='text-[16px] w-1/2 bg-[#000] px-8 py-4 rounded-xl not-italic font-medium leading-[20px] tracking-[0.08px]'>
                                <p className='text-[#fff] text-center text-[16px] font-medium leading-[19.2px] tracking-[0.08px] '> BUY IT NOW</p>
                            </button>
                        </div>
                        <div className='pt-[24px] flex gap-3'>
                            <p className='text-[20px] not-italic font-bold leading-[24px] tracking-[0.1px]'>Share:</p>
                            <div className='flex list-none gap-3'>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M8.07999 11.04C8.01999 11.04 6.69999 11.04 6.09999 11.04C5.77999 11.04 5.67999 10.92 5.67999 10.62C5.67999 9.82002 5.67999 9.00002 5.67999 8.20002C5.67999 7.88002 5.79999 7.78002 6.09999 7.78002H8.07999C8.07999 7.72002 8.07999 6.56002 8.07999 6.02002C8.07999 5.22002 8.21999 4.46002 8.61999 3.76002C9.03999 3.04002 9.63999 2.56002 10.4 2.28002C10.9 2.10002 11.4 2.02002 11.94 2.02002H13.9C14.18 2.02002 14.3 2.14002 14.3 2.42002V4.70002C14.3 4.98002 14.18 5.10002 13.9 5.10002C13.36 5.10002 12.82 5.10002 12.28 5.12002C11.74 5.12002 11.46 5.38002 11.46 5.94002C11.44 6.54002 11.46 7.12002 11.46 7.74002H13.78C14.1 7.74002 14.22 7.86002 14.22 8.18002V10.6C14.22 10.92 14.12 11.02 13.78 11.02C13.06 11.02 11.52 11.02 11.46 11.02V17.54C11.46 17.88 11.36 18 11 18C10.16 18 9.33999 18 8.49999 18C8.19999 18 8.07999 17.88 8.07999 17.58C8.07999 15.48 8.07999 11.1 8.07999 11.04Z" fill="#060606" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.98 5.04C17.38 5.3 16.76 5.48 16.1 5.56C16.78 5.16 17.3 4.52 17.54 3.74C16.9 4.12 16.2 4.38 15.46 4.54C14.86 3.9 14 3.5 13.06 3.5C11.24 3.5 9.77998 4.98 9.77998 6.78C9.77998 7.04 9.79998 7.28 9.85998 7.52C7.13998 7.4 4.73998 6.08 3.11998 4.1C1.95998 6.18 3.25998 7.9 4.11998 8.48C3.59998 8.48 3.07998 8.32 2.63998 8.08C2.63998 9.7 3.77998 11.04 5.25998 11.34C4.93998 11.44 4.21998 11.5 3.77998 11.4C4.19998 12.7 5.41998 13.66 6.83998 13.68C5.71998 14.56 4.07998 15.26 1.97998 15.04C3.43998 15.98 5.15998 16.52 7.01998 16.52C13.06 16.52 16.34 11.52 16.34 7.2C16.34 7.06 16.34 6.92 16.32 6.78C17 6.28 17.56 5.7 17.98 5.04Z" fill="#060606" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M18 18.0001V12.1401C18 9.26006 17.38 7.06006 14.02 7.06006C12.4 7.06006 11.32 7.94006 10.88 8.78006H10.84V7.32006H7.65997V18.0001H10.98V12.7001C10.98 11.3001 11.24 9.96006 12.96 9.96006C14.66 9.96006 14.68 11.5401 14.68 12.7801V17.9801H18V18.0001Z" fill="#060606" />
                                        <path d="M2.26001 7.32007H5.58001V18.0001H2.26001V7.32007Z" fill="#060606" />
                                        <path d="M3.92 2C2.86 2 2 2.86 2 3.92C2 4.98 2.86 5.86 3.92 5.86C4.98 5.86 5.84 4.98 5.84 3.92C5.84 2.86 4.98 2 3.92 2Z" fill="#060606" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <g clip-path="url(#clip0_0_604)">
                                            <path d="M13.0325 0H4.96721C2.22829 0 0 2.2284 0 4.96732V13.0326C0 15.7716 2.22829 17.9999 4.96721 17.9999H13.0325C15.7716 17.9999 17.9999 15.7715 17.9999 13.0326V4.96732C18 2.2284 15.7716 0 13.0325 0ZM16.403 13.0326C16.403 14.891 14.891 16.4029 13.0326 16.4029H4.96721C3.1089 16.403 1.59704 14.891 1.59704 13.0326V4.96732C1.59704 3.10901 3.1089 1.59704 4.96721 1.59704H13.0325C14.8909 1.59704 16.4029 3.10901 16.4029 4.96732V13.0326H16.403Z" fill="#060606" />
                                            <path d="M8.99993 4.36206C6.44244 4.36206 4.36182 6.44268 4.36182 9.00018C4.36182 11.5576 6.44244 13.6381 8.99993 13.6381C11.5574 13.6381 13.6381 11.5576 13.6381 9.00018C13.6381 6.44268 11.5574 4.36206 8.99993 4.36206ZM8.99993 12.0409C7.32315 12.0409 5.95885 10.6769 5.95885 9.00007C5.95885 7.32318 7.32304 5.95899 8.99993 5.95899C10.6768 5.95899 12.041 7.32318 12.041 9.00007C12.041 10.6769 10.6767 12.0409 8.99993 12.0409Z" fill="#060606" />
                                            <path d="M13.8326 3.00781C13.5249 3.00781 13.2226 3.13238 13.0053 3.35064C12.787 3.56784 12.6614 3.87021 12.6614 4.17897C12.6614 4.48678 12.7871 4.78904 13.0053 5.0073C13.2225 5.2245 13.5249 5.35013 13.8326 5.35013C14.1414 5.35013 14.4427 5.2245 14.6609 5.0073C14.8792 4.78904 15.0038 4.48667 15.0038 4.17897C15.0038 3.87021 14.8792 3.56784 14.6609 3.35064C14.4437 3.13238 14.1414 3.00781 13.8326 3.00781Z" fill="#060606" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_604">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </li>
                            </div>
                        </div>
                        <div className='pt-[24px]'>
                            <p className='border-b border-[#000] inline-flex cursor-pointer'>View Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TenthSection