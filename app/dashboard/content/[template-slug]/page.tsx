'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useUser } from '@clerk/nextjs';
import { useTotalUsage } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';

export default function CreateNewContent() {
  // Use useParams hook to get the template slug
  const params = useParams();
  const templateSlug = params?.['template-slug'] as string;
  
  const selectedTemplate: TEMPLATE | undefined = Templates.find(item => item.slug === templateSlug);
  const [formValue, setFormValue] = useState({});
  const [aitriggered, setAiTriggered] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const {user} = useUser();
  const router = useRouter();
  const [totalUsage, setTotalUsage] = useTotalUsage();

  if(totalUsage > 10000){
    return (
      <div className='p-5'>
        <h1 className='text-xl font-semibold mb-3'>Usage Limit Exceeded</h1>
        <p>Your free usage limit has been exceeded. Please upgrade to continue using the service.</p>
      </div>
    )
  }

  const GenerateAIContent = async (formData: any) => {
    setAiTriggered(true);
    console.log(formData);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: FinalAIPrompt }),
      });
      
      const data = await response.json();
      setAiOutput(data?.result);
      await saveAiOutputInDB(formData, selectedTemplate?.slug, data?.result);
      console.log("RESULT", data.result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setAiTriggered(false);
    }
  }

  const saveAiOutputInDB = async (formData: any, slug: any, aiOutput: string) => {
    try {
      const result = await supabase.from('ai_output').insert({
        form_data: JSON.stringify(formData),
        ai_response: aiOutput,
        template_slug: slug,
        created_by: user?.primaryEmailAddress?.emailAddress || '',
        created_at: new Date().toISOString()
      }).select();
      
      console.log("RESULT", result);
      return result;
    } catch (error) {
      console.error("Error saving to DB:", error);
      return null;
    }
  }

  return (
    <div className='p-5'>
      <Link href='/dashboard'> 
        <Button> <ArrowLeft/> Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection 
          selectedTemplate={selectedTemplate} 
          userFormInput={(i:any) => GenerateAIContent(i)}
          loading={aitriggered}
        />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}