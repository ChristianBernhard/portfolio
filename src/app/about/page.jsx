import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { ExperienceJourney } from '@/components/ExperienceJourney'
import {
    heroKpis,
    education,
    certifications,
    languages,
    skills,
} from '@/lib/experience'
import heroImage from '@/images/photos/image-7.jpg'

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

function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
            />
        </svg>
    )
}

function SocialLink({ className, href, children, icon: Icon }) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center text-sm font-medium text-zinc-700 transition hover:text-stone-900 dark:text-zinc-300 dark:hover:text-stone-100"
            >
                <Icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-stone-700 dark:group-hover:fill-stone-300" />
                <span className="ml-3">{children}</span>
            </Link>
        </li>
    )
}

export const metadata = {
    title: 'About',
    description:
        'Christian Bernhard — Team Leader AI at CANCOM, founder of AInleuchtend. An interactive portfolio of roles, projects and impact across enterprise AI.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-24">
            {/* HERO — intro on the left, portrait + CTA on the right */}
            <section className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 dark:text-stone-300">
                        About
                    </p>
                    <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100">
                        I&apos;m Christian Bernhard from Munich.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                        I lead the AI team at CANCOM. My work sits at the intersection of GenAI engineering, hardware-aware system design and translating all of that into language a board actually understands.
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                        Most of my days look like one of three things: designing and shipping production-grade LLM, RAG and agentic systems across cloud and on-prem; advising C-level stakeholders on cost-optimised, sovereign AI strategies; or running workshops that move teams from &ldquo;we should do something with AI&rdquo; to a working PoC. The timeline below turns each station of my career into its own case study.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-5 lg:items-stretch">
                    <div className="relative aspect-[4/5] w-56 overflow-hidden rounded-3xl bg-stone-100 shadow-lg ring-1 ring-zinc-900/5 sm:w-64 lg:w-full dark:bg-zinc-800 dark:ring-white/10">
                        <Image
                            src={heroImage}
                            alt="Christian Bernhard on stage"
                            fill
                            sizes="(min-width: 1024px) 18rem, 16rem"
                            className="object-cover object-[55%_center]"
                            priority
                        />
                    </div>
                    <Link
                        href="/cv.pdf"
                        download="cv.pdf"
                        className="group inline-flex w-56 items-center justify-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800 sm:w-64 lg:w-full dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
                    >
                        Download CV
                        <ArrowDownIcon className="h-4 w-4 stroke-current" />
                    </Link>
                </div>
            </section>

            {/* KPI STRIP — pulled up tight under the intro */}
            <section
                aria-label="At a glance"
                className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4"
            >
                {heroKpis.map((kpi) => (
                    <div
                        key={kpi.label}
                        className="rounded-2xl border border-stone-200/80 bg-white/70 p-5 dark:border-zinc-700/60 dark:bg-zinc-900/40"
                    >
                        <div className="font-display text-4xl font-medium leading-none tracking-tight text-stone-900 dark:text-stone-100">
                            {kpi.value}
                        </div>
                        <div className="mt-3 text-xs leading-snug text-zinc-600 dark:text-zinc-400">
                            {kpi.label}
                        </div>
                    </div>
                ))}
            </section>

            {/* EXPERIENCE TIMELINE (interactive) */}
            <ExperienceJourney />

            {/* SKILLS — one consolidated card spanning the full width */}
            <section
                aria-label="Skills"
                className="mt-16 rounded-3xl border border-stone-200/80 bg-white/70 p-6 shadow-sm sm:p-8 lg:p-10 dark:border-zinc-700/60 dark:bg-zinc-900/40"
            >
                <div className="flex items-baseline justify-between gap-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 dark:text-stone-300">
                        Skills
                    </p>
                    <p className="hidden text-xs text-zinc-500 sm:block dark:text-zinc-400">
                        What I build, how I scale it, and how I enable teams and customers.
                    </p>
                </div>
                <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                    {skills.map((group) => (
                        <div
                            key={group.category}
                            className={group.fullWidth ? 'sm:col-span-2' : undefined}
                        >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-700 dark:text-stone-300">
                                {group.category}
                            </p>
                            <div
                                className={
                                    group.fullWidth
                                        ? 'mt-3 flex flex-wrap gap-2 sm:flex-nowrap'
                                        : 'mt-3 flex flex-wrap gap-2'
                                }
                            >
                                {group.items.map((item) => (
                                    <span
                                        key={item.name}
                                        className="inline-flex rounded-full border border-stone-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700/60 dark:bg-zinc-900/40 dark:text-zinc-300"
                                    >
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* EDUCATION · CERTIFICATIONS · LANGUAGES */}
            <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-stone-200/80 bg-white/70 p-6 dark:border-zinc-700/60 dark:bg-zinc-900/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                        Education
                    </p>
                    <ul className="mt-5 space-y-5">
                        {education.map((item) => (
                            <li key={item.degree}>
                                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                                    {item.degree}
                                </p>
                                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                                    {item.school} · {item.period}
                                </p>
                                {item.note && (
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                        {item.note}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-2xl border border-stone-200/80 bg-white/70 p-6 dark:border-zinc-700/60 dark:bg-zinc-900/40">
                    <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                            Always learning
                        </p>
                        <Link
                            href="/certificates"
                            className="text-xs font-medium text-stone-700 transition hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100"
                        >
                            View all →
                        </Link>
                    </div>
                    <ul className="mt-5 space-y-3">
                        {certifications.map((line, idx) => (
                            <li
                                key={idx}
                                className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-stone-400 dark:bg-stone-500"
                                />
                                <span>{line}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-2xl border border-stone-200/80 bg-white/70 p-6 dark:border-zinc-700/60 dark:bg-zinc-900/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                        Languages
                    </p>
                    <ul className="mt-5 space-y-3">
                        {languages.map((lang) => (
                            <li key={lang.name} className="flex items-center justify-between text-sm">
                                <span className="font-medium text-stone-900 dark:text-stone-100">
                                    {lang.name}
                                </span>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                    {lang.level}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 border-t border-stone-200/70 pt-6 dark:border-zinc-700/60">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                            Get in touch
                        </p>
                        <ul role="list" className="mt-4 space-y-3">
                            <SocialLink
                                href="https://github.com/ChristianBernhard"
                                icon={GitHubIcon}
                            >
                                ChristianBernhard
                            </SocialLink>
                            <SocialLink
                                href="https://www.linkedin.com/in/christian-bernhard-597224199/"
                                icon={LinkedInIcon}
                            >
                                Christian Bernhard
                            </SocialLink>
                            <SocialLink
                                href="mailto:christianbernhard089@gmail.com"
                                icon={MailIcon}
                            >
                                christianbernhard089@gmail.com
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </section>
        </Container>
    )
}
