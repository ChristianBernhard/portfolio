import Link from 'next/link'
import clsx from 'clsx'

function MailIcon(props) {
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
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

export function NewsletterButton({ className, ...props }) {
    return (
        <Link
            href="https://steady.page/de/plans/5b0d552d-ce2d-4948-8eb5-2d6bdf8d7722"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                'group inline-flex w-full items-center gap-3 rounded-lg border border-stone-200/90 bg-white/80 px-4 py-3 text-sm font-medium text-stone-900 shadow-sm transition-colors hover:border-stone-300 hover:bg-stone-50 dark:border-zinc-700 dark:bg-zinc-800/40 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/70',
                className
            )}
            {...props}
        >
            <MailIcon className="h-5 w-5 shrink-0 text-stone-500 dark:text-zinc-500" />
            <div className="min-w-0 text-left">
                <div className="font-semibold text-stone-900 dark:text-zinc-100">
                    KI Newsletter
                </div>
                <div className="text-xs text-stone-600 dark:text-zinc-400">
                    Jeden Sonntag frische KI-News
                </div>
            </div>
        </Link>
    )
}
