import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import clsx from 'clsx'

function ExternalLinkIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z"
        fill="currentColor"
      />
      <path
        d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15H5V7H8C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ExternalArticleCard({ article }) {
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-teal-400"
    >
      {/* Thumbnail/Hero Image - reduced height */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10" />
        
        {/* Source badge */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-100">
            {article.source}
          </span>
        </div>
        
        {/* Type badge */}
        <div className="absolute right-3 top-3">
          <span className={clsx(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm",
            article.type === 'news' && "bg-blue-500/90 text-white",
            article.type === 'social' && "bg-pink-500/90 text-white",
            article.type === 'podcast' && "bg-purple-500/90 text-white",
            article.type === 'interview' && "bg-orange-500/90 text-white"
          )}>
            {article.type === 'news' && '📰 News'}
            {article.type === 'social' && '📱 Social'}
            {article.type === 'podcast' && '🎙️ Podcast'}
            {article.type === 'interview' && '🎤 Interview'}
          </span>
        </div>
      </div>

      {/* Content - more compact */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Date */}
          <time
            dateTime={article.date}
            className="mb-3 flex items-center text-xs text-zinc-500 dark:text-zinc-400"
          >
            <span className="mr-2 h-3 w-0.5 rounded-full bg-teal-500 dark:bg-teal-400" />
            {formatDate(article.date)}
          </time>

          {/* Title */}
          <h3 className="text-base font-semibold leading-snug tracking-tight text-zinc-800 transition-colors group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400">
            {article.title}
          </h3>
        </div>

        {/* CTA */}
        <div className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 transition-colors group-hover:text-teal-700 dark:text-teal-400 dark:group-hover:text-teal-300">
          Read on {article.source}
          <ExternalLinkIcon className="ml-1.5 h-4 w-4" />
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/5 transition-all group-hover:ring-teal-500/50 dark:ring-white/5 dark:group-hover:ring-teal-400/50" />
    </Link>
  )
}
