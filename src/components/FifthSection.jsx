import React from 'react'

function FifthSection() {
    return (
        <div className='relative fifth-section min-h-[1169px]'>
            <div className="grid grid-cols-4 grid-rows-6 gap-4 border">
                <div className="col-span-3 border">1</div>
                <div className="row-span-3 col-start-4 border">
                    <img className='mt-6 rounded-xl object-cover' src='/images/collection_5.jpeg' />
                </div>
                <div className="row-span-3 col-start-4 row-start-4 border">
                    <img className='mt-6 rounded-xl object-cover' src='/images/collection_6.jpeg' />
                </div>
                <div className="row-span-5 col-start-3 row-start-2 border">
                    <img className='h-full row-span-3 col-span-4 rounded-xl object-cover' src='/images/collection_4.jpeg' />

                </div>
                <div className="row-span-2 col-start-2 row-start-3 border">
                    <img className='mt-6 rounded-xl object-cover' src='/images/collection_3.png' />
                </div>
                <div className="row-span-2 col-start-2 row-start-5 border">
                    <img className='mt-6 rounded-xl object-cover' src='/images/collection_2.png' />
                </div>
                <div className="col-start-1 row-start-2 border">18</div>
                <div className="row-span-3 col-start-1 row-start-4 border">19</div>
            </div>
        </div>
    )
}

export default FifthSection