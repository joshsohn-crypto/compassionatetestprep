'use client';
import Link from 'next/link';
import { useState } from 'react';
import { practiceApps } from '@/lib/apps';

const navLinks = [
    { href: '/', label: 'Home' },
    {
        label: 'Services',
        children: [
            { href: '/sat-prep', label: 'SAT Prep' },
            { href: '/shsat-prep', label: 'SHSAT Prep' },
            { href: '/act-prep', label: 'ACT Prep' },
            { href: '/gmat-prep', label: 'GMAT Prep' },
            { href: '/regents-review', label: 'Regents Review' },
            { href: '/ap-english', label: 'AP English' },
            { href: '/math-tutoring', label: 'Math Tutoring' },
        ],
    },
    { href: '/practice-apps', label: 'Practice Apps' },
    { href: '/about', label: 'About' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            {/* Site-wide practice apps bar */}
            <div className="bg-accent text-white text-xs sm:text-sm sweep" id="apps-bar">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                    <span className="font-semibold"><span className="bob">✨</span> New: free practice apps</span>
                    {practiceApps.map((a) => (
                        <a key={a.id} href={a.href} target="_blank" rel="noopener" className="underline underline-offset-2 decoration-white/60 hover:decoration-white font-medium" id={`apps-bar-${a.id}`}>
                            {a.icon} {a.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" id="site-logo">
                    <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-heading font-bold text-sm">
                        CTP
                    </span>
                    <span className="font-heading font-bold text-primary text-xl leading-none hidden sm:block">
                        Compassionate<br />
                        <span className="text-accent text-sm font-medium">Test Prep</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium" id="desktop-nav">
                    {navLinks.map((link) =>
                        link.children ? (
                            <div key={link.label} className="relative group">
                                <button
                                    className="flex items-center gap-1 text-textMain hover:text-primary transition-colors"
                                    aria-haspopup="true"
                                >
                                    {link.label}
                                    <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute top-full left-0 pt-2 w-44 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                                    <div className="bg-surface rounded-xl shadow-lg border border-gray-100 py-2">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-2 text-sm text-textMain hover:bg-bg hover:text-primary transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href!}
                                className={link.href === '/practice-apps'
                                    ? 'liftoff inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors'
                                    : 'text-textMain hover:text-primary transition-colors'}
                            >
                                {link.href === '/practice-apps' && <span aria-hidden className="rocket">🚀</span>}
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link href="/contact" id="header-book-btn" className="btn-primary text-sm py-2">
                        Book Free Session
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg text-primary hover:bg-bg transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    id="mobile-menu-toggle"
                >
                    {mobileOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-surface border-t border-gray-100 px-4 py-4 space-y-2" id="mobile-nav">
                    <Link href="/" className="block py-2 text-textMain hover:text-primary font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
                    <button
                        className="flex items-center justify-between w-full py-2 text-textMain hover:text-primary font-medium"
                        onClick={() => setServicesOpen(!servicesOpen)}
                    >
                        Services
                        <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {servicesOpen && (
                        <div className="pl-4 space-y-1">
                            {navLinks[1].children?.map((child) => (
                                <Link key={child.href} href={child.href} className="block py-1.5 text-sm text-muted hover:text-primary" onClick={() => setMobileOpen(false)}>
                                    {child.label}
                                </Link>
                            ))}
                        </div>
                    )}
                    <Link href="/practice-apps" className="block py-2 text-primary font-semibold" onClick={() => setMobileOpen(false)} id="mobile-apps-link">🚀 Practice Apps</Link>
                    <Link href="/about" className="block py-2 text-textMain hover:text-primary font-medium" onClick={() => setMobileOpen(false)}>About</Link>
                    <Link href="/testimonials" className="block py-2 text-textMain hover:text-primary font-medium" onClick={() => setMobileOpen(false)}>Testimonials</Link>
                    <Link href="/blog" className="block py-2 text-textMain hover:text-primary font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
                    <Link href="/contact" className="btn-primary w-full justify-center mt-3" onClick={() => setMobileOpen(false)} id="mobile-book-btn">
                        Book Free Session
                    </Link>
                </div>
            )}
        </header>
    );
}
