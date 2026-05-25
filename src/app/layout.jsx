import {Cormorant_Garamond, DM_Sans} from 'next/font/google'

import {Providers} from '@/app/providers'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'

const fontSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-body',
    display: 'swap',
})

const fontDisplay = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-display',
    display: 'swap',
})

export const metadata = {
    title: {
        template: '%s - Christian Bernhard',
        default:
            'Christian Bernhard — Team Leader AI at CANCOM, founder of AInleuchtend.',
    },
    description:
        'Team Leader AI at CANCOM. Enterprise LLMs, RAG, and agentic systems. Founder of AInleuchtend. Based in Munich.',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({children}) {
    return (
        <html
            lang="en"
            className={`${fontSans.variable} ${fontDisplay.variable} h-full antialiased`}
            suppressHydrationWarning
        >
        <body className="flex h-full bg-stone-200/90 font-sans dark:bg-zinc-950">
        <Providers>
            <div className="flex w-full">
                <Layout>{children}</Layout>
            </div>
        </Providers>
        </body>
        </html>
    )
}
