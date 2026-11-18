import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'SSAT Prep Tutoring Brooklyn NY',
    description:
        'One-on-one SSAT tutoring in Brooklyn, NY and online for students applying to private and boarding schools. Verbal, reading, math and the writing sample, plus a plan for the guessing penalty. Contact for a free session.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/ssat-prep' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SSAT Prep Tutoring',
    provider: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' } },
    description: 'One-on-one SSAT tutoring for students applying to private and boarding schools.',
    areaServed: ['Brooklyn, NY', 'Online'],
};

export default function SSATPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">Private &amp; boarding school admissions · In person in Brooklyn or online</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">SSAT Prep Tutoring</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            I help students applying to private and boarding schools get ready for the SSAT, one on one, with a plan built around where they&apos;re starting and the schools they&apos;re aiming for.
                        </p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="ssat-cta-hero">Contact for a Free SSAT Session</Link>
                    </div>
                </section>

                {/* About the test */}
                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-4" data-reveal>What&apos;s on the Upper Level SSAT</h2>
                        <p className="section-subheading text-center max-w-2xl mx-auto mb-12" data-reveal>
                            The Upper Level SSAT is for students in grades 8 to 11 applying to independent schools. It runs a little over three hours, and students can take it on paper, at a test center on a computer, or at home.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '🔤', title: 'Verbal (60 questions / 30 min)', desc: '30 synonyms and 30 analogies. Vocabulary matters, and so does a reliable method for analogies.' },
                                { icon: '📖', title: 'Reading (40 questions / 40 min)', desc: 'Passages of 250 to 350 words, with questions on what each one says and what it suggests.' },
                                { icon: '➗', title: 'Quantitative (50 questions / 60 min)', desc: 'Two 30-minute math sections of 25 questions each: arithmetic, algebra and geometry, with no calculator.' },
                                { icon: '✍️', title: 'Writing sample (25 min)', desc: 'It isn’t scored, but it goes to every school that gets the score report, so admissions officers read it.' },
                                { icon: '⚖️', title: 'Scoring', desc: 'One point for each right answer and a quarter point off for each wrong one, so knowing when to skip is part of the plan.' },
                                { icon: '🧪', title: 'Experimental section', desc: 'Sixteen unscored questions at the end. Students don’t know which ones count, so they treat it like the rest.' },
                            ].map((item, i) => (
                                <div key={item.title} className="card" data-reveal style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                                    <div className="text-3xl mb-3"><span className="bob" style={{ animationDelay: `${i * 250}ms` }}>{item.icon}</span></div>
                                    <h3 className="font-heading font-semibold text-primary mb-2">{item.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How I work */}
                <section className="py-20 px-4 sm:px-6 bg-surface">
                    <div className="max-w-3xl mx-auto" data-reveal>
                        <h2 className="section-heading mb-6">How I prepare students</h2>
                        <ul className="space-y-4 text-textMain leading-relaxed">
                            <li><b className="text-primary">I start with where your child is.</b> A practice test shows me their strengths and the skills worth building first, split by verbal, reading and math.</li>
                            <li><b className="text-primary">Weekly one-hour sessions</b> focused on whatever moves the score most for that student, not a one-size-fits-all syllabus.</li>
                            <li><b className="text-primary">A skipping strategy.</b> Because wrong answers cost a quarter point, we work out which questions are worth a guess and which are worth leaving blank.</li>
                            <li><b className="text-primary">Vocabulary and analogies.</b> The verbal section rewards steady work over time, so we build it a little every week.</li>
                            <li><b className="text-primary">Real practice tests.</b> Students take full timed tests, then we go through every miss together.</li>
                            <li><b className="text-primary">The writing sample.</b> Schools read it, so we practice planning and writing one in 25 minutes.</li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Let&apos;s talk about your child&apos;s SSAT plan</h2>
                        <p className="text-white/80 mb-8">Book a free 30-minute intro session. No commitment, no pressure.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="ssat-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
