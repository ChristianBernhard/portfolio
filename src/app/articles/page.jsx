import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
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

function TechnicalArticleCard({ article }) {
  const thumbnailSrc = articleThumbnails[article.slug] || '/thumbnail.png'
  
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-teal-400"
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
          <div className="mb-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <time dateTime={article.date} className="flex items-center">
              <span className="mr-2 h-3 w-0.5 rounded-full bg-teal-500 dark:bg-teal-400" />
              {formatDate(article.date)}
            </time>
            <span className="text-sm">
              {article.language === '🏴󠁧󠁢󠁥󠁮󠁧󠁿' ? '🏴󠁧󠁢󠁥󠁮󠁧󠁿' : '🇩🇪'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold leading-snug tracking-tight text-zinc-800 transition-colors group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400">
            {article.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-zinc-600 line-clamp-2 dark:text-zinc-400">
            {article.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 transition-colors group-hover:text-teal-700 dark:text-teal-400 dark:group-hover:text-teal-300">
          Read article
          <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/5 transition-all group-hover:ring-teal-500/50 dark:ring-white/5 dark:group-hover:ring-teal-400/50" />
    </Link>
  )
}

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.language} {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

function SectionDivider({ title, subtitle, icon }) {
  return (
    <div className="relative my-16 overflow-visible">
      {/* Gradient line extending across the full width */}
      <div className="absolute left-1/2 top-1/2 w-screen -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent dark:via-teal-400/20" />
      </div>
      
      {/* Content */}
      <div className="relative flex justify-center">
        <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-8 py-4 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:border-zinc-700 dark:bg-zinc-800 dark:ring-white/10">
          <span className="text-4xl" role="img" aria-label={title}>
            {icon}
          </span>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              {title}
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          </div>
        </div>
      </div>
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
          This page features two distinct collections: <span className="font-semibold text-zinc-800 dark:text-zinc-200">media mentions and press coverage</span> about my work in AI education and consulting, 
          followed by <span className="font-semibold text-zinc-800 dark:text-zinc-200">technical articles I've authored</span> on machine learning, LLMs, and software engineering.
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        {/* Articles About Me Section */}
        {externalArticles.length > 0 && (
          <>
            <SectionDivider
              icon="🎯"
              title="Articles About Me"
              subtitle="Media mentions, interviews, and features"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {externalArticles.map((article) => (
                <ExternalArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}

        {/* Articles From Me Section */}
        <div className="mt-24">
          <SectionDivider
            icon="✍️"
            title="Articles From Me"
            subtitle="Technical articles and tutorials"
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
