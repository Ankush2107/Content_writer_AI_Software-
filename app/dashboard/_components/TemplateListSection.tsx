import React, { useEffect, useState } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'
export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FROM[]
}
export interface FROM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}
type CategoryMapType = {
    [key: string]: string[];
};
function TemplateListSection({ userSearchInput }: any) {
    const [templateList, setTemplateList] = useState(Templates);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Content', 'Marketing', 'Social', 'Technical', 'Creative'];
    const categoryMapping: CategoryMapType = {
        'Content': ['blog', 'copywriting', 'education', 'web'],
        'Marketing': ['advertising', 'marketing', 'email', 'ecommerce', 'pr'],
        'Social': ['social'],
        'Technical': ['technical'],
        'Creative': ['video', 'audio']
    };
    useEffect(() => {
        let filteredData = Templates;
        if (selectedCategory !== 'All') {
            const categoryFilters = categoryMapping[selectedCategory] || [];
            filteredData = filteredData.filter(item => 
                categoryFilters.includes(item.category.toLowerCase())
            );
        }
        if (userSearchInput) {
            filteredData = filteredData.filter(item => 
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
        }
        setTemplateList(filteredData);
    }, [userSearchInput, selectedCategory]);
    return (
        <div className='px-5 py-3'>
            <div className='flex gap-3 mb-8 flex-wrap items-center justify-center'>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-all
                            ${selectedCategory === category 
                                ? 'bg-primary text-white' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            
            {/* Template Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {templateList.map((item: TEMPLATE, index: number) => (
                    <TemplateCard key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default TemplateListSection;

// 1. Added responsiveness to the google badge.
// 2. Improved search bar filter.
// 3. Added more categories to the template list in content writer software.
// 4. Added a new section for templates in the dashboard.
// 5. Added category based filter for the template list section.