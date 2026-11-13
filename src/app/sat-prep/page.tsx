import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'SAT Prep Tutoring Brooklyn NY | Score Guarantee',
    description:
        'Expert SAT prep tutoring in Brooklyn, NY. Data-driven approach, personalized sessions, and proven results. Students gain 100–250+ points on average. Contact for a free session.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/sat-prep' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SAT Prep Tutoring',
    provider: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' } },
    description: 'Personalized SAT prep tutoring in Brooklyn, NY. 25+ years of experience.',
    areaServed: 'Brooklyn, NY',
    review: {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        author: { '@type': 'Person', name: 'David T.' },
        reviewBody: 'My score went up by 210 points. Josh made the SAT way less stressful.',
    },
};

export default function SATPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">Brooklyn, NY · Online</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">SAT Prep Tutoring</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Personalized, data-driven SAT coaching that targets your specific weak areas. Students gain an average of 100–250+ points.
                        </p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="sat-cta-hero">Contact for a Free SAT Session</Link>
                    </div>
                </section>

                {/* Score win */}
                <section className="py-16 px-4 sm:px-6 bg-accent/10 border-b border-accent/20">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-6xl font-heading font-bold text-accent mb-2">+210</div>
                        <div className="text-primary font-semibold text-lg mb-2">Points gained — David T., Brooklyn NY</div>
                        <p className="text-muted italic max-w-xl mx-auto">&ldquo;Josh really took the time to figure out where I needed help and broke things down in a way that made sense. The SAT can feel overwhelming, but Josh made it way less stressful.&rdquo;</p>
                    </div>
                </section>

                {/* What we cover */}
                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-12">What Our SAT Prep Covers</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '📖', title: 'Reading Comprehension', desc: 'Passage analysis, inference questions, vocabulary in context.' },
                                { icon: '✍️', title: 'Writing & Language', desc: 'Grammar rules, punctuation, sentence structure, and rhetoric.' },
                                { icon: '🔢', title: 'Math (No Calculator)', desc: 'Algebra, problem-solving, and data analysis without a calculator.' },
                                { icon: '🧮', title: 'Math (Calculator)', desc: 'Advanced math, additional topics, and complex word problems.' },
                                { icon: '⏱️', title: 'Time Management', desc: 'Section-by-section pacing strategies to maximize score.' },
                                { icon: '📊', title: 'Score Analysis', desc: 'Proprietary data to diagnose careless errors vs. knowledge gaps.' },
                            ].map((item) => (
                                <div key={item.title} className="card">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Start Your SAT Prep Today</h2>
                        <p className="text-white/80 mb-8">Contact us for a free 30-minute intro session — no commitment, just results.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="sat-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
