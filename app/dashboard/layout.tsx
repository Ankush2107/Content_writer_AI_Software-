'use client'
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageProvider } from '../(context)/TotalUsageContext';

function layout({ children,}: Readonly<{children: React.ReactNode}> ) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  return (
    <TotalUsageProvider>
      <div className='bg-slate-100 dark:bg-gray-900 min-h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
          <SideNav/>
        </div>
        <div className='md:ml-64'>
          <Header/>
          <div className='dark:text-white'>
            {children}
          </div>
        </div>
      </div>
    </TotalUsageProvider>
  )
}

export default layout;