import { ExternalArticleCard } from '@/components/ExternalArticleCard'
import { getAllArticles } from '@/lib/articles'
import { getAllExternalArticles } from '@/lib/externalArticles'
import { formatDate } from '@/lib/formatDate'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Map article slugs to their thumbnails
const articleThumbnails = {
  'context-engineering': '/context_engineering.png',
  'rag-embedding-finetuning': '/boost_rag.png',
  'llama-from-scratch': '/llama2_scratch.png',
  'linkedin-ai-video': '/memory_requirements_llms.png',
}

function languageLabel(language) {
  if (language === '🏴󠁧󠁢󠁥󠁮󠁧󠁿') return 'English'
  return 'German'
}

function TechnicalArticleCard({ article }) {
  const thumbnailSrc = articleThumbnails[article.slug] || '/thumbnail.png'
  
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
    >
      {/* Thumbnail Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={thumbnailSrc}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Date and Language */}
          <div className="mb-3 flex items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <time dateTime={article.date}>
              {formatDate(article.date)}
            </time>
            <span className="shrink-0 rounded border border-zinc-200 px-2 py-0.5 font-medium text-zinc-600 dark:border-zinc-600 dark:text-zinc-400">
              {languageLabel(article.language)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold leading-snug tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-white">
            {article.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-zinc-600 line-clamp-2 dark:text-zinc-400">
            {article.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200">
          Read article
          <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/5 dark:ring-white/5" />
    </Link>
  )
}

function SectionHeading({ title, subtitle, withTopBorder = true }) {
  return (
    <div
      className={
        withTopBorder
          ? 'border-t border-zinc-200 pt-12 dark:border-zinc-700/60'
          : 'pt-2'
      }
    >
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
        {subtitle}
      </p>
    </div>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'Technical articles, publications, and media features showcasing my work in AI and software engineering.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()
  let externalArticles = getAllExternalArticles()

  return (
    <Container className="mt-16 sm:mt-32">
      {/* Page Header */}
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Media & Articles
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Media mentions and press coverage appear first, followed by technical articles on machine learning, LLMs, and software engineering.
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        {/* Articles About Me Section */}
        {externalArticles.length > 0 && (
          <>
            <SectionHeading
              title="Coverage and mentions"
              subtitle="Interviews, news, podcasts, and other external features."
              withTopBorder={false}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {externalArticles.map((article) => (
                <ExternalArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}

        {/* Articles From Me Section */}
        <div className="mt-20">
          <SectionHeading
            title="Technical writing"
            subtitle="Long-form notes and tutorials from my own pen."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <TechnicalArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
