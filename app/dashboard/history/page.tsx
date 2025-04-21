'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import Templates from '@/app/(data)/Templates';

interface HistoryItem {
  id: string;
  template_slug: string;
  ai_response: string;
  created_at: string;
  form_data: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
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
      setHistory(data as HistoryItem[]);
    }
  };

  const getTemplateName = (slug: string) => {
    return Templates.find(t => t.slug === slug)?.name || slug;
  };

  const getWordCount = (text: string) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">History</h1>
      <p className="text-gray-500 mb-6">Search your previously generate AI content</p>

      <div className="bg-gray-50 rounded-lg">
        <div className="grid grid-cols-5 gap-4 p-4 font-medium bg-gray-100 rounded-t-lg">
          <div>TEMPLATE</div>
          <div>AI RESP</div>
          <div>DATE</div>
          <div>WORDS</div>
          <div>COPY</div>
        </div>

        <div className="divide-y">
          {history.map((item) => (
            <div key={item.id} className="grid grid-cols-5 gap-4 p-4 items-center">
              <div className="flex items-center gap-2">
                <img 
                  src={Templates.find(t => t.slug === item.template_slug)?.icon} 
                  alt={item.template_slug}
                  className="w-6 h-6"
                />
                {getTemplateName(item.template_slug)}
              </div>
              <div className="truncate text-sm text-gray-600">
                {item.ai_response.substring(0, 50)}...
              </div>
              <div>{formatDate(item.created_at)}</div>
              <div>{getWordCount(item.ai_response)}</div>
              <div>
                <Button 
                  variant="link" 
                  className="text-indigo-600"
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