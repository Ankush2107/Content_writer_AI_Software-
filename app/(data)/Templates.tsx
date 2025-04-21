export default [
    {
        name: 'Blog',
        desc: 'This is a blog description',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'Create a comprehensive blog post based on the provided niche and outline. Follow these guidelines:\n\n1. Write in a professional yet engaging tone\n2. Include a catchy title\n3. Break down the content into clear sections with headings\n4. Add relevant examples and explanations\n5. Maintain proper paragraph structure\n6. Include a brief conclusion\n\nFormat the content using Markdown:\n- Use # for the main title\n- Use ## for section headings\n- Use proper paragraphs with line breaks\n- Use bullet points or numbered lists where appropriate\n- Use **bold** for emphasis on key points\n- Keep the content informative and well-structured', 
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Ad Agency',
        desc: 'Creative advertising content generator',
        category: 'advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/3600/3600912.png',
        aiPrompt: 'Create 3 compelling advertisement concepts for the specified product or service. Include taglines, key messaging points, and target audience considerations. Format the output with proper HTML tags for headings, paragraphs, and lists.',
        slug: 'generate-ad-concepts',
        form: [
            {
                label: 'Product or service name',
                field: 'input',
                name: 'product',
                required: true,
            },
            {
                label: 'Target audience',
                field: 'input',
                name: 'audience',
                required: true,
            },
            {
                label: 'Key selling points',
                field: 'textarea',
                name: 'sellingPoints',
            }
        ]
    },
    {
        name: 'Copywriting',
        desc: 'Professional copywriting assistant',
        category: 'copywriting',
        icon: 'https://cdn-icons-png.flaticon.com/128/2541/2541988.png',
        aiPrompt: 'Generate persuasive copy for the specified medium and purpose. Create compelling headlines, body text, and calls to action. Format the output with appropriate HTML tags for structure and emphasis.',
        slug: 'generate-copy',
        form: [
            {
                label: 'Copy type (website, email, social media, etc.)',
                field: 'input',
                name: 'copyType',
                required: true,
            },
            {
                label: 'Brand or product name',
                field: 'input',
                name: 'brand',
                required: true,
            },
            {
                label: 'Key message to convey',
                field: 'textarea',
                name: 'message',
                required: true,
            },
            {
                label: 'Tone of voice',
                field: 'input',
                name: 'tone',
            }
        ]
    }
];