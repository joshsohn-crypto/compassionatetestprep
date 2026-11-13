import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Math & Physics Tutoring Brooklyn NY',
    description:
        'Expert math tutoring in Brooklyn, NY. Trigonometry, statistics, precalculus, algebra, and more. Personalized sessions that build real understanding and confidence.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/math-tutoring' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Math Tutoring',
    provider: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' } },
    description: 'Expert math tutoring in trigonometry, statistics, precalculus, and algebra.',
    areaServed: 'Brooklyn, NY',
};

export default function MathTutoringPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">Brooklyn, NY · Online</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">Math &amp; Physics Tutoring</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Algebra through precalculus, statistics and physics, explained clearly and mastered at your student&apos;s pace.
                        </p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="math-cta-hero">Contact for a Free Math Session</Link>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-12">Subjects I Cover</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '📐', title: 'Trigonometry', desc: 'Unit circle, trig identities, graphing, and applications.' },
                                { icon: '📊', title: 'Statistics', desc: 'Descriptive stats, probability, hypothesis testing, and data analysis.' },
                                { icon: '🔢', title: 'Precalculus', desc: 'Functions, logarithms, quadratics, sequences, and limits intro.' },
                                { icon: '➗', title: 'Algebra I & II', desc: 'Linear equations, systems, quadratics, and polynomials.' },
                                { icon: '📈', title: 'AP Statistics', desc: 'AP exam prep for statistics — one of the most popular AP courses.' },
                                { icon: '🏫', title: 'Regents Math', desc: 'NY Regents Algebra and Geometry exam-focused prep.' },
                                { icon: '⚛️', title: 'Physics', desc: 'Mechanics, energy, waves and electricity, from high school physics to the Regents and AP.' },
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

                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Math Doesn&apos;t Have to Be Hard</h2>
                        <p className="text-white/80 mb-8">Book a free session and let me show your student exactly where they&apos;re stuck — and how to get unstuck.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="math-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
