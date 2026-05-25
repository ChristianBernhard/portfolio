'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { experience } from '@/lib/experience'

// Showcase screenshots in /public are already export-quality; serve them
// directly and preserve their native aspect ratio (no 16:9 crop + recompress).
const SHOWCASE_IMAGE_SIZES = '(min-width: 1280px) 900px, (min-width: 768px) 80vw, 100vw'

function showcaseAspectStyle(width, height) {
    if (width && height) return { aspectRatio: `${width} / ${height}` }
    return { aspectRatio: '16 / 9' }
}

function ArrowUpRightIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M5.25 5.25h5.5v5.5M10.5 5.5 5.25 10.75"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
            />
        </svg>
    )
}

function ChevronLeftIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M10 12 6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChevronRightIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChapterNavButtons({ onPrev, onNext, prevLabel, nextLabel }) {
    return (
        <div className="flex flex-none items-center gap-1.5">
            <button
                type="button"
                onClick={onPrev}
                disabled={!onPrev}
                aria-label={prevLabel ? `Previous chapter: ${prevLabel}` : 'Previous chapter'}
                className={clsx(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full border transition',
                    onPrev
                        ? 'border-stone-200/90 bg-white text-stone-700 shadow-sm hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900 dark:border-zinc-600/70 dark:bg-zinc-800/80 dark:text-stone-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800'
                        : 'cursor-not-allowed border-stone-200/50 bg-stone-50/50 text-stone-300 dark:border-zinc-800/60 dark:bg-zinc-900/30 dark:text-zinc-600'
                )}
            >
                <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={onNext}
                disabled={!onNext}
                aria-label={nextLabel ? `Next chapter: ${nextLabel}` : 'Next chapter'}
                className={clsx(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full border transition',
                    onNext
                        ? 'border-stone-200/90 bg-white text-stone-700 shadow-sm hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900 dark:border-zinc-600/70 dark:bg-zinc-800/80 dark:text-stone-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800'
                        : 'cursor-not-allowed border-stone-200/50 bg-stone-50/50 text-stone-300 dark:border-zinc-800/60 dark:bg-zinc-900/30 dark:text-zinc-600'
                )}
            >
                <ChevronRightIcon
                    className={clsx(
                        'h-4 w-4',
                        onNext &&
                            'motion-safe:animate-cta-arrow-nudge motion-reduce:animate-none'
                    )}
                />
            </button>
        </div>
    )
}

function PlayIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M5.25 3.5 12 8l-6.75 4.5V3.5Z" />
        </svg>
    )
}

function MapPinIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M8 14s4.5-4.286 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 9.714 8 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinejoin="round"
            />
            <circle cx="8" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.25" />
        </svg>
    )
}

function CalendarIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
            <path d="M2.5 6.5h11M5.5 2.5v2M10.5 2.5v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
    )
}

function CareerRail({ roles, activeId, onSelect }) {
    return (
        <nav
            aria-label="Career timeline"
            className="lg:sticky lg:top-28"
        >
            <p className="hidden lg:block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Career
            </p>

            {/* Mobile: horizontal chip rail */}
            <ul
                role="list"
                className="lg:hidden -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {roles.map((role) => {
                    const isActive = role.id === activeId
                    return (
                        <li key={role.id} className="shrink-0">
                            <button
                                type="button"
                                onClick={() => onSelect(role.id)}
                                className={clsx(
                                    'flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition',
                                    isActive
                                        ? 'border-stone-900/20 bg-white text-stone-900 shadow-sm dark:border-white/20 dark:bg-zinc-800 dark:text-stone-100'
                                        : 'border-stone-200/80 bg-white/60 text-zinc-600 hover:border-stone-300 hover:text-stone-800 dark:border-zinc-700/60 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:text-stone-200'
                                )}
                            >
                                <span
                                    className={clsx(
                                        'flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-white ring-1',
                                        isActive ? 'ring-stone-900/20 dark:ring-white/20' : 'ring-zinc-900/5 dark:ring-white/10'
                                    )}
                                >
                                    <Image src={role.logo} alt="" className="h-4 w-4 rounded-full object-cover" unoptimized />
                                </span>
                                {role.company}
                            </button>
                        </li>
                    )
                })}
            </ul>

            {/* Desktop: vertical timeline */}
            <ol role="list" className="mt-6 hidden lg:block">
                <div className="relative">
                    <span
                        aria-hidden="true"
                        className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-stone-300/0 via-stone-300/80 to-stone-300/0 dark:via-zinc-700/80"
                    />
                    {roles.map((role) => {
                        const isActive = role.id === activeId
                        return (
                            <li key={role.id} className="relative">
                                <button
                                    type="button"
                                    onClick={() => onSelect(role.id)}
                                    className={clsx(
                                        'group flex w-full items-center gap-2.5 rounded-xl px-1.5 py-2 text-left transition',
                                        isActive
                                            ? 'bg-stone-100/80 dark:bg-zinc-800/60'
                                            : 'hover:bg-stone-100/60 dark:hover:bg-zinc-800/40'
                                    )}
                                    aria-current={isActive ? 'true' : undefined}
                                >
                                    <span
                                        className={clsx(
                                            'relative z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white ring-1 transition',
                                            isActive
                                                ? 'ring-stone-900/20 shadow-sm dark:ring-white/25'
                                                : 'ring-zinc-900/5 dark:ring-white/10 dark:bg-zinc-800'
                                        )}
                                    >
                                        <Image
                                            src={role.logo}
                                            alt=""
                                            className="h-6 w-6 rounded-full object-cover"
                                            unoptimized
                                        />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span
                                            className={clsx(
                                                'block truncate text-sm font-semibold transition',
                                                isActive
                                                    ? 'text-stone-900 dark:text-stone-100'
                                                    : 'text-zinc-700 dark:text-zinc-300 group-hover:text-stone-800 dark:group-hover:text-stone-200'
                                            )}
                                        >
                                            {role.company}
                                        </span>
                                        <span className="block truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                                            {role.title}
                                        </span>
                                    </span>
                                </button>
                            </li>
                        )
                    })}
                </div>
            </ol>
        </nav>
    )
}

function BrowserPreview({ url, href, title, subtitle, imageSrc, imageWidth, imageHeight }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:border-stone-300 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:hover:border-zinc-600"
        >
            <div className="flex items-center gap-2 border-b border-stone-200/80 bg-stone-50/80 px-4 py-2.5 dark:border-zinc-700/60 dark:bg-zinc-800/60">
                <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </span>
                <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-zinc-500 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-white/10">
                    {url}
                </span>
            </div>
            <div
                className="relative w-full overflow-hidden bg-stone-100 dark:bg-zinc-800/80"
                style={showcaseAspectStyle(imageWidth, imageHeight)}
            >
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        unoptimized
                        sizes={SHOWCASE_IMAGE_SIZES}
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-100 via-white to-stone-50 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800">
                        <div className="px-8 text-center">
                            <p className="font-display text-2xl font-medium tracking-tight text-stone-900 sm:text-3xl dark:text-stone-100">
                                {title}
                            </p>
                            {subtitle && (
                                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex items-center justify-between border-t border-stone-200/80 px-4 py-3 dark:border-zinc-700/60">
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-stone-900 dark:text-stone-100">
                        {title}
                    </p>
                    {subtitle && (
                        <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                            {subtitle}
                        </p>
                    )}
                </div>
                <span className="ml-3 inline-flex flex-none items-center gap-1 rounded-full bg-stone-900/5 px-3 py-1 text-xs font-medium text-stone-700 transition group-hover:bg-stone-900 group-hover:text-white dark:bg-white/10 dark:text-stone-200 dark:group-hover:bg-white dark:group-hover:text-stone-900">
                    Live
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </span>
            </div>
        </Link>
    )
}

function ImageMedia({ src, width = 1600, height = 900, caption }) {
    return (
        <figure>
            <div
                className="relative w-full overflow-hidden rounded-2xl bg-stone-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
                style={showcaseAspectStyle(width, height)}
            >
                <Image
                    src={src}
                    alt={caption || ''}
                    fill
                    unoptimized
                    sizes={SHOWCASE_IMAGE_SIZES}
                    className="object-contain"
                />
            </div>
            {caption && (
                <figcaption className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}

function VideoMedia({ src, title }) {
    return (
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-stone-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
            <iframe
                src={src}
                title={title}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full border-0"
            />
        </div>
    )
}

function VideoEmbed({ item }) {
    const isNative = item.provider === 'native' || item.src.endsWith('.mp4')

    if (isNative) {
        return (
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-stone-900 ring-1 ring-zinc-900/5 dark:ring-white/10">
                <video
                    src={item.src}
                    title={item.title}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full"
                />
            </div>
        )
    }

    return (
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-stone-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
            <iframe
                src={item.src}
                title={item.title}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full border-0"
            />
        </div>
    )
}

function VideoGrid({ items, eyebrow, caption }) {
    if (!items?.length) return null
    return (
        <div>
            {eyebrow && (
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-stone-700 dark:text-stone-300">
                    {eyebrow}
                </p>
            )}
            <div className="space-y-8">
                {items.map((item) => (
                    <div key={item.src}>
                        {item.label && (
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-700 dark:text-stone-300">
                                {item.label}
                            </p>
                        )}
                        {item.title && (
                            <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {item.title}
                            </p>
                        )}
                        <VideoEmbed item={item} />
                    </div>
                ))}
            </div>
            {caption && (
                <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                    {caption}
                </p>
            )}
        </div>
    )
}

function IframeMedia({ src, href, url, title }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/60">
            <div className="flex items-center gap-2 border-b border-stone-200/80 bg-stone-50/80 px-4 py-2.5 dark:border-zinc-700/60 dark:bg-zinc-800/60">
                <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </span>
                <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-zinc-500 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-white/10">
                    {url || src}
                </span>
                {href && (
                    <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 rounded-md bg-stone-900/5 px-2.5 py-1 text-[11px] font-medium text-stone-700 transition hover:bg-stone-900 hover:text-white dark:bg-white/10 dark:text-stone-200 dark:hover:bg-white dark:hover:text-stone-900"
                    >
                        Open
                        <ArrowUpRightIcon className="h-3 w-3" />
                    </Link>
                )}
            </div>
            <div className="aspect-[16/10] w-full bg-stone-100 dark:bg-zinc-800/80">
                <iframe
                    src={src}
                    title={title}
                    allow="microphone; camera; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    className="h-full w-full border-0"
                />
            </div>
        </div>
    )
}

function ArticleGrid({ items, eyebrow, caption }) {
    if (!items?.length) return null
    return (
        <div>
            {eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-700 dark:text-stone-300">
                    {eyebrow}
                </p>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {items.map((item) => {
                    const isExternal = item.href.startsWith('http')
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:border-stone-300 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:hover:border-zinc-600"
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-stone-100 dark:bg-zinc-800">
                                <Image
                                    src={item.image.src}
                                    alt={item.title}
                                    fill
                                    quality={92}
                                    sizes="(min-width: 1024px) 320px, 100vw"
                                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15"
                                />
                                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-stone-900 shadow-md transition group-hover:scale-105">
                                    <PlayIcon className="h-3.5 w-3.5 translate-x-[1px]" />
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col gap-2 px-4 py-3.5">
                                {item.label && (
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">
                                        {item.label}
                                    </span>
                                )}
                                <p className="text-sm font-semibold leading-snug text-stone-900 transition group-hover:text-stone-700 dark:text-stone-100 dark:group-hover:text-stone-200">
                                    {item.title}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            {caption && (
                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                    {caption}
                </p>
            )}
        </div>
    )
}

function MediaPanel({ media }) {
    if (!media) return null
    if (media.kind === 'browser') return <BrowserPreview {...media} />
    if (media.kind === 'video') return <VideoMedia {...media} />
    if (media.kind === 'videoGrid') return <VideoGrid {...media} />
    if (media.kind === 'iframe') return <IframeMedia {...media} />
    if (media.kind === 'articleGrid') return <ArticleGrid {...media} />
    return <ImageMedia {...media} />
}

function BulletCard({ bullet, index }) {
    return (
        <div className="group relative rounded-2xl border border-stone-200/70 bg-stone-50/60 p-6 transition hover:border-stone-300 hover:bg-stone-50 dark:border-zinc-700/60 dark:bg-zinc-800/30 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50">
            <span
                aria-hidden="true"
                className="absolute right-5 top-4 font-display text-xs font-medium tabular-nums text-stone-400/80 dark:text-stone-500/80"
            >
                {String(index + 1).padStart(2, '0')}
            </span>
            <p className="pr-8 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                {bullet}
            </p>
        </div>
    )
}

function LinkPills({ links }) {
    if (!links?.length) return null
    return (
        <div className="flex flex-wrap gap-2">
            {links.map((link) => {
                const isExternal = link.href.startsWith('http')
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 rounded-full border border-stone-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-stone-800 transition hover:border-stone-400 hover:bg-stone-50 dark:border-zinc-700/60 dark:bg-zinc-900/40 dark:text-stone-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/60"
                    >
                        {link.label}
                    </Link>
                )
            })}
        </div>
    )
}

/** Renders the inner body of either a chapter or a single panel:
 *  optional title + body paragraph + 2-col bullet cards + link pills + media.
 */
function ContentBody({ content, showTitle = true, chapterNav }) {
    return (
        <>
            {(showTitle && content.title) || content.body ? (
                <>
                    {showTitle && content.title && (
                        <div className="flex items-start justify-between gap-4">
                            <h4 className="max-w-3xl min-w-0 flex-1 font-display text-2xl font-medium tracking-tight text-stone-900 sm:text-[1.75rem] dark:text-stone-100">
                                {content.title}
                            </h4>
                            {chapterNav && <ChapterNavButtons {...chapterNav} />}
                        </div>
                    )}
                    {content.body && (
                        <p
                            className={clsx(
                                'max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400',
                                showTitle && content.title ? 'mt-4' : 'mt-0'
                            )}
                        >
                            {content.body}
                        </p>
                    )}
                </>
            ) : null}

            {content.bullets?.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    {content.bullets.map((bullet, idx) => (
                        <BulletCard key={idx} bullet={bullet} index={idx} />
                    ))}
                </div>
            )}

            {content.links?.length > 0 && (
                <div className="mt-6">
                    <LinkPills links={content.links} />
                </div>
            )}

            {content.media && (
                <div className="mt-8">
                    <MediaPanel media={content.media} />
                </div>
            )}
        </>
    )
}

function ChapterTabBar({ chapters, activeId, onSelect }) {
    return (
        <nav
            aria-label="Chapters"
            className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
            <ol className="flex min-w-max gap-2">
                {chapters.map((chapter, idx) => {
                    const isActive = chapter.id === activeId
                    return (
                        <li key={chapter.id}>
                            <button
                                type="button"
                                onClick={() => onSelect(chapter.id)}
                                aria-pressed={isActive}
                                className={clsx(
                                    'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition',
                                    isActive
                                        ? 'border-stone-900 bg-stone-900 text-white shadow-sm dark:border-white dark:bg-white dark:text-stone-900'
                                        : 'border-stone-200/80 bg-white/70 text-zinc-700 hover:border-stone-400 hover:bg-stone-50 hover:text-stone-900 dark:border-zinc-700/60 dark:bg-zinc-900/40 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/60 dark:hover:text-stone-100'
                                )}
                            >
                                <span
                                    className={clsx(
                                        'font-display text-[10px] font-medium tabular-nums tracking-normal',
                                        isActive
                                            ? 'text-white/70 dark:text-stone-900/60'
                                            : 'text-stone-400 dark:text-stone-500'
                                    )}
                                >
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                {chapter.label}
                            </button>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

function Walkthrough({ role }) {
    const [activeId, setActiveId] = useState(role.tabs[0].id)
    const chapter =
        role.tabs.find((c) => c.id === activeId) ?? role.tabs[0]
    const activeIndex = role.tabs.findIndex((c) => c.id === chapter.id)
    const prevChapter = activeIndex > 0 ? role.tabs[activeIndex - 1] : null
    const nextChapter =
        activeIndex < role.tabs.length - 1 ? role.tabs[activeIndex + 1] : null

    const chapterNav = {
        onPrev: prevChapter ? () => setActiveId(prevChapter.id) : undefined,
        onNext: nextChapter ? () => setActiveId(nextChapter.id) : undefined,
        prevLabel: prevChapter?.label,
        nextLabel: nextChapter?.label,
    }

    return (
        <div className="mt-5">
            <ChapterTabBar
                chapters={role.tabs}
                activeId={chapter.id}
                onSelect={setActiveId}
            />
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${role.id}-${chapter.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8"
                >
                    <ContentBody
                        content={chapter}
                        showTitle
                        chapterNav={chapterNav}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

function SinglePanel({ content }) {
    return (
        <div className="mt-7">
            <ContentBody content={content} showTitle={Boolean(content.title)} />
        </div>
    )
}

export function ExperienceJourney() {
    const [activeRoleId, setActiveRoleId] = useState(experience[0].id)
    const role = useMemo(
        () => experience.find((r) => r.id === activeRoleId) ?? experience[0],
        [activeRoleId]
    )

    const isWalkthrough = role.tabs.length > 1

    return (
        <section aria-label="Experience" className="mt-14 sm:mt-20">
            <div className="mb-6 flex items-baseline justify-between gap-6 border-b border-stone-200/70 pb-3 dark:border-zinc-700/60">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 dark:text-stone-300">
                    Experience
                </p>
                <p className="hidden text-xs text-zinc-500 sm:block dark:text-zinc-400">
                    Pick a station to open the full case study.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8 xl:gap-10">
                <div>
                    <CareerRail
                        roles={experience}
                        activeId={activeRoleId}
                        onSelect={setActiveRoleId}
                    />
                </div>

                <AnimatePresence mode="wait">
                    <motion.article
                        key={role.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-3xl border border-stone-200/80 bg-white/70 p-5 shadow-sm sm:p-6 lg:p-8 dark:border-zinc-700/60 dark:bg-zinc-900/40"
                    >
                        <header>
                            <div className="flex flex-wrap items-start gap-4">
                                <div className="flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
                                    <Image src={role.logo} alt="" className="h-10 w-10 rounded-xl object-cover" unoptimized />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 dark:text-stone-300">
                                        {role.company}
                                    </p>
                                    <h3 className="mt-1 font-display text-2xl font-medium tracking-tight text-stone-900 sm:text-3xl dark:text-stone-100">
                                        {role.title}
                                    </h3>
                                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                                        <span className="inline-flex items-center gap-1.5">
                                            <CalendarIcon className="h-3.5 w-3.5" />
                                            {role.period}
                                        </span>
                                        {role.location && (
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPinIcon className="h-3.5 w-3.5" />
                                                {role.location}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {role.headline && !isWalkthrough && (
                                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                                    {role.headline}
                                </p>
                            )}
                            {role.summary && !isWalkthrough && (
                                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {role.summary}
                                </p>
                            )}
                        </header>

                        {isWalkthrough ? (
                            <Walkthrough role={role} />
                        ) : (
                            <SinglePanel content={role.tabs[0]} />
                        )}
                    </motion.article>
                </AnimatePresence>
            </div>
        </section>
    )
}
