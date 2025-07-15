import Image from 'next/image'
import React, { useState } from 'react'

const DesignType = ({selectedDesignType}) => {
    const Designs = [
        {
            name: 'Modern',
            image:'/placeholder.png',
        },
        {
            name: 'Industrial',
            image:'/placeholder.png',
        },
        {
            name: 'Bohemian',
            image:'/placeholder.png',
        },
        {
            name: 'Traditional',
            image:'/placeholder.png',
        },
        {
            name: 'Rustic',
            image:'/placeholder.png',
        },
        {
            name: 'Minimalist',
            image:'/placeholder.png',
        },
    ]
    const [selectedOption, setSelectedOption] = useState();
  return (
    <div className='mt-5'>
        <label className='text-gray-500'>Select Interior Design Type</label>
        <div className='mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {Designs.map((design, index) => (
                <div key={index} onClick={() => {setSelectedOption(design.name); selectedDesignType(design.name)}}>
                    <Image src={design.image} width={100} height={100} alt={`${design.name}`} className={`h-[70px] object-cover rounded-md hover:scale-105 transition-all duration-200 cursor-pointer border-2 ${design.name == selectedOption ? 'p-1 border-primary' : 'border-white'}`} />
                    <h2>{design.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DesignType