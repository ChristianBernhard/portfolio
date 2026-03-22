import {Providers} from '@/app/providers'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
    title: {
        template: '%s - Christian Bernhard',
        default:
            'Christian Bernhard — Team Lead AI at CANCOM, founder of AInleuchtend.',
    },
    description:
        'Team Lead AI at CANCOM. Enterprise LLMs, RAG, and agentic systems. Founder of AInleuchtend. Based in Munich.',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
            <div className="flex w-full">
                <Layout>{children}</Layout>
            </div>
        </Providers>
        </body>
        </html>
    )
}
