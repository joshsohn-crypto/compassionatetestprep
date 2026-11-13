'use client';
import { useEffect } from 'react';

// Fades and slides [data-reveal] elements into view as the visitor scrolls.
// Content stays visible if scripts are off or the visitor prefers reduced motion.
export default function Motion() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
        if (!('IntersectionObserver' in window)) return;
        document.documentElement.classList.add('motion');
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
            }),
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
    return null;
}
