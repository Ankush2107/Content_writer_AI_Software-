'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import Templates from '@/app/(data)/Templates';
import Image from 'next/image';

export interface HISTORY {
  id: string;
  formData: string;
  ai_response: string;
  templateSlug: string;
  createdBy: string
  created_at: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HISTORY[]>([]);
  const { user } = useUser();

  useEffect(() => {
    fetchHistory();
  }, [user]);

  const fetchHistory = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    const { data, error } = await supabase
      .from('ai_output')
      .select('*')
      .eq('created_by', user.primaryEmailAddress.emailAddress)
      .order('created_at', { ascending: false });

    if (data) {
      setHistory(data as HISTORY[]);
    }
  };

  const getTemplateName = (slug: string) => {
    const template = Templates.find(t => t.slug === slug);
    return template?.name || slug;
  };

  const getTemplateIcon = (slug: string) => {
    const template = Templates.find(t => t.slug === slug);
    return template?.icon || '/file.svg';
  };

  const getWordCount = (text: string) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2 dark:text-white">History</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">Search your previously generate AI content</p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="grid grid-cols-5 gap-4 p-4 font-medium bg-gray-100 dark:bg-gray-700 rounded-t-lg">
          <div className="dark:text-white">TEMPLATE</div>
          <div className="dark:text-white">AI RESP</div>
          <div className="dark:text-white">DATE</div>
          <div className="dark:text-white">WORDS</div>
          <div className="dark:text-white">COPY</div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {history.map((item) => (
            <div key={item.id} className="grid grid-cols-5 gap-4 p-4 items-center dark:text-white">
              <div className="flex items-center gap-2">
                {getTemplateIcon(item.templateSlug) && (
                  <Image 
                    src={getTemplateIcon(item.templateSlug)}
                    alt={`${getTemplateName(item.templateSlug)} icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                )}
                {getTemplateName(item.templateSlug)}
              </div>
              <div className="truncate text-sm text-gray-600 dark:text-gray-300">
                {item.ai_response?.substring(0, 50)}...
              </div>
              <div>{formatDate(item.created_at)}</div>
              <div>{getWordCount(item.ai_response)}</div>
              <div>
                <Button 
                  variant="link" 
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                  onClick={() => navigator.clipboard.writeText(item.ai_response)}
                >
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}