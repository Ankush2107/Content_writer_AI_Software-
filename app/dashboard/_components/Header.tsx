import React from 'react'
import { Search } from 'lucide-react';
function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
        <div className='flex gap-2 items-center border rounded-md max-w-lg p-2'>
            <Search/>
            <input 
                type="text"
                placeholder='Search...' 
                className='outline-none'
            />
        </div>
      <div className='bg-primary rounded-full text-xs text-white flex items-center justify-center px-3 py-3 h-1 cursor-pointer'>
        🔥Join membership plan
      </div>
    </div>
  )
}

export default Header
