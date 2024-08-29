// Import necessary components and any other utilities you might need
import {Card} from '@/components/Card';
import {Section} from '@/components/Section';
import {SimpleLayout} from '@/components/SimpleLayout';
import {getAllSpeakings} from "@/lib/speakings";
import {formatDate} from '@/lib/formatDate'

function SpeakingSection({title, children}) {
    return (
        <Section title={title}>
            <div className="space-y-16">{children}</div>
        </Section>
    );
}

function Appearance({title, description, language, date, location, cta, href}) {
    return (
        <Card as="article">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Eyebrow decorate>{language} {date} - {location}</Card.Eyebrow>
            <Card.Description>{description}</Card.Description>
            <Card.Cta href={href}>{cta}</Card.Cta>
        </Card>
    );
}

export const metadata = {
    title: 'Speaking',
    description: 'I’ve spoken at events all around the world and been interviewed for many podcasts.',
};

export default async function Speaking() {
    let speakings = await getAllSpeakings()
    const now = new Date();

    return (
        <SimpleLayout
            title="An overview of the venues where I lead discussions and workshops on AI."
            intro="The audiences and events vary, ranging from companies and industry experts to public events designed for beginners in the field. Check out the dates and details of upcoming and past events to see where I'll be sharing insights next."
        >
            <div className="space-y-20">
                <SpeakingSection title="Upcoming">
                    {speakings
                        .filter(speaking => new Date(speaking.date) >= now)
                        .sort((a, z) => +new Date(a.date) - +new Date(z.date)) // Ascending sort for upcoming
                        .map((speaking) => (
                            <Appearance
                                key={speaking.slug}
                                href={`/speaking/${speaking.slug}`}
                                title={speaking.title}
                                description={speaking.description}
                                language={speaking.language}
                                date={formatDate(speaking.date)}
                                location={speaking.location}
                                cta="Read more"
                            />
                        ))}
                </SpeakingSection>
                
                <SpeakingSection title="Past">
                    {speakings
                        .filter(speaking => new Date(speaking.date) < now)
                        .sort((a, z) => +new Date(z.date) - +new Date(a.date)) // Descending sort for past
                        .map((speaking) => (
                            <Appearance
                                key={speaking.slug}
                                href={`/speaking/${speaking.slug}`}
                                title={speaking.title}
                                description={speaking.description}
                                language={speaking.language}
                                date={formatDate(speaking.date)}
                                location={speaking.location}
                                cta="Read more"
                            />
                        ))}
                </SpeakingSection>
            </div>
        </SimpleLayout>
    );
}

/*
export default function backup() {
  return (
    <SimpleLayout
      title="I’ve spoken at events all around the world and been interviewed for many podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="space-y-20">
        <SpeakingSection title="Upcoming">
          <Appearance
            href="/speaking/in-space-no-one-can-watch-you-stream"
            title="Jenseits von Schlagwörtern - Wie funktioniert Künstliche Intelligenz"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          <Appearance
            href="/speaking/lessons-learned-from-our-first-product-recall"
            title="Lessons learned from our first product recall"
            description="They say that if you’re not embarrassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
            event="Business of Startups 2020"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Past">
          <Appearance
            href="/speaking/using-design-as-a-competitive-advantage"
            title="Using design as a competitive advantage"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="/speaking/bootstrapping-an-aerospace-company-to-17m-arr"
            title="Bootstrapping an aerospace company to $17M ARR"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="/speaking/programming-your-company-operating-system"
            title="Programming your company operating system"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </SpeakingSection>
        {Public/Podcast}
      </div>
    </SimpleLayout>
  );
}
*/