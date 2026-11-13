import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'NY Regents Review Tutoring Brooklyn | Compassionate Test Prep',
    description:
        'NY Regents exam prep tutoring in Brooklyn, NY. Pass your Regents exams with confidence. Expert coaching in all Regents subjects. Contact for a free session.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/regents-review' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'NY Regents Review Tutoring',
    provider: { '@type': 'LocalBusiness', name: 'Compassionate Test Prep', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY' } },
    description: 'NY Regents exam preparation tutoring for all tested subjects.',
    areaServed: 'Brooklyn, NY',
};

export default function RegentsPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">Brooklyn, NY · NYC</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">NY Regents Review</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Expert Regents exam tutoring that helps students pass — and even excel — on New York&apos;s high school graduation requirements.
                        </p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="regents-cta-hero">Contact for a Free Regents Session</Link>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-4">Subjects We Cover</h2>
                        <p className="text-center text-muted mb-12 max-w-xl mx-auto">All major Regents exams, tailored to the specific format and content of each test.</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '🔢', title: 'Algebra I & II' },
                                { icon: '📐', title: 'Geometry' },
                                { icon: '🔬', title: 'Living Environment' },
                                { icon: '⚗️', title: 'Chemistry & Physics' },
                                { icon: '📖', title: 'English Language Arts' },
                                { icon: '🌍', title: 'Global & US History' },
                            ].map((item) => (
                                <div key={item.title} className="card flex items-center gap-4">
                                    <div className="text-3xl">{item.icon}</div>
                                    <h3 className="font-semibold text-primary">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Don&apos;t Leave Graduation to Chance</h2>
                        <p className="text-white/80 mb-8">Start Regents review early for the best results. Contact us for a free intro session today.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="regents-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
