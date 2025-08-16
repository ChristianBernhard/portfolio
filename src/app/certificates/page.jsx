import { SimpleLayout } from '@/components/SimpleLayout'
import { Card } from '@/components/Card'
import Image from 'next/image'
import logoDeepLearningAI from '@/images/logos/deeplearningai.png' // Will be replaced with actual logos
import logoCoursera from '@/images/logos/coursera.png' // Will be replaced with actual logos
import logoUdemy from '@/images/logos/udemy.png' // Will be replaced with actual logos

const certificates = [
  {
    "title": "Reinforcement Fine-Tuning LLMs With GRPO",
    "provider": "DeepLearning.AI",
    "issued": "Aug 2025",
    "link": "https://learn.deeplearning.ai/accomplishments/4a1621e4-8491-4855-8546-07dc5b79b00e?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "Evaluating AI Agents",
    "provider": "DeepLearning.AI",
    "issued": "Jun 2025",
    "link": "https://learn.deeplearning.ai/accomplishments/219892b2-ddfa-47cc-9972-a57b6c0bc183?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "MCP: Build Rich-Context AI Apps with Anthropic",
    "provider": "DeepLearning.AI",
    "issued": "Jun 2025",
    "link": "https://learn.deeplearning.ai/accomplishments/f0b1dfdb-382d-44b7-854c-7cd49ae399e6?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "AI Agents in LangGraph",
    "provider": "DeepLearning.AI",
    "issued": "Mar 2025",
    "link": "https://learn.deeplearning.ai/accomplishments/62a9935e-c682-4359-834a-538d4ba7553b?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "Embedding Models: from Architecture to Implementation",
    "provider": "DeepLearning.AI",
    "issued": "Jan 2025",
    "link": "https://learn.deeplearning.ai/accomplishments/cbfcdadc-56b7-44e5-b6a8-8d2c5a95a02f?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "Understanding and Applying Text Embeddings",
    "provider": "DeepLearning.AI",
    "issued": "Jan 2025",
    "link": "https://learn.deeplearning.ai/accomplishments/086ac8a5-37b3-461c-b5af-0f4156f30b54?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "Vector Databases: from Embeddings to Applications!",
    "provider": "DeepLearning.AI",
    "issued": "Jan 2025",
    "link": "https://learn.deeplearning.ai/accomplishments/316afde2-eb3a-45a7-ae76-0afc835a6fa8?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "Prompt Engineering with Llama 2&3",
    "provider": "DeepLearning.AI",
    "issued": "Oct 2024",
    "link": "https://learn.deeplearning.ai/accomplishments/a9ac98bd-aa58-4237-880e-77e715e6f0f9?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "Generative AI with Large Language Models",
    "provider": "Coursera",
    "issued": "Aug 2023",
    "link": "https://www.coursera.org/account/accomplishments/certificate/3NXR3MB9M8QF",
    "logo": logoCoursera
  },
  {
    "title": "Angular - The Complete Guide (2023 Edition)",
    "provider": "Udemy",
    "issued": "Nov 2022",
    "link": "https://www.udemy.com/certificate/UC-34521094-b75f-4041-97e6-13517c7e1abb/",
    "logo": logoUdemy
  },
  {
    "title": "React Native - The Practical Guide [2023]",
    "provider": "Udemy",
    "issued": "Oct 2022",
    "link": "https://www.udemy.com/certificate/UC-f9898a5b-87fe-46bc-b751-80b8a3af9751/",
    "logo": logoUdemy
  },
  {
    "title": "Sequence Models",
    "provider": "Coursera",
    "issued": "Nov 2021",
    "link": "https://www.coursera.org/account/accomplishments/certificate/UKHEWRAJTU62",
    "logo": logoCoursera
  },
  {
    "title": "Improving Deep Neural Networks",
    "provider": "Coursera",
    "issued": "Oct 2021",
    "link": "https://www.coursera.org/account/accomplishments/certificate/X4XTV488A6FX",
    "logo": logoCoursera
  },
  {
    "title": "Neural Networks and Deep Learning",
    "provider": "Coursera",
    "issued": "Oct 2021",
    "link": "https://www.coursera.org/account/accomplishments/certificate/KEEMYDNHD5E5",
    "logo": logoCoursera
  },
  {
    "title": "Building and Evaluating Advanced RAG",
    "provider": "DeepLearning.AI",
    "issued": null,
    "link": "https://learn.deeplearning.ai/accomplishments/f642e7f1-da9d-47d1-9409-68eea4e76a04?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "Efficiently Serving LLMs",
    "provider": "DeepLearning.AI",
    "issued": null,
    "link": "https://learn.deeplearning.ai/accomplishments/cdc098bb-afc7-449d-94d5-703de2c947ec?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "How Diffusion Models Work",
    "provider": "DeepLearning.AI",
    "issued": null,
    "link": "https://learn.deeplearning.ai/accomplishments/957ef5dc-245e-4dd2-a4db-fcfd11b53f96?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "LangChain Chat with Your Data",
    "provider": "DeepLearning.AI",
    "issued": null,
    "link": "https://learn.deeplearning.ai/accomplishments/63e13898-ccb4-4174-b326-44c3d40382f7?usp=sharing",
    "logo": logoDeepLearningAI
  },
  {
    "title": "LangChain for LLM Application Development",
    "provider": "DeepLearning.AI",
    "issued": null,
    "link": "https://learn.deeplearning.ai/accomplishments/ba52afb0-665f-402f-9037-e54a1c6d15f5?usp=sharing",
    "logo": logoDeepLearningAI
  }
]

function CertificateIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                fill="currentColor"
            />
        </svg>
    )
}

function LinkIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export const metadata = {
    title: 'Certificates',
    description: 'Professional certifications and courses that showcase my continuous learning journey.',
}

export default function Certificates() {
    return (
        <SimpleLayout
            title="Continuous Learning & Professional Development"
            intro="First and foremost: I dedicate every day to learn something new and a lot of stuff is learned by hands-on doing in private repositories and thousands of hours of YouTube and my personal Obsidian knowledge base. However, there are still some mentionable certificates I will list up below."
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {certificates.map((certificate) => (
                    <li key={certificate.title} className="group">
                        <a 
                            href={certificate.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative p-6 rounded-2xl bg-zinc-50/50 ring-1 ring-zinc-100 hover:bg-zinc-50 hover:ring-zinc-200 dark:bg-zinc-800/20 dark:ring-zinc-800 dark:hover:bg-zinc-800/40 dark:hover:ring-zinc-700 transition-all duration-200 flex flex-col"
                        >
                            {/* Date and Logo in same row */}
                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 flex-shrink-0">
                                    <Image
                                        src={certificate.logo}
                                        alt={`${certificate.provider} logo`}
                                        className="h-8 w-8 rounded-full object-contain"
                                        unoptimized
                                    />
                                </div>
                                {/* Issue date on the right */}
                                {certificate.issued && (
                                    <span className="text-sm text-zinc-400 dark:text-zinc-500 flex-shrink-0">
                                        {certificate.issued}
                                    </span>
                                )}
                            </div>
                            
                            {/* Title with fixed height for 2 lines */}
                            <h2 className="text-base font-semibold text-zinc-800 group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400 transition-colors h-12 leading-6">
                                {certificate.title}
                            </h2>
                            
                            {/* Provider */}
                            <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                {certificate.provider}
                            </p>
                            
                            {/* Spacer to push View Certificate to bottom */}
                            <div className="flex-1"></div>
                            
                            {/* View Certificate link - always at bottom */}
                            <div className="mt-6 flex text-sm font-medium text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-400 transition-colors">
                                <LinkIcon className="h-6 w-6 flex-none"/>
                                <span className="ml-2">View Certificate</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </SimpleLayout>
    )
}
