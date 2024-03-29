import {Providers} from '@/app/providers'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
    title: {
        template: '%s - Christian Bernhard',
        default:
            'Christian Bernhard - Head of Software Development, AI Engineer and Founder.',
    },
    description:
        'I’m Christian Bernhard. I live in Munich, working on Artifical Intelligence.',
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
