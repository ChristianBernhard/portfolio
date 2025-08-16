import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, } from '@/components/SocialIcons'

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
                    <div className="max-w-md px-2.5 lg:max-w-lg">
                        <div className="aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                            <iframe
                                src="https://www.youtube.com/embed/wyvxzMKuXqM?vq=hd1080&hd=1&rel=0&modestbranding=1"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </div>
                    </div>
                </div>
                                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I'm Christian 👋🏼
                        <br />
                        Solution Architect for Enterprise AI | Munich, Germany
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I specialize in designing and delivering enterprise-grade AI systems with a focus on Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and multi-agent architectures. My expertise spans the full AI lifecycle - from solution design, fine-tuning, and evaluation to governance, deployment, and user enablement - bridging the gap between cutting-edge research and real business impact.
                        </p>
                        <p>
                            Hi! I'm a 27-year-old M.Sc. in Computer Science, born and raised in Munich. My passion lies at the crossroads of advanced technology and meaningful communication - two forces that led me to found AInleuchtend, a company dedicated to making AI accessible, actionable, and impactful.
                        </p>
                        <p>
                            I earned my Master's degree from LMU Munich, where I also conducted research at BMW, fine-tuning retriever and generator components in Retrieval-Augmented Generation systems and building evaluation pipelines on high-performance NVIDIA infrastructure.
                        </p>
                        <p>
                            Professionally, I currently work as an AI Engineer & Consultant at Cancom, helping organizations in industries such as the public sector and defense adopt LLM-based solutions. Previously, I served as Head of Operations at Aqarios, leading a 10+ engineer team in building the Luna Platform, a SaaS product enabling enterprises to integrate with quantum computing backends.
                        </p>
                        <p>
                            Beyond AI, I bring over 5 years of software engineering experience across mobile, backend, and full-stack systems - giving me a strong technical foundation for architecting and integrating AI into complex enterprise environments.
                        </p>
                        <p>
                            Through AInleuchtend, I also deliver workshops, advise companies on AI strategy, and implement tailored AI systems. My clients include municipalities, global enterprises, and even former German President Christian Wulff.
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
                            href="mailto:christianbernhard089@gmail.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            christianbernhard089@gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
