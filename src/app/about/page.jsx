import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {GitHubIcon, LinkedInIcon,} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
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
                            Hello! I’m a 26-year-old Master of Science in Computer Science, born and raised in Munich.
                            My passion for technology spans the exciting realms of artificial intelligence and
                            quantum computing, alongside a keen interest in the art of communication.
                            This dual enthusiasm led me to create my own company: AInleuchtend.
                        </p>
                        <p>
                            Professionally, my background is rich with experiences in software engineering,
                            covering mobile development, full-stack, backend, and AI projects. In December 2023,
                            I stepped up as the Head of Software Development at Aqarios, where I now lead
                            a talented team towards innovating our product, Aqarios Luna, to new heights.
                        </p>
                        <p>
                            Outside of my day job, AInleuchtend is my personal project where I dive deep into AI,
                            offering presentations for both beginners and seasoned experts, advising companies
                            on AI strategy, and rolling out practical AI solutions.
                            My guiding principles are "Gutta cavat lapidem" (constant effort brings success)
                            and "Each one, Teach one," emphasizing the importance of persistence and sharing knowledge.
                        </p>
                        <p>
                            In essence, I’m a technology enthusiast with a drive to explore,
                            create, and lead in the digital age🚀
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
