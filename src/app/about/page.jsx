import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata = {
    title: 'About',
    description:
        'I’m Christian Bernhard. I live in Munich, working on Artifical Intelligence.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I’m Christian Bernhard👋🏼
                        I live in Munich, working on Artifical Intelligence.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
    Hi! I'm a 27-year-old M.Sc. in Computer Science, born and raised in Munich. My passion lies at the crossroads of cutting-edge tech and meaningful communication—two forces that led me to found AInleuchtend, a company focused on making AI accessible, actionable, and impactful.
</p>
<p>
    I earned my Master’s degree from LMU Munich, where I also conducted research at BMW. There, I focused on fine-tuning retriever and generator components in Retrieval-Augmented Generation (RAG) systems—deepening my expertise in modern NLP and enterprise AI applications.
</p>
<p>
    Professionally, I bring over 5 years of experience in software engineering, with a broad background spanning mobile development, full-stack and backend systems, and AI-powered applications. I'm currently working as an AI Engineer at Cancom, building state-of-the-art AI systems for enterprise clients.
</p>
<p>
    Previously, I served as Head of Operations at Aqarios, where I led a team of 10+ engineers and managed the development of the Luna Platform—a Platform-as-a-Service (PaaS) solution combining a web application and Python SDK to help businesses connect with quantum computing infrastructure.
</p>
<p>
    Outside of my day-to-day, AInleuchtend is my passion project. Through it, I deliver AI workshops and talks tailored to both beginners and experts, advise companies on AI strategy, and implement practical solutions to real-world problems.
</p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        {/*<SocialLink href="#" icon={XIcon}>*/}
                        {/*    Follow on X*/}
                        {/*</SocialLink>*/}
                        {/*<SocialLink href="#" icon={InstagramIcon} className="mt-4">*/}
                        {/*    Follow on Instagram*/}
                        {/*</SocialLink>*/}
                        <SocialLink href="https://github.com/ChristianBernhard" icon={GitHubIcon} className="mt-4">
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink href="https://www.linkedin.com/in/christian-bernhard-597224199/" icon={LinkedInIcon}
                            className="mt-4">
                            Follow on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="mailto:christian.bernhard089@gmail.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            christian.bernhard089@gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
