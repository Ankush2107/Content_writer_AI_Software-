import { NextResponse } from 'next/server';
import { ChatSession } from '@/utils/AiModels';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const chatSession = new ChatSession();
    const result = await chatSession.sendMessage(message);
    return NextResponse.json({ result });
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
} 