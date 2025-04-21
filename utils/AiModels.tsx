import { GoogleGenAI } from '@google/genai';

interface GenerateContentOptions {
  input: string;
  model?: string;
  responseMimeType?: string;
}

export class ChatSession {
  private ai: GoogleGenAI;
  private model: string;
  private config: { responseMimeType: string };
  private history: Array<{ role: string; parts: Array<{ text: string }> }>;

  constructor(model: string = 'gemini-2.5-pro-preview-03-25', responseMimeType: string = 'text/plain') {
    this.ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
    this.model = model;
    this.config = { responseMimeType };
    this.history = [];
  }

  async sendMessage(message: string): Promise<string> {
    const systemPrompt = `You are a content generation assistant. Format your response as clean content without any HTML tags. Use Markdown formatting:
    - Use # for main headings
    - Use ## for subheadings
    - Use - for bullet points
    - Use 1. 2. 3. for numbered lists
    - Use **text** for bold
    - Use *text* for italic
    - Use proper line breaks between sections
    
    Here's the request: ${message}`;
    
    this.history.push({
      role: 'user',
      parts: [{ text: systemPrompt }],
    });

    const response = await this.ai.models.generateContentStream({
      model: this.model,
      config: this.config,
      contents: this.history,
    });

    let fullResponse = '';
    for await (const chunk of response) {
      fullResponse += chunk.text;
    }

    this.history.push({
      role: 'model',
      parts: [{ text: fullResponse }],
    });

    return fullResponse;
  }

  clearHistory() {
    this.history = [];
  }
}

// For backward compatibility
export async function generateContent({
  input,
  model = 'gemini-2.5-pro-preview-03-25',
  responseMimeType = 'text/plain'
}: GenerateContentOptions): Promise<string> {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const config = {
    responseMimeType,
  };

  const systemPrompt = `You are a content generation assistant. Format your response as clean content without any HTML tags. Use Markdown formatting:
  - Use # for main headings
  - Use ## for subheadings
  - Use - for bullet points
  - Use 1. 2. 3. for numbered lists
  - Use **text** for bold
  - Use *text* for italic
  - Use proper line breaks between sections
  
  Here's the request: ${input}`;

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: systemPrompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullResponse = '';
  for await (const chunk of response) {
    fullResponse += chunk.text;
  }

  return fullResponse;
}  