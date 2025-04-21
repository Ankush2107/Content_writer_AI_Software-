'use client';

import React, { useState, useEffect } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ChatSession } from '@/utils/AiModels';
import { supabase } from '@/lib/supabase';
import { useUser } from '@clerk/nextjs';
import { format } from 'date-fns';

interface PROPS {
  params: Promise<{
    'template-slug': string
  }>
};

function CreateNewContent(props: PROPS) {
  const params = React.use(props.params);
  const selectedTemplate:TEMPLATE|undefined = Templates.find((item) => item.slug == params['template-slug']);
  const [ loading, setLoading ] = useState(false);
  const [ aiOutput, setAiOutput ] = useState<string>('');
  const {user} = useUser();

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
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
      setLoading(false);
      console.log("RESULT", data.result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
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
          loading={loading}
        />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
};

export default CreateNewContent;