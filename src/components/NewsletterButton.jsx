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

function SparklesIcon(props) {
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
                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0L9.937 15.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M20 3v4M22 5h-4M4 17v2M5 18H3"
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
                'group relative inline-flex items-center gap-3 justify-center rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 hover:bg-teal-50 hover:border-teal-200 hover:shadow-md hover:shadow-teal-500/10 active:bg-teal-100 active:text-zinc-900/60 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-teal-900/20 dark:hover:border-teal-700 dark:hover:text-zinc-50 dark:active:bg-teal-900/30 dark:active:text-zinc-50/70',
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <SparklesIcon className="h-4 w-4 text-teal-500 transition-colors duration-200 group-hover:text-teal-600 dark:text-teal-400 dark:group-hover:text-teal-300" />
                    <MailIcon className="h-4 w-4 text-teal-500 transition-colors duration-200 group-hover:text-teal-600 dark:text-teal-400 dark:group-hover:text-teal-300" />
                </div>
                <div className="text-left">
                    <div className="font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-teal-900 dark:text-zinc-100 dark:group-hover:text-teal-100">
                        KI Newsletter
                    </div>
                    <div className="text-xs text-zinc-600 transition-colors duration-200 group-hover:text-teal-700 dark:text-zinc-400 dark:group-hover:text-teal-300">
                        Jeden Sonntag frische KI-News
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-teal-500/5 to-teal-600/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        </Link>
    )
}
