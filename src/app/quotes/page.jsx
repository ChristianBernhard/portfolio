import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';


const quotes = [
    { author: "Unknown", text: "You are trying to get into the specifics without covering the basics." },
    { author: "Marcus Aurelius", text: "The magic you are looking for is in the work you are avoiding." },
    { author: "Ovid", text: "Gutta cavat lapidem - Steter Tropfen höhlt den Stein" },
    {
        author: "Albert Einstein",
        text: "Die reinste Form des Wahnsinns ist es, alles beim Alten zu lassen und gleichzeitig zu hoffen, dass sich etwas ändert."
    },
    {
        author: "Usain Bolt",
        text: "I trained 4 years to run 9 seconds and people give up when they don’t see results in 2 months."
    },
    { author: "Valentin Hartig", text: "Wer schreit verliert." },
    { author: "Valentin Hartig", text: "Wer redet sät, wer zuhört erntet." },
    {
        author: "Unknown",
        text: "Alles was gesagt wird, muss wahr sein. Aber nicht alles, was wahr ist, muß auch gesagt werden."
    },
    {
        author: "Unknown",
        text: "Wir glauben nicht an die Meinungsfreiheit, wenn wir sie nicht auch den Leuten zugestehen, die wir verachten."
    },
    { author: "Unknown", text: "Early to bed, early to rise makes a man young, wealthy, and wise." },
    { author: "Unknown", text: "Fortune favors the brave." },
    {
        author: "Elon Musk", text: "Engineering five-step process:\n" +
            "\n" +
            "1) Question the requirements\n" +
            "2) Remove unnecessary process steps\n" +
            "3) Optimize\n" +
            "4) Accelerate\n" +
            "5) Automate (Not the other way around)"
    },
    { author: "Jeff Bezos", text: "There are one-door and two-door decisions. One-door decisions are hard to reverse. Two-door decisions just need to be made, and you have to live with the chosen option. Most business decisions are two-door decisions and should be made by a single person for speed." },
    { author: "George Hotz", text: "To develop good software, two of the most important factors are tests and a proper CI/CD pipeline, enabling rapid code changes." },
    {author: "Eliud Kipchoge", text: "The first rule of self-discipline: Inject yourself with vitamin N—learn to say `No`."},
    {author: "Khabib Nurmagomedov", text: "When people become successful, they say, `It's because of my mindset, I work hard, I'm smart` But what about the millions of others who work just as hard but don’t have your position? This is a test from God. He gave you this to see how you will handle it."},
    {author: "Anirudh Ramesh", text: "You're only a few months away from understanding the bleeding edge of research."},
    {author: "Sam Altman", text: "Tip for early stage startups: No matter how great your idea is, no one cares. Everyone is to busy. You can rely on that to protect your idea."},
    {author: "Unknown", text: "When selling: Change the conversation from price to value."},
    {author: "Jeff Bezos", text: "Stress primarly comes from not taking action, over something that you can have some control over."},
    {author: "Unknown", text: "Decisions beat delays. You can fix a wrong call faster than no call."},
    {author: "Unknown", text: "Calm is contagious. Your team mirrors your state. Stay steady."},
    {author: "Unknown", text: "Protect thinking time. Urgency kills strategy if you let it."},


];


function QuotesSection({ children, ...props }) {
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


function Quote({ author, children }) {
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
