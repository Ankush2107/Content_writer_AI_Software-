import { Search } from 'lucide-react';
import React from 'react'

function SearchSection({ onSearchInput }: any) {
  return (
    <div className='p-[20px] bg-gradient-to-br from-blue-100 via-blue-600 to-blue-100 flex flex-col items-center justify-center text-white'>
      <h2 className='text-3xl font-bold'>Browse All templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
          <Search className='text-primary'/>
          <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none focus:outline-none text-black' onChange={(event) => onSearchInput(event.target.value)} /> 
        </div>
      </div>
    </div>
  ) 
}

export default SearchSection;
