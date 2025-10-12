import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ExternalArticleCard } from '@/components/ExternalArticleCard'
import { getAllArticles } from '@/lib/articles'
import { getAllExternalArticles } from '@/lib/externalArticles'
import { formatDate } from '@/lib/formatDate'
import { Container } from '@/components/Container'

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
          <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="flex max-w-3xl flex-col space-y-16">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
