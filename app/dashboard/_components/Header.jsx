"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

const Header = () => {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    // console.log("userDetails: ", userDetail)
    return (
        <div className='p-5 shadow-sm flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <Image src={'/logo.svg'} width={40} height={40} alt='logo' />
                <h2 className='font-bold text-lg'>Ai Room Design</h2>
            </div>
            <Button variant="ghost" className="rounded-full text-violet-600">Buy more credits</Button>
            <div className='flex items-center gap-7'>
                <div className='flex items-center gap-2 p-1 px-3 bg-slate-200 rounded-full'>
                    <Image src={'/star.png'} width={20} height={20} alt='star' />
                    <h2>{userDetail[0]?.credits}</h2>
                </div>
                <UserButton />
            </div>
        </div>
    )
}

export default Header