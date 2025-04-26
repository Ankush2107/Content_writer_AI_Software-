import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item.slug}>
      <div className='p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300'>
        <div className='flex flex-col gap-3'>
          <Image 
            src={item.icon} 
            alt={item.name}
            width={40} 
            height={40}
            className='mb-2'
          />
          <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>{item.name}</h2>
          <p className='text-sm text-gray-500 dark:text-gray-400'>{item.desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default TemplateCard
