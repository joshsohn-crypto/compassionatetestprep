import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Test Prep Blog | Tips, Strategies & Study Guides | Compassionate Test Prep',
    description:
        'Expert test prep tips, SAT/ACT strategies, and study guides from Compassionate Test Prep. Free resources for students and parents in Brooklyn, NY and beyond.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/blog' },
};

// Seed blog posts — replace with CMS or MDX later
const posts = [
    {
        slug: 'how-to-improve-sat-score-in-3-months',
        title: 'How to Improve Your SAT Score in 3 Months',
        excerpt: 'A realistic, data-driven 3-month plan to raise your SAT score — from diagnostic to test day.',
        date: 'February 2025',
        category: 'SAT Prep',
        readTime: '7 min read',
    },
    {
        slug: 'sat-vs-act-which-should-you-take',
        title: 'SAT vs ACT: Which Test Should Your Child Take?',
        excerpt: "The question every family asks. Here's how to decide — with a simple at-home test to figure out which fits your student's strengths.",
        date: 'January 2025',
        category: 'Test Strategy',
        readTime: '5 min read',
    },
    {
        slug: 'how-to-study-for-ny-regents-exams',
        title: 'How to Study for NY Regents Exams: A Complete Guide',
        excerpt: 'Everything Brooklyn students and parents need to know about Regents exams — what they test, when to start, and how to prepare.',
        date: 'December 2024',
        category: 'Regents',
        readTime: '8 min read',
    },
    {
        slug: 'gmat-prep-tips-for-busy-professionals',
        title: '5 GMAT Prep Tips for Busy Working Professionals',
        excerpt: 'Studying for the GMAT while working full-time? Here are the five strategies that make the biggest difference.',
        date: 'November 2024',
        category: 'GMAT Prep',
        readTime: '6 min read',
    },
];

export default function BlogPage() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">Test Prep Blog</h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Free resources, strategies, and guides from 25+ years of tutoring experience. No fluff — just what works.
                        </p>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="card group cursor-pointer" id={`blog-post-${post.slug}`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                                        <span className="text-muted text-xs">{post.readTime}</span>
                                    </div>
                                    <h2 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">{post.title}</h2>
                                    <p className="text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted">{post.date}</span>
                                        <span className="text-accent text-sm font-medium">Read more →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-muted text-sm">More articles coming soon. Have a question? <Link href="/contact" className="text-accent hover:underline">Ask Josh directly →</Link></p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
