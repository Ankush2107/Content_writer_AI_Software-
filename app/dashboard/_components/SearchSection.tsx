import { Search } from 'lucide-react';
import React from 'react'

function SearchSection({ onSearchInput }: any) {
  return (
    <div className='flex flex-col items-center justify-center p-10 text-center'>
      <h2 className='text-4xl font-bold mb-4 dark:text-white'>👋 what are we creating today?</h2>
      <p className='text-gray-600 dark:text-gray-400 mb-6'>Get started by selecting the content type from the options below</p>
      <div className='w-full max-w-2xl'>
        <div className='flex gap-2 items-center p-3 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700'>
          <Search className='text-gray-400'/>
          <input 
            type="text" 
            placeholder='Search content types like Facebook Ads, Blog ideas, SEO...' 
            className='bg-transparent border-none outline-none focus:outline-none text-gray-800 dark:text-white w-full' 
            onChange={(event) => onSearchInput(event.target.value)} 
          /> 
        </div>
      </div>
    </div>
  ) 
}

export default SearchSection;