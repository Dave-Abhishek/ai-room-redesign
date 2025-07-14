import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const EmptyState = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10 gap-2'>
            <Image className='rounded-full' src={'/placeholder.png'} height={200} width={200} />
            <h2 className='font-medium text-xl text-gray-500'>Create new AI Interior Design for your room</h2>
            <Button className="mt-5">+ Redesign Room</Button>
        </div>
    )
}

export default EmptyState