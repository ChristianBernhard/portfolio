import {SimpleLayout} from '@/components/SimpleLayout'
import logoMeta from '@/images/logos/meta.png'
import logoWryte from '@/images/logos/wryte.png'
import logoGitlab from '@/images/logos/gitlab.png'
import logoTech4Germany from '@/images/logos/t4g.png'
import logoCodingWerkstatt from '@/images/logos/codingwerkstatt.svg'
import logoHubmap from "@/images/logos/hubmap.png"
import {Card} from "@/components/Card";
import Image from 'next/image';

const projects = [
    {
        name: 'Coding Werkstatt',
        description:
            'My second company: Teaching the next generation in Python and AI programming. Still Work in Progress.',
        link: {href: 'https://www.coding-werkstatt.com/', label: 'coding-werkstatt.com'},
        logo: logoCodingWerkstatt,
    },
    {
        name: 'HuBMAP - Hacking the Human Vasculature',
        description:
            'Kaggle Challenge: Segment instances of microvascular structures from healthy human kidney tissue slides using multiple Computer Vision models.',
        link: {href: 'https://github.com/JFLXB/CVDL_HuBMAP', label: 'github.com'},
        logo: logoHubmap,
    },
    {
        name: 'LLaMA2 from Scratch',
        description:
            'A reimplementation of LLaMA2 in PyTorch to explore its key components and testing different inference strategies.',
        link: {href: 'https://github.com/ziereis/simple-llama/tree/master', label: 'github.com'},
        logo: logoMeta,
    },
    {
        name: 'wryte',
        description:
            'During my job at adesso, i was working for a start up from munich, developing an iPadOS notetaking app for students, which was also featured in the german tv version of shark tank.',
        link: {href: 'https://www.wryte.io/', label: 'wryte.io'},
        logo: logoWryte,
    },
    {
        name: 'URLShortener',
        description:
            'Implemented a URL Shortener service for the "Cloud-Based Data Processing" course at TUM, utilizing the RAFT consensus protocol. This solution showcases proficiency in distributed systems design and cloud computing.',
        link: {href: 'https://gitlab.db.in.tum.de/Eci/url-shortener', label: 'gitlab.com'},
        logo: logoGitlab,
    },
    {
        name: 'Tech4Germany',
        description:
            'Participated in the Tech4Germany Fellowship as an Engineering Fellow in Berlin for 3 months, where I developed a prototype software aimed at digitizing investment management for the Federal Ministry of Finance.',
        link: {
            href: 'https://mediapool.hm.edu/media/dachmarke/dm_lokal/presse/applying_science/HM_Applying_Science_Magazin_1-2023.pdf#page=42',
            label: 'mediapool.hm.edu'
        },
        logo: logoTech4Germany,
    },
]

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
    title: 'Projects',
    description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
    return (
        <SimpleLayout
            title="Things I’ve made trying to put my dent in the universe."
            intro="This section showcases key projects I've tackled, emphasizing hands-on experience and continuous learning in tech."
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (
                    <Card as="li" key={project.name}>
                        <div
                            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={project.logo}
                                alt=""
                                className="h-8 w-8 rounded-full"
                                unoptimized
                            />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={project.link.href}>{project.name}</Card.Link>
                        </h2>
                        <Card.Description>{project.description}</Card.Description>
                        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                            <LinkIcon className="h-6 w-6 flex-none"/>
                            <span className="ml-2">{project.link.label}</span>
                        </p>
                    </Card>
                ))}
            </ul>
        </SimpleLayout>
    )
}
