import {Section} from '@/components/Section';
import {SimpleLayout} from '@/components/SimpleLayout';


const quotes = [
    {
        author: "Steve Jobs",
        text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
    },
    {author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance, you must keep moving."},
    {
        author: "Maya Angelou",
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
];

function QuotesSection({title, children, ...props}) {
    return (
        <Section {...props}>
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">{title}</h2>
            {/* Add a fixed height and change overflow-y to auto if you want a scrollbar */}
            <div className="relative overflow-hidden" style={{height: '450px'}}>
                <ul className="absolute animate-scroll space-y-12">
                    {children}
                    {/* Duplicate the children to enable the continuous effect */}
                    {children}
                </ul>
            </div>
        </Section>
    );
}


function Quote({author, children}) {
    return (
        <li className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <blockquote
                className="p-8 italic text-lg leading-relaxed text-gray-600 dark:text-gray-300 border-l-4 border-teal-500">
                <p>“{children}”</p>
                <footer className="mt-4 text-gray-500 dark:text-gray-400 text-right">{author}</footer>
            </blockquote>
        </li>
    );
}


export const metadata = {
    title: 'Quotes I Live By',
    description: 'A collection of quotes that resonate with me.',
};

export default function Quotes() {
    return (
        <SimpleLayout
            title="Quotes I Live By"
            intro="I find inspiration in many places and these quotes reflect my philosophy and drive. Here are some that I hold close to my heart."
        >
            <div className="space-y-20">
                <QuotesSection title="Inspiration">
                    {quotes.map((quote, index) => (
                        <Quote key={index} author={quote.author}>
                            {quote.text}
                        </Quote>
                    ))}
                </QuotesSection>
            </div>
        </SimpleLayout>
    );
}