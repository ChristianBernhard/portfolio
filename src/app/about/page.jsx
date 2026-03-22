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
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-stone-800 dark:text-zinc-200 dark:hover:text-stone-300"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-stone-600 dark:group-hover:fill-stone-400" />
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
        'Christian Bernhard — Team Lead AI at CANCOM, founder of AInleuchtend, based in Munich.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-md px-2.5 lg:max-w-lg space-y-6">
                        {/* YouTube Video */}
                        <div className="aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                            <iframe
                                src="https://www.youtube.com/embed/wyvxzMKuXqM?vq=hd1080&hd=1&rel=0&modestbranding=1"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </div>

                        {/* Cancom Webinar */}
                        <Link
                            href="https://demo.cancom-ds.de#ki-webinar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="relative aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700 transition-all duration-300 group-hover:ring-stone-400/80 group-hover:shadow-md dark:group-hover:ring-stone-500/40">
                                <Image
                                    src="/webinar.png"
                                    alt="Cancom KI Webinar"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                                        <svg className="h-7 w-7 text-zinc-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-stone-800 dark:group-hover:text-stone-200">
                                    Vom Prompt zum Mehrwert
                                </h3>
                                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                                    Cancom Webinar: Wissensmanagement mit RAG & On-Prem AI-Infrastruktur. Gehostet auf dem AI Demohub – einer Plattform, die ich eigenständig entwickelt habe. <span className="text-zinc-400 dark:text-zinc-500">(ggf. runterscrollen)</span>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                                <div className="lg:order-first lg:row-span-2">
                    <h1 className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100">
                        I&apos;m Christian Bernhard
                    </h1>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                        I lead the AI team at CANCOM and founded AInleuchtend, where I work with organisations across Germany. Munich is home.
                    </p>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I lead CANCOM's AI department, including strategy, portfolio development, and staffing for AI initiatives. I design and deliver enterprise AI systems—LLMs, RAG, agentic workflows, and AIoT—across cloud and on-prem, and I own the technical architecture of scalable, full-stack AI applications and platforms. That spans precise GPU memory orchestration, compute sizing, and high-performance interconnects, through to optimizing inference with NVIDIA AI Enterprise (NIMs, TensorRT-LLM, NeMo), vLLM, and open models such as Qwen and Nemotron, with a strong focus on utilization, VRAM efficiency, and TCO.
                        </p>
                        <p>
                            I'm a 28-year-old M.Sc. in Computer Science, born and raised in Munich. My passion sits at the intersection of advanced technology and clear communication—which also drives AInleuchtend, my company dedicated to making AI accessible, actionable, and impactful.
                        </p>
                        <p>
                            I earned my Master's degree from LMU Munich, where I also conducted research at BMW, fine-tuning retriever and generator components in Retrieval-Augmented Generation systems and building evaluation pipelines on high-performance NVIDIA infrastructure.
                        </p>
                        <p>
                            At CANCOM, I act as a trusted advisor to C-level stakeholders, translating complex hardware requirements and business goals into executable, cost-optimized AI strategies—supporting organizations in sectors such as the public sector and defense. Previously, I was Head of Operations at Aqarios, leading a 10+ engineer team building the Luna Platform, a SaaS product for enterprise integration with quantum computing backends.
                        </p>
                        <p>
                            Beyond AI, I bring over 5 years of software engineering experience across mobile, backend, and full-stack systems—giving me a strong foundation for architecting and integrating AI into complex enterprise environments.
                        </p>
                        <p>
                            Through AInleuchtend, I deliver workshops, advise on AI strategy, and implement tailored AI systems. My clients include municipalities, global enterprises, and former German President Christian Wulff.
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
