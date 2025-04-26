export default [
    {
        name: 'Blog',
        desc: 'Professional blog content creation',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'Create a comprehensive blog post based on the provided niche and outline. Follow these guidelines:\n\n1. Write in a professional yet engaging tone\n2. Include a catchy title that incorporates keywords\n3. Break down the content into clear sections with H2 and H3 headings\n4. Add relevant examples, statistics, and explanations\n5. Maintain proper paragraph structure for readability\n6. Include a compelling call-to-action conclusion\n\nFormat the content using Markdown:\n- Use # for the main title\n- Use ## for section headings\n- Use proper paragraphs with line breaks\n- Use bullet points or numbered lists where appropriate\n- Use **bold** for emphasis on key points\n- Keep the content SEO-friendly with natural keyword integration',
        slug: 'generate-blog-post',
        form: [
            {
                label: 'Enter your blog niche or topic',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter blog outline or key points',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Ad Agency',
        desc: 'Strategic advertising content creation',
        category: 'advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/3600/3600912.png',
        aiPrompt: 'Create 3 compelling advertisement concepts for the specified product or service. Each concept should include:\n\n1. An attention-grabbing headline\n2. Persuasive body copy with clear value proposition\n3. Memorable tagline or slogan\n4. Specific target audience considerations\n5. Primary and secondary messaging points\n6. Suggested visual elements or imagery\n\nEnsure each concept follows a different strategic approach while maintaining brand consistency. Use persuasive language that highlights benefits over features.',
        slug: 'generate-ad-concepts',
        form: [
            {
                label: 'Product or service name',
                field: 'input',
                name: 'product',
                required: true,
            },
            {
                label: 'Target audience demographics',
                field: 'input',
                name: 'audience',
                required: true,
            },
            {
                label: 'Key selling points and benefits',
                field: 'textarea',
                name: 'sellingPoints',
            }
        ]
    },
    {
        name: 'Copywriting',
        desc: 'Persuasive copy for various mediums',
        category: 'copywriting',
        icon: 'https://cdn-icons-png.flaticon.com/128/2541/2541988.png',
        aiPrompt: 'Generate high-converting copy for the specified medium and purpose. Your content should include:\n\n1. Multiple attention-grabbing headline options\n2. Persuasive body text using the AIDA framework (Attention, Interest, Desire, Action)\n3. Powerful calls-to-action optimized for conversion\n4. Emotional triggers and benefit-focused language\n5. Brand voice consistency throughout\n\nTailor your language, sentence length, and formatting to the specific medium while maintaining persuasive impact and addressing customer pain points.',
        slug: 'generate-persuasive-copy',
        form: [
            {
                label: 'Copy medium (website, email, sales page, etc.)',
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
                label: 'Key message or value proposition',
                field: 'textarea',
                name: 'message',
                required: true,
            },
            {
                label: 'Brand voice (professional, casual, authoritative, etc.)',
                field: 'input',
                name: 'tone',
            }
        ]
    },
    {
        name: 'Email Campaign',
        desc: 'Strategic email marketing sequences',
        category: 'email',
        icon: 'https://cdn-icons-png.flaticon.com/128/542/542638.png',
        aiPrompt: 'Create a complete email marketing sequence based on the provided information. Your deliverable should include:\n\n1. 5 attention-grabbing subject line options with open rate optimization\n2. Personalized email greeting and introduction that builds rapport\n3. Scannable body content with clear section breaks and formatting\n4. Compelling value proposition with benefit-focused language\n5. Strong, action-oriented CTA buttons/text with urgency elements\n6. Professional signature block with relevant contact information\n\nEnsure mobile-friendly formatting with short paragraphs, bullet points, and strategic use of bold text for key messages. Balance promotional content with value-giving information.',
        slug: 'generate-email-sequence',
        form: [
            {
                label: 'Campaign purpose (welcome, promotion, nurture, etc.)',
                field: 'input',
                name: 'purpose',
                required: true,
            },
            {
                label: 'Business/brand name',
                field: 'input',
                name: 'brand',
                required: true,
            },
            {
                label: 'Target audience description',
                field: 'input',
                name: 'audience',
                required: true,
            },
            {
                label: 'Key offering or promotion details',
                field: 'textarea',
                name: 'offering',
                required: true,
            },
            {
                label: 'Desired recipient action',
                field: 'input',
                name: 'action',
            }
        ]
    },
    {
        name: 'Social Media',
        desc: 'Platform-optimized social content',
        category: 'social',
        icon: 'https://cdn-icons-png.flaticon.com/128/3938/3938074.png',
        aiPrompt: 'Create a set of 5 platform-specific social media posts that drive engagement and action. Each post should include:\n\n1. Attention-grabbing opening line optimized for feed visibility\n2. Concise, valuable content body with proper formatting\n3. Strategic hashtag recommendations (trending and niche-specific)\n4. Relevant emoji suggestions to enhance engagement\n5. Platform-specific call-to-action tailored to conversion goals\n6. Ideal posting time recommendation based on platform algorithms\n\nEnsure each post respects platform character limits while maximizing impact. Vary content types (question, statement, statistic, quote, etc.) across the set to test engagement.',
        slug: 'generate-social-content',
        form: [
            {
                label: 'Platform (Instagram, Twitter, LinkedIn, Facebook, etc.)',
                field: 'input',
                name: 'platform',
                required: true,
            },
            {
                label: 'Brand/business name',
                field: 'input',
                name: 'brand',
                required: true,
            },
            {
                label: 'Content theme or campaign focus',
                field: 'input',
                name: 'theme',
                required: true,
            },
            {
                label: 'Brand voice (professional, casual, witty, etc.)',
                field: 'input',
                name: 'tone',
            },
            {
                label: 'Post objectives (awareness, engagement, traffic, etc.)',
                field: 'textarea',
                name: 'goals',
            }
        ]
    },
    {
        name: 'Product Description',
        desc: 'Conversion-focused product content',
        category: 'ecommerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081559.png',
        aiPrompt: 'Create a high-converting product description that drives purchasing decisions. Your content should include:\n\n1. Attention-grabbing headline with primary keyword integration\n2. Compelling product overview paragraph highlighting unique value proposition\n3. Scannable feature/benefit bullet points (minimum 5) focusing on customer outcomes\n4. Technical specifications formatted for easy scanning\n5. Social proof elements and trust-building language\n6. SEO-optimized content with primary and secondary keyword integration\n7. Clear call-to-action for purchase\n\nBalance emotional appeals with logical justifications for purchase. Use sensory language to help customers visualize product use and benefits.',
        slug: 'generate-product-content',
        form: [
            {
                label: 'Product name',
                field: 'input',
                name: 'productName',
                required: true,
            },
            {
                label: 'Product category/industry',
                field: 'input',
                name: 'category',
                required: true,
            },
            {
                label: 'Key features and specifications',
                field: 'textarea',
                name: 'features',
                required: true,
            },
            {
                label: 'Target customer profile',
                field: 'input',
                name: 'customer',
            },
            {
                label: 'Unique selling points',
                field: 'textarea',
                name: 'usp',
            }
        ]
    },
    {
        name: 'Press Release',
        desc: 'Newsworthy announcement content',
        category: 'pr',
        icon: 'https://cdn-icons-png.flaticon.com/128/2965/2965879.png',
        aiPrompt: 'Generate a professional press release following journalistic standards and AP style. Your press release should include:\n\n1. Compelling headline that clearly states the news value\n2. Informative subheading with secondary details\n3. Dateline and strong lead paragraph answering who, what, when, where, why\n4. 2-3 supporting paragraphs with relevant details and context\n5. Strategic quote from company executive or relevant stakeholder\n6. Boilerplate company information paragraph\n7. Media contact information and availability\n\nMaintain an objective, factual tone throughout while emphasizing newsworthy elements. Format for easy scanning by journalists and include relevant industry keywords naturally.',
        slug: 'generate-press-release',
        form: [
            {
                label: 'Announcement headline',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Company/organization name',
                field: 'input',
                name: 'company',
                required: true,
            },
            {
                label: 'Key announcement details',
                field: 'textarea',
                name: 'details',
                required: true,
            },
            {
                label: 'Quote attribution (name and title)',
                field: 'input',
                name: 'quoteAttribution',
            },
            {
                label: 'Company boilerplate information',
                field: 'textarea',
                name: 'boilerplate',
            }
        ]
    },
    {
        name: 'Video Script',
        desc: 'Professional video production content',
        category: 'video',
        icon: 'https://cdn-icons-png.flaticon.com/128/1179/1179120.png',
        aiPrompt: 'Create a professional video script with industry-standard formatting. Your script should include:\n\n1. Opening hook that captures attention in the first 5-10 seconds\n2. Clear two-column format with VISUAL cues on left and AUDIO/DIALOGUE on right\n3. Scene headings and transitions where appropriate\n4. Timing indicators for each section (in seconds)\n5. Direction notes for talent and production team\n6. On-screen text suggestions for key points\n7. Strong call-to-action at conclusion\n\nMaintain pacing appropriate for the video length and platform. Use conversational language while hitting key messaging points. Include b-roll suggestions and music/sound effect recommendations where relevant.',
        slug: 'generate-video-script',
        form: [
            {
                label: 'Video type (explainer, promotional, tutorial, etc.)',
                field: 'input',
                name: 'purpose',
                required: true,
            },
            {
                label: 'Target video length (in minutes)',
                field: 'input',
                name: 'length',
                required: true,
            },
            {
                label: 'Key message or topic',
                field: 'textarea',
                name: 'message',
                required: true,
            },
            {
                label: 'Target audience demographics',
                field: 'input',
                name: 'audience',
            },
            {
                label: 'Brand voice and style guidelines',
                field: 'textarea',
                name: 'tone',
            }
        ]
    },
    {
        name: 'Technical Writing',
        desc: 'Clear documentation and guides',
        category: 'technical',
        icon: 'https://cdn-icons-png.flaticon.com/128/10812/10812249.png',
        aiPrompt: 'Create comprehensive technical documentation following industry best practices. Your content should include:\n\n1. Clear, descriptive title and introduction explaining purpose and scope\n2. Logical hierarchical structure with properly nested headings (H1, H2, H3)\n3. Step-by-step instructions with numbered lists where appropriate\n4. Code blocks with proper syntax highlighting and comments\n5. Visual aids descriptions (tables, diagrams, screenshots) where helpful\n6. Technical terms defined on first use with consistent terminology\n7. Troubleshooting section anticipating common issues\n\nMaintain a balance between technical accuracy and accessibility based on audience expertise level. Use active voice and direct instructions. Format for both readability and reference value.',
        slug: 'generate-technical-document',
        form: [
            {
                label: 'Document type (API doc, user guide, tutorial, etc.)',
                field: 'input',
                name: 'docType',
                required: true,
            },
            {
                label: 'Topic or system to document',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Technical specifications and key details',
                field: 'textarea',
                name: 'details',
                required: true,
            },
            {
                label: 'Target audience expertise level',
                field: 'input',
                name: 'audienceLevel',
            },
            {
                label: 'Required sections or components',
                field: 'textarea',
                name: 'sections',
            }
        ]
    },
    {
        name: 'Case Study',
        desc: 'Results-driven success stories',
        category: 'marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652267.png',
        aiPrompt: 'Create a compelling case study that demonstrates clear business impact. Your case study should include:\n\n1. Attention-grabbing title highlighting key result or transformation\n2. Executive summary with key metrics and outcomes\n3. Client background and industry context section\n4. Problem statement with specific challenges and pain points\n5. Solution description with implementation details\n6. Results section with concrete metrics, data, and improvements\n7. Client testimonial or quote highlighting satisfaction\n8. Next steps or future outlook section\n\nUse a narrative arc that shows transformation while maintaining factual accuracy. Balance storytelling with data-driven results. Include specific numbers and percentages to quantify success wherever possible.',
        slug: 'generate-case-study',
        form: [
            {
                label: 'Client/company name',
                field: 'input',
                name: 'client',
                required: true,
            },
            {
                label: 'Industry/sector',
                field: 'input',
                name: 'industry',
                required: true,
            },
            {
                label: 'Challenge or problem statement',
                field: 'textarea',
                name: 'challenge',
                required: true,
            },
            {
                label: 'Solution implemented',
                field: 'textarea',
                name: 'solution',
                required: true,
            },
            {
                label: 'Results and key metrics',
                field: 'textarea',
                name: 'results',
                required: true,
            }
        ]
    },
    {
        name: 'Podcast Script',
        desc: 'Engaging audio content creation',
        category: 'audio',
        icon: 'https://cdn-icons-png.flaticon.com/128/2659/2659407.png',
        aiPrompt: 'Create a professional podcast script that engages listeners from start to finish. Your script should include:\n\n1. Catchy intro with show name, episode number, and topic teaser\n2. Host introduction and episode overview\n3. Segment breakdowns with timing suggestions\n4. Interview questions or discussion points with talking points\n5. Transition phrases between segments\n6. Ad break placeholders with timing\n7. Call-to-action for listener engagement\n8. Outro with summary and next episode teaser\n\nUse conversational language optimized for audio listening. Include sound effect and music cues where appropriate. Balance educational content with entertaining delivery. Format script for easy reading by hosts during recording.',
        slug: 'generate-podcast-script',
        form: [
            {
                label: 'Podcast name',
                field: 'input',
                name: 'podcastName',
                required: true,
            },
            {
                label: 'Episode topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Episode format (interview, solo, panel, etc.)',
                field: 'input',
                name: 'format',
                required: true,
            },
            {
                label: 'Target episode length (in minutes)',
                field: 'input',
                name: 'length',
            },
            {
                label: 'Key talking points',
                field: 'textarea',
                name: 'talkingPoints',
            }
        ]
    },
    {
        name: 'Course Content',
        desc: 'Educational material development',
        category: 'education',
        icon: 'https://cdn-icons-png.flaticon.com/128/2490/2490204.png',
        aiPrompt: 'Create comprehensive educational content following instructional design principles. Your content should include:\n\n1. Clear learning objectives using Bloom\'s taxonomy verbs\n2. Module overview with key concepts to be covered\n3. In-depth explanations of each concept with examples\n4. Visual learning cues and metaphors for complex ideas\n5. Practice exercises with varying difficulty levels\n6. Knowledge check questions with explanations\n7. Summary of key takeaways and next steps\n\nOrganize content in a logical learning sequence from foundational to advanced concepts. Use clear, concise language appropriate for the audience\'s knowledge level. Balance theoretical concepts with practical applications and real-world examples.',
        slug: 'generate-course-material',
        form: [
            {
                label: 'Course subject/topic',
                field: 'input',
                name: 'subject',
                required: true,
            },
            {
                label: 'Target audience level (beginner, intermediate, advanced)',
                field: 'input',
                name: 'level',
                required: true,
            },
            {
                label: 'Key concepts to cover',
                field: 'textarea',
                name: 'concepts',
                required: true,
            },
            {
                label: 'Learning objectives',
                field: 'textarea',
                name: 'objectives',
            },
            {
                label: 'Preferred teaching approach',
                field: 'input',
                name: 'approach',
            }
        ]
    },
    {
        name: 'Website Copy',
        desc: 'Conversion-focused web content',
        category: 'web',
        icon: 'https://cdn-icons-png.flaticon.com/128/1199/1199326.png',
        aiPrompt: 'Create high-converting website copy that drives visitor action. Your content should include:\n\n1. Attention-grabbing headline with clear value proposition\n2. Engaging subheadings that lead visitors through the page\n3. Scannable body copy with short paragraphs and bullet points\n4. Benefit-focused language addressing visitor pain points\n5. Strategic calls-to-action with action verbs\n6. Trust elements (social proof, statistics, credentials)\n7. SEO-optimized content with natural keyword integration\n\nBalance persuasive marketing language with clear information. Use second-person perspective (\"you/your\") to speak directly to visitors. Incorporate power words and emotional triggers while maintaining brand voice. Structure content for both skimming and deep reading.',
        slug: 'generate-website-copy',
        form: [
            {
                label: 'Website page type (homepage, about, product, etc.)',
                field: 'input',
                name: 'pageType',
                required: true,
            },
            {
                label: 'Business/brand name',
                field: 'input',
                name: 'brand',
                required: true,
            },
            {
                label: 'Key services or offerings',
                field: 'textarea',
                name: 'offerings',
                required: true,
            },
            {
                label: 'Target audience',
                field: 'input',
                name: 'audience',
            },
            {
                label: 'Primary call-to-action',
                field: 'input',
                name: 'cta',
            }
        ]
    }
];