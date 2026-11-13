import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import AppCallout from '@/components/AppCallout';

export const metadata: Metadata = {
    title: 'SHSAT Prep Tutoring Brooklyn NY',
    description:
        'One-on-one SHSAT tutoring in Brooklyn, NY from a Stuyvesant graduate with 25+ years of test prep experience. Practice in the real on-screen format with SHSAT Blaster. Contact for a free session.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/shsat-prep' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SHSAT Prep Tutoring',
    provider: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' } },
    description: 'One-on-one SHSAT tutoring for NYC 7th and 8th graders preparing for the Specialized High Schools Admissions Test.',
    areaServed: 'New York, NY',
};

export default function SHSATPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">New York City · In person in Brooklyn or online</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">SHSAT Prep Tutoring</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            I grew up in New York and went to Stuyvesant, so I know what the specialized high schools mean to a family. I help 7th and 8th graders get ready for the SHSAT calmly, one on one, with practice that looks and feels like test day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary text-base px-8 py-4" id="shsat-cta-hero">Contact for a Free SHSAT Session</Link>
                            <a href="https://ctp-shsat-blaster.netlify.app/?src=site" target="_blank" rel="noopener" className="glow btn-outline border-white text-white hover:bg-white hover:text-primary text-base px-8 py-4" id="shsat-cta-app">🗽 Try SHSAT Blaster</a>
                        </div>
                    </div>
                </section>

                {/* About the test */}
                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-4" data-reveal>What the SHSAT looks like now</h2>
                        <p className="section-subheading text-center max-w-2xl mx-auto mb-12" data-reveal>
                            The Specialized High Schools Admissions Test decides admission to eight of New York City&apos;s specialized high schools, including Stuyvesant, Bronx Science and Brooklyn Tech. It&apos;s taken on a computer, and it adapts to each student as they go.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '📖', title: 'English Language Arts', desc: 'Reading passages (prose and poetry) plus revising and editing: grammar, word choice and how ideas connect.' },
                                { icon: '➗', title: 'Math', desc: 'Number sense, ratios and percents, algebra, geometry and probability, with no calculator and no formula sheet.' },
                                { icon: '🎯', title: 'Question by question', desc: 'The test adapts to each answer, so every question counts and students can’t skip ahead and come back.' },
                                { icon: '🖥️', title: 'On screen', desc: 'New question types like drag-and-drop, drop-down answers and typed-in math, all in an unfamiliar testing interface.' },
                                { icon: '⏱️', title: 'Pacing', desc: 'Three hours for both sections, with a plan for how much time to spend on reading versus math.' },
                                { icon: '🧘', title: 'Nerves', desc: 'For a lot of 8th graders this is the first high-stakes test of their lives. Feeling ready is half the battle.' },
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
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div data-reveal>
                            <h2 className="section-heading mb-6">How I prepare students</h2>
                            <ul className="space-y-4 text-textMain leading-relaxed">
                                <li><b className="text-primary">I start with where your child is.</b> A short practice test shows me their strengths and the skills worth building first, split by reading, editing and math.</li>
                                <li><b className="text-primary">Weekly one-hour sessions</b> focused on whatever moves the needle most for that student, not a one-size-fits-all syllabus.</li>
                                <li><b className="text-primary">Real test practice.</b> Students take all four official DOE practice tests in the same on-screen format they&apos;ll see on test day, then we go through every miss together.</li>
                                <li><b className="text-primary">Practice between sessions that I can see.</b> SHSAT Blaster follows what we&apos;re working on, and my tutor view shows me everything they did, so our time together goes where it&apos;s needed.</li>
                                <li><b className="text-primary">Starting early helps.</b> Seventh graders who begin the year before have time to build skills properly instead of cramming in the fall.</li>
                            </ul>
                        </div>
                        <a href="https://ctp-shsat-blaster.netlify.app/?src=site" target="_blank" rel="noopener" className="map-drift block relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow" id="shsat-map" data-reveal>
                            <Image src="/apps/shsat-blaster-nyc.jpg" alt="SHSAT Blaster map of New York City" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </a>
                    </div>
                </section>

                <AppCallout ids={['shsat']} title="Practice for the SHSAT between sessions" />

                {/* CTA */}
                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Let&apos;s talk about your child&apos;s SHSAT plan</h2>
                        <p className="text-white/80 mb-8">Book a free 30-minute intro session. No commitment, no pressure.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="shsat-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
