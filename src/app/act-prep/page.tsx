import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'ACT Prep Tutoring Brooklyn NY | Compassionate Test Prep',
    description:
        'Expert ACT prep tutoring in Brooklyn, NY. All four ACT sections — English, Math, Reading, Science. Personalized plans and proven score improvements.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/act-prep' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ACT Prep Tutoring',
    provider: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' } },
    description: 'Personalized ACT prep tutoring covering all four test sections.',
    areaServed: 'Brooklyn, NY',
};

export default function ACTPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">Brooklyn, NY · Online</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">ACT Prep Tutoring</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Comprehensive ACT coaching covering all four sections. We help students find their optimal strategy for every test format.
                        </p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="act-cta-hero">Contact for a Free ACT Session</Link>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-4">All Four ACT Sections, Mastered</h2>
                        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">The ACT tests different skills from the SAT. We tailor our approach to the specific demands of each section.</p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: '📝', title: 'English (75 questions / 45 min)', desc: 'Grammar, punctuation, sentence structure, and rhetorical skills.' },
                                { icon: '🔢', title: 'Mathematics (60 questions / 60 min)', desc: 'Algebra through trigonometry including pre-calculus concepts.' },
                                { icon: '📖', title: 'Reading (40 questions / 35 min)', desc: 'Prose fiction, social sciences, humanities, and natural sciences passages.' },
                                { icon: '🔬', title: 'Science (40 questions / 35 min)', desc: 'Data representation, research summaries, and conflicting viewpoints.' },
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

                <section className="py-16 px-4 sm:px-6 bg-surface">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="section-heading mb-4">SAT or ACT — Which is Right for You?</h2>
                        <p className="text-muted leading-relaxed mb-8">Not sure which test to take? Josh can help you decide. Many students perform significantly better on one vs. the other based on their strengths. Contact us for a free consultation to find out which is right for your student.</p>
                        <Link href="/contact" className="btn-primary" id="act-sat-compare-cta">Contact for a Recommendation</Link>
                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Tackle the ACT?</h2>
                        <p className="text-white/80 mb-8">Contact us for your free 30-minute intro session today.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="act-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
