import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'AP English Tutoring Brooklyn NY | Compassionate Test Prep',
    description:
        'AP English Language and Literature tutoring in Brooklyn, NY. Expert coaching for AP Lang and AP Lit exams. Build confidence in essay writing and analysis.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/ap-english' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AP English Tutoring',
    provider: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' } },
    description: 'AP English Language and Literature prep tutoring in Brooklyn, NY.',
    areaServed: 'Brooklyn, NY',
};

export default function APEnglishPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">Brooklyn, NY · Online</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">AP English Tutoring</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Master AP Language & Literature with expert coaching on rhetorical analysis, argument essays, and literary criticism.
                        </p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="ap-cta-hero">Contact for a Free AP English Session</Link>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="card">
                                <h2 className="font-heading text-2xl font-bold text-primary mb-4">AP Language & Composition</h2>
                                <ul className="space-y-3 text-muted text-sm">
                                    {['Rhetorical analysis essays', 'Argumentative writing', 'Synthesis essays using multiple sources', 'Close reading strategies', 'AP exam format and timing', 'Score a 4 or 5 on the AP exam'].map((item) => (
                                        <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5">✓</span>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card">
                                <h2 className="font-heading text-2xl font-bold text-primary mb-4">AP Literature & Composition</h2>
                                <ul className="space-y-3 text-muted text-sm">
                                    {['Literary analysis essays', 'Poetry interpretation', 'Prose fiction analysis', 'Multiple choice strategies', 'Free-response essay writing', 'Passage-based question techniques'].map((item) => (
                                        <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5">✓</span>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Score a 4 or 5 on AP English</h2>
                        <p className="text-white/80 mb-8">Expert coaching that builds real writing skills — not just test tricks.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="ap-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
