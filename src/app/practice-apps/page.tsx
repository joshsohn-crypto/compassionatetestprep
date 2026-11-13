import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Practice Apps for the SAT, PSAT, ACT & SHSAT | Compassionate Test Prep',
    description:
        'SAT Blaster, PSAT Blaster, ACT Blaster and SHSAT Blaster: the practice apps Josh Sohn built for his own students. Every skill is a stop on a map, with adaptive practice, timed tests and full explanations.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/practice-apps' },
};

const apps = [
    {
        id: 'sat',
        icon: '🌍',
        name: 'SAT Blaster',
        who: 'For high schoolers',
        desc: 'A trip around the world, one skill per stop, with timed tests on a Bluebook-style screen. Includes a score report decoder that turns a PSAT or SAT score report into a 4-week plan.',
        img: '/apps/sat-blaster-map.jpg',
        alt: 'SAT Blaster world map',
        href: 'https://zingy-elf-f0255b.netlify.app/?src=site',
    },
    {
        id: 'psat',
        icon: '🚀',
        name: 'PSAT Blaster',
        who: 'For 9th and 10th graders',
        desc: 'A gentler start for younger students, with its own world: a road to the Moon, starting from the launch pad.',
        img: '/apps/psat-blaster-moon.jpg',
        alt: 'PSAT Blaster road to the Moon',
        href: 'https://zingy-elf-f0255b.netlify.app/psat/?src=site',
    },
    {
        id: 'shsat',
        icon: '🗽',
        name: 'SHSAT Blaster',
        who: 'For 7th and 8th graders',
        desc: 'Every skill is a stop on a map of New York City, from the Brooklyn Bridge to Coney Island, with all four official DOE practice tests in the on-screen format kids see on test day.',
        img: '/apps/shsat-blaster-nyc.jpg',
        alt: 'SHSAT Blaster New York City map',
        href: 'https://ctp-shsat-blaster.netlify.app/?src=site',
    },
    {
        id: 'act',
        icon: '🧭',
        name: 'ACT Blaster',
        who: 'For students taking the ACT',
        desc: 'The same approach for the ACT, with practice built from real ACT data and a journey through the Midwest.',
        img: '/apps/act-blaster-chicago.jpg',
        alt: 'ACT Blaster Chicago map',
        href: 'https://ctp-act-blaster.netlify.app/?src=site',
    },
];

export default function PracticeAppsPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">SAT · PSAT · ACT · SHSAT</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-5 mb-5">The practice tools my students use</h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Twenty-five years of tutoring taught me that what happens <em>between</em> sessions matters as much as the sessions themselves. So I built practice apps that use the same approach I use one on one, turned into a journey students actually want to come back to.
                        </p>
                        <a href="#apps" className="btn-primary text-base px-8 py-4" id="apps-cta-hero">See the apps</a>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-heading text-center mb-12">How it works</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '🗺️', title: 'Every skill is a stop on a map', desc: 'Students travel the world on the SAT, the solar system on the PSAT, the Midwest on the ACT and New York City on the SHSAT, earning levels, stamps and prizes along the way.' },
                                { icon: '📈', title: 'It adapts to each student', desc: 'New students start with easier questions, and everything ramps up as they get things right. Every question comes with a full explanation, including why each trap is tempting.' },
                                { icon: '⏱️', title: 'Real test conditions', desc: 'Timed tests on screens that look and feel like test day, including the official SHSAT practice tests.' },
                            ].map((item) => (
                                <div key={item.title} className="card" data-reveal>
                                    <div className="text-3xl mb-3"><span className="bob">{item.icon}</span></div>
                                    <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tutor view */}
                <section className="py-16 px-4 sm:px-6 bg-accent/10 border-y border-accent/20">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-4xl mb-3">👩‍🏫</div>
                        <h2 className="font-heading text-3xl font-bold text-primary mb-4">For families of my students</h2>
                        <p className="text-textMain leading-relaxed">
                            A tutor view shows me everything my students practice between sessions: what they worked on, what they missed and where we should focus next. That way our time together goes exactly where it&apos;s needed.
                        </p>
                    </div>
                </section>

                {/* The apps */}
                <section id="apps" className="py-20 px-4 sm:px-6 bg-surface scroll-mt-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="section-heading text-center mb-12">The apps</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {apps.map((a, i) => (
                                <div key={a.id} data-reveal style={{ transitionDelay: `${(i % 2) * 120}ms` }} className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col" id={`app-card-${a.id}`}>
                                    {a.img ? (
                                        <div className="map-drift relative w-full aspect-[16/9] overflow-hidden bg-primary/5">
                                            <Image src={a.img} alt={a.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-[16/9] bg-primary flex items-center justify-center text-7xl">{a.icon}</div>
                                    )}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="text-sm text-accent font-medium mb-1">{a.who}</div>
                                        <h3 className="font-heading font-semibold text-2xl text-primary mb-2">{a.icon} {a.name}</h3>
                                        <p className="text-muted text-sm leading-relaxed flex-1">{a.desc}</p>
                                        <div className="mt-5">
                                            <a href={a.href} target="_blank" rel="noopener" className="btn-primary" id={`app-open-${a.id}`}>Start {a.name} →</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Early access */}
                <section className="py-16 px-4 sm:px-6 bg-bg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl font-bold text-primary mb-4">Early access</h2>
                        <p className="text-textMain leading-relaxed">
                            The apps are in early access, so anyone can use them at no cost for now. Families and tutors who join during early access will keep founding-member pricing when the apps move to paid.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Want to see how the apps fit into one-on-one tutoring?</h2>
                        <p className="text-white/80 mb-8">Book a free 30-minute intro session. No commitment, no pressure.</p>
                        <Link href="/contact" className="btn-primary text-base px-8 py-4" id="apps-cta-bottom">Get in touch</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
