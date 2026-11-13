import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { practiceApps } from '@/lib/apps';

export const metadata: Metadata = {
    title: 'Expert Test Prep Tutoring in Brooklyn, NY',
    description:
        'One-on-one SAT, SHSAT and ACT prep in Brooklyn and online. 25+ years, 2,200+ students, and practice apps built for my students. Book a free intro session.',
    alternates: { canonical: 'https://www.compassionatetestprep.com' },
};

const services: { href: string; icon: string; title: string; desc: string; feature?: string }[] = [
    { href: '/sat-prep', icon: '📝', title: 'SAT & PSAT', desc: 'Data-driven prep for the digital SAT that targets each student\'s specific gaps.', feature: '/apps/sat-blaster-map.jpg' },
    { href: '/shsat-prep', icon: '🗽', title: 'SHSAT', desc: 'One-on-one prep for the specialized high schools test, from a Stuyvesant grad.', feature: '/apps/shsat-blaster-nyc.jpg' },
    { href: '/act-prep', icon: '🎯', title: 'ACT Prep', desc: 'Prep for the enhanced ACT, and honest advice on ACT versus SAT.' },
    { href: '/gmat-prep', icon: '📊', title: 'GMAT Prep', desc: 'Coaching for the GMAT Focus Edition: Quant, Verbal and Data Insights.' },
    { href: '/regents-review', icon: '🏫', title: 'Regents Review', desc: 'Math, physics and English Regents prep.' },
    { href: '/ap-english', icon: '📖', title: 'AP English', desc: 'AP Language and AP Literature: close reading and essays.' },
    { href: '/math-tutoring', icon: '📐', title: 'Math & Physics', desc: 'Algebra through precalculus, statistics and physics.' },
];

const faqs = [
    { q: 'Where are sessions held?', a: 'In person in Brooklyn, NY, or online. I work with local students and with students around the world.' },
    { q: 'How many sessions will my child need?', a: "It depends on the student's starting point and target score. After we talk and see where your child is starting, I'll recommend a plan. Most students meet with me weekly for an hour." },
    { q: 'What makes Compassionate Test Prep different?', a: 'Every session is one on one with me. I diagnose careless errors versus knowledge gaps, compare each student with 25 years of my own student data, and give them practice apps I built so I can see exactly what they do between sessions.' },
    { q: 'Do you offer a free intro session?', a: 'Yes. Book a free 30-minute intro session to meet me, talk through your goals and see if it\'s a good fit, with no commitment.' },
    { q: 'What ages and grades do you work with?', a: 'Middle school through graduate school: SHSAT for 7th and 8th graders, SAT, PSAT and ACT for high schoolers, and subject tutoring along the way.' },
];

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Compassionate Test Prep',
    description: 'Expert SAT, ACT, GMAT, Regents, AP English and math tutoring in Brooklyn, NY.',
    url: 'https://www.compassionatetestprep.com',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Brooklyn',
        addressRegion: 'NY',
        addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.6782, longitude: -73.9442 },
    areaServed: ['Brooklyn', 'New York City', 'Online'],
    priceRange: '$$',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
};

export default function HomePage() {
    return (
        <>
            <JsonLd data={localBusinessSchema} />
            <JsonLd data={faqSchema} />
            <Header />
            <main>
                {/* ───── HERO ───── */}
                <section id="hero" className="relative bg-primary overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white" />
                        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent" />
                    </div>
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full mb-6 font-medium">
                                Brooklyn, NY &bull; Online
                            </div>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Calm, expert test prep,{' '}
                                <span className="text-accent-light italic">one student at a time</span>
                            </h1>
                            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                                I&apos;m Josh Sohn. For 25 years I&apos;ve helped more than 2,200 students prepare for the SAT, SHSAT and more, one on one, with practice tools I built for them.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link href="/contact" id="hero-cta-primary" className="btn-primary text-base px-8 py-4">
                                    Contact for a Free Session
                                </Link>
                                <Link href="#practice-apps" id="hero-cta-apps" className="glow btn-outline border-white text-white hover:bg-white hover:text-primary text-base px-8 py-4">
                                    🚀 Try the Free Practice Apps
                                </Link>
                            </div>
                            <p className="mt-4 text-white/70 text-sm">
                                Or jump straight in:{' '}
                                {practiceApps.map((a, i) => (
                                    <span key={a.id}>
                                        <a href={a.href} target="_blank" rel="noopener" className="text-white underline underline-offset-2 hover:text-accent-light" id={`hero-app-${a.id}`}>{a.name}</a>
                                        {i < practiceApps.length - 1 ? ' · ' : ''}
                                    </span>
                                ))}
                            </p>
                        </div>
                        {/* Hero image + stats */}
                        <div className="flex-shrink-0 flex flex-col gap-4 w-full md:w-72">
                            <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <Image
                                    src="/tutor.jpg"
                                    alt="Josh Sohn, founder of Compassionate Test Prep"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 288px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-primary/70 backdrop-blur px-3 py-1 rounded-full">
                                    Josh Sohn · Stuyvesant &amp; Wesleyan
                                </div>
                            </div>
                            {[
                                { val: '25+', label: 'Years Tutoring' },
                                { val: '2,200+', label: 'Students Since 2001' },
                                { val: '1 : 1', label: 'Every Session, With Me' },
                            ].map((s) => (
                                <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/20">
                                    <div className="font-heading text-3xl font-bold text-white mb-1">{s.val}</div>
                                    <div className="text-white/70 text-sm">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── PRACTICE APPS ───── */}
                <section id="practice-apps" className="py-20 px-4 sm:px-6 bg-primary/5 border-b border-primary/10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10" data-reveal>
                            <span className="inline-block bg-accent text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">NEW · FREE IN EARLY ACCESS</span>
                            <h2 className="section-heading mt-4">Try the practice apps my students use</h2>
                            <p className="section-subheading max-w-2xl mx-auto">
                                Every skill is a stop on a map, with adaptive questions, timed tests and full explanations. Pick your test and start practicing in under a minute.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {practiceApps.map((a, i) => (
                                <a key={a.id} href={a.href} target="_blank" rel="noopener" data-reveal style={{ transitionDelay: `${i * 120}ms` }} className="group bg-surface rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col" id={`home-app-${a.id}`}>
                                    {a.img ? (
                                        <div className="map-drift relative w-full aspect-[16/10] overflow-hidden bg-primary/5">
                                            <Image src={a.img} alt={`${a.name} map`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-[16/10] bg-primary flex items-center justify-center text-6xl">{a.icon}</div>
                                    )}
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="text-xs text-accent font-semibold mb-1">For {a.who.toLowerCase().replace('act', 'ACT')}</div>
                                        <h3 className="font-heading font-semibold text-xl text-primary mb-1"><span className="bob" style={{ animationDelay: `${i * 300}ms` }}>{a.icon}</span> {a.name}</h3>
                                        <p className="text-muted text-sm leading-relaxed flex-1">{a.short}</p>
                                        <div className="mt-4 btn-primary text-sm py-2 justify-center">Start {a.name} →</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/practice-apps" className="text-primary font-semibold hover:text-accent" id="home-apps-more">How the apps work and what families see →</Link>
                        </div>
                    </div>
                </section>

                {/* ───── SERVICES ───── */}
                <section id="services" className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="section-heading">How I Can Help</h2>
                            <p className="section-subheading max-w-2xl mx-auto">
                                Every subject gets the same approach: one on one, built around the student in front of me.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {services.filter((s) => s.feature).map((s, i) => (
                                <Link key={s.href} href={s.href} data-reveal style={{ transitionDelay: `${i * 120}ms` }} className="group bg-surface rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col" id={`service-card-${s.href.slice(1)}`}>
                                    <div className="map-drift relative w-full h-44 overflow-hidden">
                                        <Image src={s.feature!} alt={`${s.title} practice map`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="font-heading font-semibold text-2xl text-primary mb-2 group-hover:text-accent transition-colors">{s.icon} {s.title}</h3>
                                        <p className="text-muted text-sm leading-relaxed flex-1">{s.desc}</p>
                                        <div className="mt-4 text-accent text-sm font-medium flex items-center gap-1">Learn more <span>→</span></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {services.filter((s) => !s.feature).map((s, i) => (
                                <Link key={s.href} href={s.href} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="group bg-surface rounded-xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all" id={`service-card-${s.href.slice(1)}`}>
                                    <div className="font-heading font-semibold text-primary group-hover:text-accent transition-colors">{s.icon} {s.title}</div>
                                    <p className="text-muted text-xs leading-relaxed mt-1">{s.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── PHILOSOPHY ───── */}
                <section id="philosophy" className="bg-surface overflow-hidden">
                    {/* Top: full-bleed image | text side-by-side */}
                    <div className="grid md:grid-cols-2 min-h-[480px]">
                        {/* Image panel — full height, no padding */}
                        <div className="relative min-h-[320px] md:min-h-0 order-2 md:order-1 bg-primary flex items-center justify-center px-10 py-16">
                            <blockquote className="max-w-md text-white" data-reveal>
                                <div className="text-accent-light text-6xl font-heading leading-none mb-2">&ldquo;</div>
                                <p className="font-heading text-2xl md:text-3xl leading-snug italic">Testing doesn&apos;t have to be painful. With the right approach, it can build confidence and open doors.</p>
                                <footer className="mt-5 text-white/70 text-sm tracking-wide">Josh Sohn, founder</footer>
                            </blockquote>
                        </div>

                        {/* Text panel */}
                        <div className="order-1 md:order-2 flex flex-col justify-center px-8 py-16 md:px-14 lg:px-16">
                            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">My Approach</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
                                Tutoring with Heart —<br className="hidden md:block" /> and Data
                            </h2>
                            <p className="text-textMain/75 leading-relaxed mb-4 text-[15px]">
                                There&apos;s too much testing in education these days. But testing doesn&apos;t have to be painful. With the right approach, it can actually be fun, increase self-confidence, and open doors to exciting new opportunities.
                            </p>
                            <p className="text-textMain/75 leading-relaxed mb-8 text-[15px]">
                                I meet students where they are: diagnosing careless errors versus knowledge gaps, tracking progress with my own data and adapting as we go. And I keep families in the loop the whole way.
                            </p>
                            <Link href="/about" className="btn-outline self-start" id="philosophy-cta">
                                Meet Josh →
                            </Link>
                        </div>
                    </div>

                    {/* Bottom: 4 feature cards in a row */}
                    <div className="border-t border-gray-100 bg-bg">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                                {[
                                    {
                                        num: '01',
                                        title: 'Customized Plans',
                                        desc: 'No cookie-cutter prep. Every session is designed around your child\'s unique gaps and goals.',
                                        svg: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                                            </svg>
                                        ),
                                        gradient: 'from-primary to-primary-light',
                                    },
                                    {
                                        num: '02',
                                        title: 'Data-Driven',
                                        desc: 'I diagnose careless errors versus knowledge gaps using 25 years of my own student data.',
                                        svg: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                            </svg>
                                        ),
                                        gradient: 'from-accent to-accent-light',
                                    },
                                    {
                                        num: '03',
                                        title: 'Calm, Not Crammed',
                                        desc: 'Compassionate pacing, open communication, and flexible structure that builds real confidence.',
                                        svg: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                        ),
                                        gradient: 'from-primary to-primary-light',
                                    },
                                    {
                                        num: '04',
                                        title: 'Experience',
                                        desc: '2,200+ students since 2001, across the SAT, SHSAT, ACT and more.',
                                        svg: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                            </svg>
                                        ),
                                        gradient: 'from-accent to-accent-light',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="group relative bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                    >
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`} />
                                        <div className="text-[10px] font-bold text-muted/50 tracking-widest mb-3 font-body">{item.num}</div>
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                            {item.svg}
                                        </div>
                                        <div className="font-heading font-semibold text-primary text-sm mb-1.5">{item.title}</div>
                                        <div className="text-muted text-xs leading-relaxed">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───── ABOUT JOSH PREVIEW ───── */}
                <section id="about-preview" className="py-20 px-4 sm:px-6 bg-surface">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-primary rounded-3xl overflow-hidden grid md:grid-cols-5">
                            <div className="md:col-span-2 relative min-h-[280px]">
                                <Image
                                    src="/tutor.jpg"
                                    alt="Josh Sohn"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                            </div>
                            <div className="md:col-span-3 p-10 text-white">
                                <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">Your Tutor</span>
                                <h2 className="font-heading text-3xl font-bold mt-2 mb-4">Hi, I&apos;m Josh.</h2>
                                <p className="text-white/80 leading-relaxed mb-3">
                                    Born and raised in Brooklyn, a Stuyvesant and Wesleyan graduate, and tutoring full-time since 2001. That&apos;s more than 2,200 students so far.
                                </p>
                                <p className="text-white/80 leading-relaxed mb-6">
                                    I believe in a calm, systematic approach: find out exactly why a student misses what they miss, fix that, and get them back to the things they love sooner.
                                </p>
                                <Link href="/about" className="btn-primary" id="about-learn-more">
                                    Learn More About Josh
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───── LOCAL SEO BAND ───── */}
                <section id="local-area" className="py-12 px-4 sm:px-6 bg-bg border-y border-gray-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-muted text-sm">
                            Serving students in{' '}
                            {['Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'The Bronx', 'Long Island', 'Online Worldwide'].map((loc, i, arr) => (
                                <span key={loc}>
                                    <span className="text-primary font-medium">{loc}</span>
                                    {i < arr.length - 1 ? ' · ' : ''}
                                </span>
                            ))}
                        </p>
                        <Link href="/tutoring-brooklyn-ny" className="mt-3 inline-block text-accent text-sm font-medium hover:underline" id="local-page-link">
                            → Tutoring in Brooklyn, NY
                        </Link>
                    </div>
                </section>

                {/* ───── CTA BANNER ───── */}
                <section id="cta-banner" className="py-20 px-4 sm:px-6 bg-accent">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Raise Your Score?
                        </h2>
                        <p className="text-white/85 text-lg mb-8">
                            Book a free 30-minute intro session. No commitment, no pressure — just a conversation about your goals.
                        </p>
                        <Link href="/contact" id="cta-banner-btn" className="inline-flex items-center gap-2 bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base">
                            Contact for Your Free Session
                        </Link>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section id="faq" className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="section-heading">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <details
                                    key={i}
                                    className="bg-surface rounded-xl border border-gray-100 shadow-sm group"
                                    id={`faq-${i + 1}`}
                                >
                                    <summary className="flex justify-between items-center px-6 py-4 font-semibold text-textMain cursor-pointer list-none hover:text-primary transition-colors">
                                        {faq.q}
                                        <span className="ml-4 text-accent text-xl group-open:rotate-45 transition-transform inline-block">+</span>
                                    </summary>
                                    <div className="px-6 pb-5 text-muted leading-relaxed">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
