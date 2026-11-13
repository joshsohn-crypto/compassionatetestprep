import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Tutor in Brooklyn, NY | SAT, ACT, GMAT, Regents | Compassionate Test Prep',
    description:
        'Looking for a tutor near you in Brooklyn, NY? Compassionate Test Prep offers expert SAT, ACT, GMAT, Regents, and math tutoring in Brooklyn. 25+ years, 2000+ students.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/tutoring-brooklyn-ny' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Compassionate Test Prep',
    description: 'Expert tutoring in Brooklyn, NY. SAT, ACT, GMAT, Regents, AP English, and math.',
    url: 'https://www.compassionatetestprep.com',
    telephone: '+1-555-000-0000',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '',
        addressLocality: 'Brooklyn',
        addressRegion: 'NY',
        postalCode: '11201',
        addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.6782, longitude: -73.9442 },
    areaServed: [
        { '@type': 'City', name: 'Brooklyn' },
        { '@type': 'City', name: 'Manhattan' },
        { '@type': 'City', name: 'Queens' },
        { '@type': 'City', name: 'Staten Island' },
        { '@type': 'City', name: 'The Bronx' },
    ],
    openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' },
    ],
    hasMap: 'https://maps.google.com/?q=Brooklyn,NY',
    sameAs: ['https://g.page/compassionate-test-prep'],
};

export default function BrooklynLocalPage() {
    return (
        <>
            <JsonLd data={schema} />
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="max-w-3xl">
                            <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">📍 Brooklyn, New York</span>
                            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5 leading-tight">
                                Test Prep Tutor in <span className="text-accent">Brooklyn, NY</span>
                            </h1>
                            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
                                Born and raised in Brooklyn, Josh has been serving local students with expert SAT, ACT, GMAT, Regents, and math tutoring since 2001. In-person in Brooklyn and online worldwide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" id="local-cta-primary" className="btn-primary text-base px-8 py-4">Contact for a Free Session</Link>
                                <a href="tel:+15550000000" id="local-phone-cta" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-base px-8 py-4">
                                    📞 Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NAP Block — Name Address Phone, critical for local SEO */}
                <section className="py-10 px-4 sm:px-6 bg-surface border-b border-gray-100">
                    <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
                        <div className="p-5 bg-bg rounded-xl">
                            <div className="text-2xl mb-2">📍</div>
                            <div className="font-semibold text-primary text-sm">Location</div>
                            <div className="text-muted text-sm mt-1">Brooklyn, NY<br />(In-person &amp; Online)</div>
                        </div>
                        <div className="p-5 bg-bg rounded-xl">
                            <div className="text-2xl mb-2">🕐</div>
                            <div className="font-semibold text-primary text-sm">Hours</div>
                            <div className="text-muted text-sm mt-1">Mon–Sat: 9 AM – 8 PM EST</div>
                        </div>
                        <div className="p-5 bg-bg rounded-xl">
                            <div className="text-2xl mb-2">⭐</div>
                            <div className="font-semibold text-primary text-sm">Rating</div>
                            <div className="text-muted text-sm mt-1">5.0 / 5.0 based on 4+ reviews</div>
                        </div>
                    </div>
                </section>

                {/* Why Brooklyn families choose CTP */}
                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-12">Why Brooklyn Families Choose Compassionate Test Prep</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '🏘️', title: 'Local & Connected', desc: 'Born and raised in Brooklyn — Josh understands the NYC school system, local test schedules, and NY-specific Regents requirements.' },
                                { icon: '📊', title: 'Data-Driven Results', desc: 'Josh tracks every error with proprietary data to run efficient sessions and deliver consistent score improvements.' },
                                { icon: '💚', title: 'Compassionate Approach', desc: 'No anxiety, no drill-and-kill. Flexible, supportive tutoring that meets each student where they are.' },
                                { icon: '🎯', title: 'Targeted Prep', desc: 'Sessions are customized to your student\'s exact gaps — never generic content review.' },
                                { icon: '🖥️', title: 'In-Person & Online', desc: 'Available for in-person sessions in Brooklyn and remote sessions for students worldwide.' },
                                { icon: '✅', title: '25+ Years Proven', desc: '2,000+ students served since 2001. Track record speaks for itself.' },
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

                {/* Services in Brooklyn */}
                <section className="py-16 px-4 sm:px-6 bg-surface">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="section-heading text-center mb-10">Tutoring Services Available in Brooklyn, NY</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                { href: '/sat-prep', label: 'SAT Prep' },
                                { href: '/act-prep', label: 'ACT Prep' },
                                { href: '/gmat-prep', label: 'GMAT Prep' },
                                { href: '/regents-review', label: 'Regents Review' },
                                { href: '/ap-english', label: 'AP English' },
                                { href: '/math-tutoring', label: 'Math Tutoring' },
                            ].map((s) => (
                                <Link key={s.href} href={s.href} className="bg-bg border border-gray-200 rounded-xl p-4 text-center text-primary font-medium text-sm hover:border-primary hover:bg-primary hover:text-white transition-all" id={`local-service-${s.label.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {s.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Google Maps placeholder */}
                <section className="py-16 px-4 sm:px-6 bg-bg">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="section-heading text-center mb-8">Find Us in Brooklyn, NY</h2>
                        <div className="bg-surface rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-video flex items-center justify-center">
                            <div className="text-center text-muted p-8">
                                <div className="text-5xl mb-3">🗺️</div>
                                <p className="text-sm">Google Maps embed will appear here.</p>
                                <a href="https://maps.google.com/?q=Brooklyn,NY" target="_blank" rel="noopener noreferrer" id="google-maps-link" className="mt-4 inline-block text-accent text-sm font-medium hover:underline">
                                    View on Google Maps →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Brooklyn&apos;s Most Compassionate Tutor</h2>
                        <p className="text-white/80 mb-8">25+ years. 2,000+ students. Contact us for a free intro session today.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="local-cta-bottom">Contact for a Free Session</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
