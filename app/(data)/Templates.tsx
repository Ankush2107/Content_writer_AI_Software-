export default [
    {
        name: 'Blog',
        desc: 'This is a blog description',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points only based on the given niche topic and provide the result in rich text. Use HTML tags for titles, paragraphs, and lists in proper format.', 
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