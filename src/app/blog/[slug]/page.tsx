import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This is a static blog post template.
// In a future phase, replace with MDX or a headless CMS like Sanity.
export const metadata: Metadata = {
    title: 'Blog Post | Compassionate Test Prep',
};

const posts: Record<string, {
    title: string;
    date: string;
    category: string;
    content: string;
}> = {
    'how-to-improve-sat-score-in-3-months': {
        title: 'How to Improve Your SAT Score in 3 Months',
        date: 'February 2025',
        category: 'SAT Prep',
        content: `
A realistic, data-driven 3-month plan to raise your SAT score.

**Month 1: Diagnose**
Take a full-length, timed practice SAT under real test conditions. Score it section by section and categorize every wrong answer as either a *careless error* or a *knowledge gap*. This is the most important step many students skip.

**Month 2: Target**
Focus 80% of your study time on your top two or three weakness areas — not everything. Use Khan Academy SAT or College Board official practice tests. Work on pacing: most students lose points to time pressure, not knowledge.

**Month 3: Simulate & Refine**
Take two more full-length practice tests. Track your progress. In the final two weeks, do light review and plenty of rest — burnout before test day is a real risk.

**The Bottom Line**
Consistent, targeted practice beats passive reading every time. If you're not sure what your gaps are, a data-driven tutor can cut months off your prep timeline.
    `,
    },
    'sat-vs-act-which-should-you-take': {
        title: 'SAT vs ACT: Which Test Should Your Child Take?',
        date: 'January 2025',
        category: 'Test Strategy',
        content: `
The question every family asks — here's how to decide.

**The Short Answer**
Take both a real SAT practice test and a real ACT practice test, convert the scores to a common scale, and go with whichever is higher. Simple.

**Key Differences**
- The ACT has a Science section (the SAT does not)
- The SAT is more puzzle-oriented; the ACT is more straightforward
- The ACT is faster-paced (more questions per minute)
- Both are accepted equally by all U.S. colleges

**Signs Your Child Might Prefer the ACT**
- Strong in science and reading charts
- Comfortable with speed

**Signs Your Child Might Prefer the SAT**
- Good at analytical reasoning
- Does better with more time per question

When in doubt, book a free consultation. A short diagnostic session with Josh can reveal the right test in one hour.
    `,
    },
    'how-to-study-for-ny-regents-exams': {
        title: 'How to Study for NY Regents Exams: A Complete Guide',
        date: 'December 2024',
        category: 'Regents',
        content: `
Everything Brooklyn students need to know about Regents exams.

**What Are Regents Exams?**
Regents are New York State standardized high school exams required for graduation with a Regents diploma. There are 10+ Regents exams covering subjects like Algebra, English, Living Environment, US History, and more.

**When to Start Studying**
- 6–8 weeks before the exam for most students
- 10–12 weeks if the subject is a major weakness

**How to Study**
1. Get the official NY State Regents prep booklets (free online)
2. Do past Regents exams in full (they're all free on nysedregents.org)
3. Score each exam and categorize mistakes by topic
4. Target your weak topics specifically

**Pro Tip**
Regents exams are very predictable. The question types repeat year after year. A good tutor can show you exactly which patterns to look for.
    `,
    },
    'gmat-prep-tips-for-busy-professionals': {
        title: '5 GMAT Prep Tips for Busy Working Professionals',
        date: 'November 2024',
        category: 'GMAT Prep',
        content: `
Studying for the GMAT while working full-time? These five strategies make the biggest difference.

**1. Study in micro-sessions**
30 minutes every day beats 4 hours on Saturday. Consistent daily exposure keeps concepts fresh.

**2. Prioritize quant early**
Most professionals have rustier math than verbal skills. Start with quant — it takes more time to rebuild.

**3. Master the question types, not just the content**
The GMAT tests reasoning, not just knowledge. Learn to identify question patterns before drilling content.

**4. Use official GMAT prep materials**
The GMAC's own practice tests (GMAT Official Practice) are the gold standard. Third-party tests vary widely in quality.

**5. Get targeted coaching**
With limited time, you can't afford to study the wrong things. A tutor who analyzes your specific error patterns will save you weeks.

The GMAT rewards efficient, strategic preparation — which is exactly what Compassionate Test Prep specializes in.
    `,
    },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts[params.slug];

    if (!post) {
        return (
            <>
                <Header />
                <main className="py-20 px-4 sm:px-6 text-center bg-bg min-h-screen">
                    <h1 className="font-heading text-3xl font-bold text-primary mb-4">Post Not Found</h1>
                    <p className="text-muted mb-6">This article doesn&apos;t exist yet.</p>
                    <Link href="/blog" className="btn-primary">← Back to Blog</Link>
                </main>
                <Footer />
            </>
        );
    }

    const paragraphs = post.content.trim().split('\n\n');

    return (
        <>
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto">
                        <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-flex items-center gap-1">← Blog</Link>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full font-medium">{post.category}</span>
                            <span className="text-white/50 text-sm">{post.date}</span>
                        </div>
                        <h1 className="font-heading text-3xl md:text-4xl font-bold">{post.title}</h1>
                    </div>
                </section>

                <article className="py-16 px-4 sm:px-6 bg-bg">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="prose prose-lg max-w-none text-textMain/80 leading-relaxed">
                                {paragraphs.map((para, i) => {
                                    if (para.startsWith('**') && para.endsWith('**')) {
                                        return <h2 key={i} className="font-heading text-xl font-bold text-primary mt-8 mb-3">{para.replace(/\*\*/g, '')}</h2>;
                                    }
                                    if (para.startsWith('- ')) {
                                        const items = para.split('\n').filter(l => l.startsWith('- '));
                                        return <ul key={i} className="list-disc pl-6 space-y-2">{items.map((item, j) => <li key={j}>{item.replace('- ', '')}</li>)}</ul>;
                                    }
                                    // Handle inline bold
                                    const parts = para.split(/(\*\*[^*]+\*\*)/g);
                                    return (
                                        <p key={i} className="mb-4">
                                            {parts.map((part, j) =>
                                                part.startsWith('**') && part.endsWith('**')
                                                    ? <strong key={j} className="text-primary">{part.replace(/\*\*/g, '')}</strong>
                                                    : part
                                            )}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-primary rounded-2xl text-center">
                            <p className="text-white font-semibold mb-4">Ready to put this into practice?</p>
                            <Link href="/contact" className="btn-primary" id={`blog-${params.slug}-cta`}>Book a Free Session with Josh</Link>
                        </div>

                        <div className="mt-6 text-center">
                            <Link href="/blog" className="text-accent hover:underline text-sm">← Back to all articles</Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
