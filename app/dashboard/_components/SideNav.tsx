"use client"
import Image from 'next/image'
import path from 'path';
import React, { use, useEffect } from 'react';
import { Home, FileClock, WalletCards, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
function SideNav() {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard',
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history',
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing',
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting',
        }
    ];

    const pathName = usePathname();

    useEffect(() => {
        console.log(pathName)
    }, []);

  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
        </div>
        <hr className="my-6 border" />
        <div className='mt-[30px]'>
            {
                MenuList.map((menu, index) => (
                    <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white hover:rounded-lg cursor-pointer items-center 
                        ${pathName==menu.path&&'bg-primary text-white rounded-lg'}
                    `}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SideNav
