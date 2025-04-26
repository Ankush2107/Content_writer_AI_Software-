import React from 'react'
import { Search } from 'lucide-react';
import ThemeToggle from '@/app/components/ThemeToggle';

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white dark:bg-gray-800 flex justify-between items-center sticky top-0 z-10'>
        <div className='flex gap-2 items-center border rounded-md max-w-lg p-2 bg-white dark:bg-gray-700'>
            <Search className='dark:text-white'/>
            <input 
                type="text"
                placeholder='Search...' 
                className='outline-none dark:bg-gray-700 dark:text-white'
            />
        </div>
        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <div className='bg-primary rounded-full text-xs text-white flex items-center justify-center px-3 py-3 h-1 cursor-pointer'>
            🔥Join membership plan
          </div>
        </div>
    </div>
  )
}

export default Header
