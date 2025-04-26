'use client';
import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE,
    userFormInput: any,
    loading: boolean
};

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    const [formData, setFormData] = useState<any>();

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    }

    const handleInputChange = (e: any) =>  {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700'>
        {selectedTemplate?.icon && (
            <Image src={selectedTemplate.icon} alt='icon' width={70} height={70} />
        )}
        <h2 className='font-bold text-2xl mb-2 text-primary dark:text-white'>{ selectedTemplate?.name }</h2>
        <p className='text-gray-500 dark:text-gray-400 text-sm'>{selectedTemplate?.desc}</p>
        <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item, index) => (
                <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                    <label className='font-bold dark:text-white'>{item.label}</label>
                    {item.field == 'input' ?
                        <Input 
                            name={item.name} 
                            required={item?.required} 
                            onChange={handleInputChange}
                            className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        />
                        : item.field == 'textarea' ?
                        <Textarea 
                            name={item.name} 
                            required={item?.required} 
                            onChange={handleInputChange}
                            className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        /> : null
                    }
                </div>
            ))}
            <Button 
                type='submit' 
                className='py-6 dark:bg-primary dark:text-white dark:hover:bg-primary/90' 
                disabled={loading}
            > 
                {loading && <Loader2Icon className='animate-spin'/>} Generate Content
            </Button>
        </form>
    </div>
  )
};

export default FormSection;