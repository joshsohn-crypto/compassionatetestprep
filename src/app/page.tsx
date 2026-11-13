import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Expert Test Prep Tutoring in Brooklyn, NY | Compassionate Test Prep',
    description:
        'SAT, ACT, GMAT, Regents, AP English & math tutoring in Brooklyn, NY. 25+ years experience, 2,000+ students. Contact for a free intro session today.',
    alternates: { canonical: 'https://www.compassionatetestprep.com' },
};

const services = [
    { href: '/sat-prep', icon: '📝', title: 'SAT Prep', desc: 'Data-driven SAT prep that targets your specific gaps and boosts scores.', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=70' },
    { href: '/act-prep', icon: '🎯', title: 'ACT Prep', desc: 'Comprehensive ACT strategies for all four test sections.', img: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=600&auto=format&fit=crop&q=70' },
    { href: '/gmat-prep', icon: '📊', title: 'GMAT Prep', desc: 'Analytical and verbal GMAT coaching for business school applicants.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=70' },
    { href: '/regents-review', icon: '🏫', title: 'Regents Review', desc: 'NY Regents exam prep across all tested subjects.', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=70' },
    { href: '/ap-english', icon: '📖', title: 'AP English', desc: 'AP Language & Literature prep to maximize your exam score.', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=70' },
    { href: '/math-tutoring', icon: '📐', title: 'Math Tutoring', desc: 'Trigonometry, statistics, precalculus, and algebra support.', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=70' },
];

const testimonials = [
    {
        name: 'David T.',
        test: 'SAT',
        improvement: '+210 pts',
        text: 'Josh was an amazing SAT tutor! He really took the time to figure out where I needed help. Thanks to his help, my score went up by 210 points, and I feel so much more prepared for college.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=70',
    },
    {
        name: 'Lena C.',
        test: 'Parent',
        improvement: '',
        text: "As a parent, I couldn't be more grateful for Josh's incredible support. Josh tailors each lesson to fit my child's individual needs, helping her build confidence and mastery in subjects that were once challenging.",
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=70',
    },
];

const faqs = [
    { q: 'Where are sessions held?', a: 'Sessions are available online and in-person in Brooklyn, NY. Josh works with both local students and students worldwide remotely.' },
    { q: 'How many sessions will my child need?', a: "It depends on the student's starting point and target score. Josh will assess your child in the first session and recommend a customized plan. Many students see significant improvement in 8–12 sessions." },
    { q: 'What makes Compassionate Test Prep different?', a: 'Josh uses a proprietary data-driven approach — diagnosing careless vs. knowledge-gap errors, contextualizing scores within historical student data, and building a flexible plan unique to each student.' },
    { q: 'Do you offer a free intro session?', a: 'Yes! Book a free 30-minute intro session to meet Josh, assess your needs, and see if it\'s a good fit — no commitment required.' },
    { q: 'What ages and grades do you work with?', a: 'Josh works with students from middle school through graduate school. Services range from Regents prep (grades 8–12) to GMAT prep for adults.' },
];

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Compassionate Test Prep',
    description: 'Expert SAT, ACT, GMAT, Regents, AP English and math tutoring in Brooklyn, NY.',
    url: 'https://www.compassionatetestprep.com',
    telephone: '+1-555-000-0000',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Brooklyn',
        addressRegion: 'NY',
        addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.6782, longitude: -73.9442 },
    areaServed: ['Brooklyn', 'New York City', 'Online'],
    priceRange: '$$',
    openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '4' },
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
                                📍 Brooklyn, NY &bull; Online Worldwide
                            </div>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Test Prep That Puts{' '}
                                <span className="text-accent">Students First</span>
                            </h1>
                            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                                Highly personalized SAT, ACT, GMAT, Regents & math tutoring in Brooklyn, NY. 25+ years of experience. 2,000+ students. Real results with zero burn-out.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link href="/contact" id="hero-cta-primary" className="btn-primary text-base px-8 py-4">
                                    Contact for a Free Session
                                </Link>
                                <Link href="#services" id="hero-cta-secondary" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-base px-8 py-4">
                                    Our Services
                                </Link>
                            </div>
                        </div>
                        {/* Hero image + stats */}
                        <div className="flex-shrink-0 flex flex-col gap-4 w-full md:w-72">
                            <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                                    alt="Students studying together for SAT and ACT test prep"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 288px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-primary/70 backdrop-blur px-3 py-1 rounded-full">
                                    One-on-one sessions · Online & In-Person
                                </div>
                            </div>
                            {[
                                { val: '25+', label: 'Years Experience' },
                                { val: '2,000+', label: 'Students Helped' },
                                { val: '210+', label: 'Avg SAT Point Gain' },
                            ].map((s) => (
                                <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/20">
                                    <div className="font-heading text-3xl font-bold text-white mb-1">{s.val}</div>
                                    <div className="text-white/70 text-sm">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── SERVICES ───── */}
                <section id="services" className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="section-heading">What We Offer</h2>
                            <p className="section-subheading max-w-2xl mx-auto">
                                Every subject, one compassionate approach — customized to your student's needs.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s) => (
                                <Link key={s.href} href={s.href} className="group cursor-pointer bg-surface rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col" id={`service-card-${s.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <div className="relative w-full h-36 overflow-hidden">
                                        <Image
                                            src={s.img}
                                            alt={`${s.title} tutoring in Brooklyn, NY`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                        <div className="absolute bottom-2 left-3 text-2xl">{s.icon}</div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="font-heading font-semibold text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                                            {s.title}
                                        </h3>
                                        <p className="text-muted text-sm leading-relaxed flex-1">{s.desc}</p>
                                        <div className="mt-4 text-accent text-sm font-medium flex items-center gap-1">
                                            Learn more <span>→</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── PRACTICE APPS ───── */}
                <section id="practice-apps" className="py-20 px-4 sm:px-6 bg-primary/5">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="text-accent font-semibold tracking-wider text-sm">NEW · PRACTICE APPS</span>
                            <h2 className="section-heading mt-2">The practice tools my students use</h2>
                            <p className="section-subheading">
                                SAT, PSAT, ACT and SHSAT Blaster turn practice into a journey: every skill is a stop on a map, with adaptive questions, timed tests and full explanations. Now in early access.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link href="/practice-apps" className="btn-primary" id="home-apps-cta">Explore the apps →</Link>
                            </div>
                        </div>
                        <Link href="/practice-apps" className="block relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow" id="home-apps-image">
                            <Image src="/apps/shsat-blaster-nyc.jpg" alt="SHSAT Blaster New York City map" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </Link>
                    </div>
                </section>

                {/* ───── PHILOSOPHY ───── */}
                <section id="philosophy" className="bg-surface overflow-hidden">
                    {/* Top: full-bleed image | text side-by-side */}
                    <div className="grid md:grid-cols-2 min-h-[480px]">
                        {/* Image panel — full height, no padding */}
                        <div className="relative min-h-[320px] md:min-h-0 order-2 md:order-1">
                            <Image
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=85"
                                alt="One-on-one tutoring session — a tutor working closely with a student"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Subtle overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                            {/* Floating badge */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-2xl px-5 py-3 shadow-lg border border-white/60">
                                <div className="font-heading font-bold text-primary text-xl">2,000+</div>
                                <div className="text-muted text-xs mt-0.5">Students helped since 2001</div>
                            </div>
                        </div>

                        {/* Text panel */}
                        <div className="order-1 md:order-2 flex flex-col justify-center px-8 py-16 md:px-14 lg:px-16">
                            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Approach</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
                                Tutoring with Heart —<br className="hidden md:block" /> and Data
                            </h2>
                            <p className="text-textMain/75 leading-relaxed mb-4 text-[15px]">
                                There&apos;s too much testing in education these days. But testing doesn&apos;t have to be painful. With the right approach, it can actually be fun, increase self-confidence, and open doors to exciting new opportunities.
                            </p>
                            <p className="text-textMain/75 leading-relaxed mb-8 text-[15px]">
                                At CTP, we meet students where they are — diagnosing careless errors vs. knowledge gaps, tracking progress through proprietary data, and adapting constantly. Always communicating openly with students and parents.
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
                                        desc: 'We diagnose careless errors vs. knowledge gaps using proprietary historical student data.',
                                        svg: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                            </svg>
                                        ),
                                        gradient: 'from-accent to-accent-light',
                                    },
                                    {
                                        num: '03',
                                        title: 'Zero Anxiety',
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
                                        title: 'Proven Results',
                                        desc: '2,000+ students served since 2001. 25+ years of score improvements across every major test.',
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

                {/* ───── TESTIMONIALS ───── */}
                <section id="testimonials-preview" className="py-20 px-4 sm:px-6 bg-primary/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="section-heading">What Students & Parents Say</h2>
                            <p className="section-subheading">Real results from real families.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {testimonials.map((t) => (
                                <div key={t.name} className="card relative">
                                    <div className="text-accent text-4xl font-heading leading-none mb-4">&ldquo;</div>
                                    <p className="text-textMain/80 leading-relaxed mb-6 italic">{t.text}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                                                <Image
                                                    src={t.avatar}
                                                    alt={`${t.name} testimonial photo`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="44px"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-primary">{t.name}</div>
                                                <div className="text-xs text-muted">{t.test}</div>
                                            </div>
                                        </div>
                                        {t.improvement && (
                                            <span className="bg-primary text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                                                {t.improvement}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex text-accent gap-0.5 mt-3">{'★★★★★'}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link href="/testimonials" className="btn-outline" id="testimonials-see-all">
                                Read All Testimonials
                            </Link>
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
                                    alt="Professional tutor working with a student in Brooklyn, NY"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                            </div>
                            <div className="md:col-span-3 p-10 text-white">
                                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Your Tutor</span>
                                <h2 className="font-heading text-3xl font-bold mt-2 mb-4">Hi, I&apos;m Josh.</h2>
                                <p className="text-white/80 leading-relaxed mb-3">
                                    Born and raised in Brooklyn, NY, I&apos;ve been tutoring full-time since 2001. That&apos;s over 2,000 students and counting.
                                </p>
                                <p className="text-white/80 leading-relaxed mb-6">
                                    I believe in a systematic, data-driven approach — diagnosing students&apos; mistakes, running efficient sessions, and delivering great score outcomes so students can get back to the activities they love sooner.
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
                            → See our Brooklyn, NY local tutoring page
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
