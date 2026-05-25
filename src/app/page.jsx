import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { NewsletterButton } from '@/components/NewsletterButton'
import logoAInleuchtend from '@/images/logos/ainleuchtend.png'
import logoCancom from '@/images/logos/cancom.png'
import logoBMW from '@/images/logos/bmw.png'
import logoAqarios from '@/images/logos/aqarios.png'
import logoAdesso from '@/images/logos/adesso.png'
import image1 from '@/images/photos/image-1.png'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/beck_1.jpeg'
import image4 from '@/images/photos/image-4.jpg'
import image7 from '@/images/photos/image-7.jpg'

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ArrowRightIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M3.75 8h8.5m0 0L8.75 4.5M12.25 8l-3.5 3.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
            />
        </svg>
    )
}

function SocialLink({ icon: Icon, ...props }) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}

function Role({ role }) {
    let startLabel =
        typeof role.start === 'string' ? role.start : role.start.label
    let startDate =
        typeof role.start === 'string' ? role.start : role.start.dateTime

    let endLabel = typeof role.end === 'string' ? role.end : role.end.label
    let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

    return (
        <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7 rounded-full" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
                <dt className="sr-only">Date</dt>
                <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label={`${startLabel} until ${endLabel}`}
                >
                    <time dateTime={startDate}>{startLabel}</time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={endDate}>{endLabel}</time>
                </dd>
            </dl>
        </li>
    )
}

function Resume() {
    // Homepage shows a curated set of recent roles only. The full timeline
    // (including Tech4Germany, Wryte and earlier work) lives on /about.
    let resume = [
        {
            company: 'CANCOM',
            title: 'Team Leader AI',
            logo: logoCancom,
            start: '2025',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            company: 'AInleuchtend',
            title: 'Founder',
            logo: logoAInleuchtend,
            start: '2023',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            company: 'BMW',
            title: 'AI Researcher',
            logo: logoBMW,
            start: '2024',
            end: {
                label: '2025',
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            company: 'Aqarios',
            title: 'Head of Operations',
            logo: logoAqarios,
            start: '2023',
            end: {
                label: '2025',
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            company: 'Adesso',
            title: 'Software Engineer',
            logo: logoAdesso,
            start: '2020',
            end: '2022',
        },
    ]

    return (
        <div className="rounded-2xl border border-stone-200/80 p-6 dark:border-zinc-700/50">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
            <Link
                href="/about"
                className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200/90 bg-gradient-to-b from-white to-stone-50/90 px-4 py-2.5 text-sm font-semibold text-stone-900 transition-[border-color,background-color,transform] duration-300 hover:border-stone-300 hover:from-stone-50 hover:to-stone-100/90 hover:shadow-md active:scale-[0.99] motion-reduce:animate-none motion-reduce:transition-none dark:border-zinc-600/70 dark:from-zinc-800/90 dark:to-zinc-900/50 dark:text-stone-100 dark:hover:border-zinc-500 dark:hover:from-zinc-800 dark:hover:to-zinc-800/90 animate-cta-invite dark:animate-cta-invite-dark"
            >
                Explore the full story
                <ArrowRightIcon className="h-4 w-4 stroke-stone-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-none dark:stroke-stone-400 motion-reduce:animate-none animate-cta-arrow-nudge" />
            </Link>
        </div>
    )
}

function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

    const objectPositions = [
        'object-[80%_center]',
        'object-[20%_center]',
        'object-[95%_center]',
        'object-[50%_center]',
        'object-[10%_center]',
    ]

    const images = [image1, image2, image3, image7, image4]

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {images.map((image, index) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 sm:w-72 flex-none overflow-hidden rounded-xl sm:rounded-2xl bg-stone-100 ring-1 ring-stone-200/60 dark:bg-zinc-800 dark:ring-white/10',
                            rotations[index % rotations.length],
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            fill
                            className={clsx('object-cover', objectPositions[index])}
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            {/* HERO — intro on the left, Work widget on the right */}
            <Container className="mt-9">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-14">
                    <div className="animate-fade-up max-w-2xl motion-reduce:animate-none">
                        <h1 className="font-display text-[2.65rem] font-normal leading-[1.08] tracking-tight text-balance text-stone-900 sm:text-5xl sm:leading-[1.06] dark:text-stone-100">
                            Hi, I&apos;m Christian 👋
                        </h1>
                        <p className="mt-5 text-lg font-medium leading-relaxed text-balance text-stone-700 dark:text-stone-300">
                            I lead AI at CANCOM and run AInleuchtend—consulting, custom AI software, and training—from Munich.
                        </p>
                        <p className="mt-5 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                            Computer scientist and entrepreneur with 5+ years in software engineering and AI. I design and ship production-grade LLM, RAG and agentic systems across cloud and on-prem, advise C-level stakeholders on sovereign, hardware-aware AI strategies, and run workshops that turn vague ambition into a working PoC.
                        </p>
                        <p className="mt-5 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                            My{' '}
                            <Link
                                href="/about"
                                className="font-medium text-stone-800 underline decoration-stone-300 underline-offset-4 transition hover:decoration-stone-600 dark:text-stone-200 dark:decoration-stone-600 dark:hover:decoration-stone-300"
                            >
                                about page
                            </Link>{' '}
                            turns each chapter of my career—from researching RAG fine-tuning at BMW to leading the AI team at CANCOM—into a hands-on case study with the work, the artefacts and the impact behind it.
                        </p>
                        <div className="mt-7 flex items-center gap-6">
                            <SocialLink
                                href="https://github.com/ChristianBernhard?tab=repositories"
                                aria-label="Follow on GitHub"
                                icon={GitHubIcon}
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/christian-bernhard-597224199/"
                                aria-label="Follow on LinkedIn"
                                icon={LinkedInIcon}
                            />
                        </div>
                    </div>
                    <div className="lg:pt-1">
                        <Resume />
                    </div>
                </div>
            </Container>

            <Photos />

            {/* Compact newsletter one-liner below the gallery */}
            <Container className="mt-12 sm:mt-16">
                <div className="mx-auto flex max-w-md flex-col items-stretch gap-2">
                    <NewsletterButton />
                    <Link
                        href="https://steady.page/de/ainleuchtend/posts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center text-xs text-zinc-500 transition-colors hover:text-stone-800 dark:text-zinc-400 dark:hover:text-stone-300"
                    >
                        Alle bisherigen Ausgaben ansehen →
                    </Link>
                </div>
            </Container>
        </>
    )
}
