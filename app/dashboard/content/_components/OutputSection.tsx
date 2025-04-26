'use client';

import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase'
import { useTheme } from '@/app/context/ThemeContext';

const Editor = dynamic(
  () => import('@toast-ui/react-editor').then((mod) => mod.Editor),
  { ssr: false }
);

interface PROPS {
  aiOutput: string
}

export default function OutputSection( {aiOutput}: PROPS ) {
  const editorRef = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance && aiOutput) {
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput])

  return (
    <div className='bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 rounded-lg'>
      <div className='flex justify-between items-center p-5 border-b dark:border-gray-700'>
        <h2 className='font-medium text-lg dark:text-white'>Your result</h2>
        <Button className='flex gap-2 dark:bg-gray-700 dark:hover:bg-gray-600'
          onClick={() => {
            navigator.clipboard.writeText(aiOutput);
          }}
        >
          <Copy className='w-4 h-4'/> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef} 
        initialValue="Your result will be shown here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        theme={theme === 'dark' ? 'dark' : 'light'}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  )
}