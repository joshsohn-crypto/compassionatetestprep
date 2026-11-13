import Link from 'next/link';

const services = [
    { href: '/sat-prep', label: 'SAT Prep' },
    { href: '/act-prep', label: 'ACT Prep' },
    { href: '/gmat-prep', label: 'GMAT Prep' },
    { href: '/regents-review', label: 'Regents Review' },
    { href: '/ap-english', label: 'AP English' },
    { href: '/math-tutoring', label: 'Math Tutoring' },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-heading font-bold text-sm">CTP</span>
                        <span className="font-heading font-semibold text-lg">Compassionate Test Prep</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                        Expert tutoring in Brooklyn, NY. 25+ years of experience, 2,000+ students helped. Tutoring with heart.
                    </p>
                    <p className="mt-4 text-white/60 text-sm">📍 Brooklyn, NY</p>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-heading font-semibold text-base mb-4 text-white/90">Our Services</h3>
                    <ul className="space-y-2">
                        {services.map((s) => (
                            <li key={s.href}>
                                <Link href={s.href} className="text-white/70 hover:text-white text-sm transition-colors">
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-heading font-semibold text-base mb-4 text-white/90">Quick Links</h3>
                    <ul className="space-y-2">
                        {[
                            { href: '/about', label: 'About Josh' },
                            { href: '/testimonials', label: 'Testimonials' },
                            { href: '/tutoring-brooklyn-ny', label: 'Brooklyn Tutoring' },
                            { href: 'https://medium.com/@joshsohn', label: 'Medium Blog ↗', external: true },
                            { href: '/contact', label: 'Book a Session' },
                            { href: '/policies', label: 'Policies' },
                        ].map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="text-white/70 hover:text-white text-sm transition-colors"
                                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 py-5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/50 text-xs">
                    <p>© {new Date().getFullYear()} Compassionate Test Prep. All rights reserved.</p>
                    <Link href="/policies" className="hover:text-white transition-colors">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
