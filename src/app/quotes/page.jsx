import {Section} from '@/components/Section';
import {SimpleLayout} from '@/components/SimpleLayout';


const quotes = [
    {author: "Unknown", text: "You are trying to get into the specifics without covering the basics."},
    {author: "Unknown", text: "The magic you are looking for is in the work you are avoiding."},
    {author: "Ovid", text: "Gutta cavat lapidem - Steter Tropfen höhlt den Stein"},
    {
        author: "Albert Einstein",
        text: "Die reinste Form des Wahnsinns ist es, alles beim Alten zu lassen und gleichzeitig zu hoffen, dass sich etwas ändert."
    },
    {
        author: "Usain Bolt",
        text: "I trained 4 years to run 9 seconds and people give up when they don’t see results in 2 months."
    },
    {author: "Valentin Hartig", text: "Wer schreit verliert."},
    {author: "Valentin Hartig", text: "Wer redet sät, wer zuhört erntet."},
    {
        author: "Unknown",
        text: "Alles was gesagt wird, muss wahr sein. Aber nicht alles, was wahr ist, muß auch gesagt werden."
    },
    {
        author: "Unknown",
        text: "Wir glauben nicht an die Meinungsfreiheit, wenn wir sie nicht auch den Leuten zugestehen, die wir verachten."
    },
    {author: "Unknown", text: "Dream so big, you get uncomfortable telling small minded people."},
    {author: "Unknown", text: "Early to bed, early to rise makes a man young, wealthy, and wise."},
    {author: "Unknown", text: "Fortune favers the brave."},
    {
        author: "Elon Musk", text: "Engineering five-step process:\n" +
            "\n" +
            "1) Question the requirements\n" +
            "2) Remove unnecessary process steps\n" +
            "3) Optimize\n" +
            "4) Accelerate\n" +
            "5) Automate (Not the other way around)"
    },
    {author: "Unknown", text: "Die Wut ist ein schlechter Ratgeber"},
];


function QuotesSection({children, ...props}) {
    return (
        <Section {...props}>
            <div className="quotes-container">
                <ul className="animate-scroll space-y-12">
                    {children}
                    {children} // Duplicate for a continuous scroll effect
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
    const quoteCount = quotes.length; // Assuming 'quotes' is the array of quote objects

    return (
        <SimpleLayout
            title="Quotes I Live By"
            intro={`I find inspiration in many places and these quotes reflect my philosophy and drive. Here are some that I hold close to my heart. Current count: ${quoteCount}.`}
        >
            <div className="space-y-20">
                <QuotesSection>
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
