import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'About Josh | Expert Tutor in Brooklyn, NY',
    description:
        "Meet Josh — Brooklyn-raised test prep tutor with 25+ years of experience and 2,000+ students helped. Learn about his data-driven, compassionate approach.",
    alternates: { canonical: 'https://www.compassionatetestprep.com/about' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Josh',
    jobTitle: 'Test Prep Tutor',
    worksFor: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep' },
    description: 'Born and raised in Brooklyn, NY. Full-time tutor since 2001 with 2000+ students helped.',
    address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' },
};

export default function AboutPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">Meet Josh</h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Brooklyn-born. Full-time tutor since 2001. 25+ years of experience, 2,000+ students, and a deeply data-driven approach that gets real results.
                        </p>
                    </div>
                </section>

                {/* Bio */}
                <section className="py-20 px-4 sm:px-6 bg-surface">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-2">
                            <div className="relative bg-bg rounded-2xl aspect-square overflow-hidden border border-gray-200 shadow-sm">
                                <Image
                                    src="/tutor.jpg"
                                    alt="Josh - Test Prep Tutor"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />
                            </div>
                            {/* Credentials */}
                            <div className="mt-6 space-y-3">
                                {[
                                    { icon: '📅', label: 'Tutoring Since', val: '2001' },
                                    { icon: '👥', label: 'Students Helped', val: '2,000+' },
                                    { icon: '📍', label: 'Based In', val: 'Brooklyn, NY' },
                                    { icon: '🌐', label: 'Also Available', val: 'Online Worldwide' },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-3 bg-bg rounded-xl px-4 py-3">
                                        <span className="text-xl">{item.icon}</span>
                                        <div>
                                            <div className="text-xs text-muted">{item.label}</div>
                                            <div className="font-semibold text-primary text-sm">{item.val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <span className="text-accent font-semibold text-sm uppercase tracking-wider">My Story</span>
                            <h2 className="font-heading text-3xl font-bold text-primary mt-2 mb-6">A Brooklyn Tutor Who Gets It</h2>
                            <div className="space-y-4 text-textMain/80 leading-relaxed">
                                <p>
                                    Born and raised in Brooklyn, NY, I&apos;ve been tutoring full-time since 2001. That&apos;s over 2,000 students — and counting.
                                </p>
                                <p>
                                    When it comes to test prep, I&apos;m all about the data. From diagnosing students&apos; mistakes as careless or expected, to steering them to targeted online content review, to contextualizing their performance within proprietary historical student data — I believe in a systematic approach.
                                </p>
                                <p>
                                    Tutoring this way allows me to run more efficient sessions, help students build genuine confidence, and deliver great score outcomes. <strong>Compassionate (and efficient) test prep means students can return to the activities they love most — sooner rather than later.</strong>
                                </p>
                                <p>
                                    I&apos;ve worked with students from middle school through graduate school, covering everything from Regents prep to SAT and ACT to GMAT coaching.
                                </p>
                            </div>
                            <div className="mt-8 p-6 bg-bg rounded-2xl border-l-4 border-primary">
                                <p className="font-heading text-lg text-primary italic">
                                    &ldquo;Testing doesn&apos;t have to be painful. With the right approach, it can actually be fun, increase self-confidence, and open doors to exciting new academic opportunities.&rdquo;
                                </p>
                                <p className="mt-2 text-muted text-sm">— Josh, Founder of Compassionate Test Prep</p>
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="btn-primary" id="about-book-cta">Contact Josh for a Session</Link>
                                <Link href="/testimonials" className="btn-outline" id="about-testimonials-cta">Read Student Reviews</Link>
                                <a href="https://medium.com/@joshsohn" target="_blank" rel="noopener noreferrer" className="btn-outline" id="about-medium-link">Medium Blog ↗</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specialties */}
                <section className="py-16 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="section-heading mb-10">Tutoring Specialties</h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['SAT Prep', 'ACT Prep', 'GMAT Support', 'Trigonometry', 'Statistics', 'AP English', 'Regents Review', 'Precalculus', 'Algebra', 'Reading Comprehension', 'Test Strategy'].map((s) => (
                                <span key={s} className="bg-surface border border-primary/20 text-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
