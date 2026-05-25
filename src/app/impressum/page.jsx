import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata = {
    title: 'Impressum',
    description: 'Legal notice and contact information for christian-bernhard.com.',
    robots: { index: true, follow: true },
}

export default function Impressum() {
    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 dark:text-stone-300">
                    Legal
                </p>
                <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100">
                    Impressum
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Angaben gemäß § 5 TMG
                </p>
            </header>

            <article className="prose prose-zinc mt-12 max-w-2xl dark:prose-invert sm:mt-16">
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    Christian Bernhard
                    <br />
                    Anzingerstraße 37A
                    <br />
                    85604 Zorneding
                </p>

                <h2>Kontakt</h2>
                <p>
                    <a href="tel:+491778028796">+49 177 8028796</a>
                    <br />
                    <a href="mailto:christianbernhard089@gmail.com">
                        christianbernhard089@gmail.com
                    </a>
                </p>

                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>Christian Bernhard</p>

                <h2>Haftungsausschluss (Disclaimer)</h2>

                <h3>Haftung für Inhalte</h3>
                <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
                    diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                    TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                    die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
                    oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                    bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                    Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                    Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
                    umgehend entfernen.
                </p>

                <h3>Haftung für Links</h3>
                <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
                    wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                    keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                    Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                    überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                    erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                    jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                    Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                    entfernen.
                </p>

                <h3>Urheberrecht</h3>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                    Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                    Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                    nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite
                    nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                    Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                    trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                    entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                    derartige Inhalte umgehend entfernen.
                </p>
            </article>

            <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
                <Link
                    href="/"
                    className="font-medium text-stone-700 transition hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100"
                >
                    ← Back to home
                </Link>
            </p>
        </Container>
    )
}
