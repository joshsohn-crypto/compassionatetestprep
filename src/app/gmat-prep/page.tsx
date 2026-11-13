import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'GMAT Prep Tutoring Brooklyn NY | Compassionate Test Prep',
    description:
        'GMAT prep tutoring in Brooklyn, NY. Expert coaching on Quantitative, Verbal, Integrated Reasoning, and Analytical Writing. Contact for a free intro session.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/gmat-prep' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GMAT Prep Tutoring',
    provider: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' } },
    description: 'Expert GMAT prep tutoring for business school applicants.',
    areaServed: 'Brooklyn, NY',
};

export default function GMATPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">Brooklyn, NY · Online Worldwide</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">GMAT Prep Tutoring</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Strategic, personalized GMAT coaching to get you into your target business school. All GMAT sections, from quant to verbal.
                        </p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="gmat-cta-hero">Contact for a Free GMAT Session</Link>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-12">Complete GMAT Coverage</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🔢', title: 'Quantitative Reasoning', desc: 'Problem solving and data sufficiency — algebra, geometry, and arithmetic.' },
                                { icon: '📖', title: 'Verbal Reasoning', desc: 'Critical reasoning, reading comprehension, and sentence correction.' },
                                { icon: '📊', title: 'Integrated Reasoning', desc: 'Multi-source reasoning, table analysis, and two-part analysis.' },
                                { icon: '✍️', title: 'Analytical Writing', desc: 'Argument analysis essay — structure, critique, and writing under pressure.' },
                            ].map((item) => (
                                <div key={item.title} className="card text-center">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 bg-surface">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="section-heading mb-4">Why Choose Josh for GMAT Prep?</h2>
                        <p className="text-muted leading-relaxed mb-6">
                            With 25+ years of test prep experience and a deeply data-driven approach, Josh helps business school applicants understand <em>why</em> they miss questions — not just what the right answer is. This leads to durable score gains that hold up on test day.
                        </p>
                        <Link href="/contact" className="btn-primary" id="gmat-whyjosh-cta">Contact for a Free Session</Link>
                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Start Your Business School Journey</h2>
                        <p className="text-white/80 mb-8">A higher GMAT score opens doors to top MBA programs. Let&apos;s build your plan.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="gmat-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
