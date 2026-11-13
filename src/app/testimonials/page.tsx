import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Student Testimonials | Compassionate Test Prep Brooklyn NY',
    description:
        'Read real reviews from students and parents who worked with Josh at Compassionate Test Prep. SAT, ACT, GMAT, math, and more — real results, real stories.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/testimonials' },
};

const testimonials = [
    {
        name: 'David T.',
        test: 'SAT Prep',
        improvement: '+210 pts',
        text: "Josh was an amazing SAT tutor! He really took the time to figure out where I needed help and broke things down in a way that made sense. The SAT can feel overwhelming, but Josh made it way less stressful by teaching me test-taking strategies and helping build confidence in all sections — especially reading comprehension. Thanks to his help, my score went up by 210 points, and I feel so much more prepared for college.",
    },
    {
        name: 'Lena C.',
        test: 'Parent',
        improvement: '',
        text: "As a parent, I couldn't be more grateful for Josh's incredible support and guidance with my child's education. From the very first session, it was clear that Josh is not only knowledgeable but cares deeply about his students. He has a unique ability to connect, making learning fun and engaging. Josh tailors each lesson to fit my child's individual needs, helping her build confidence and mastery in subjects that were once challenging. I've seen a noticeable improvement in both her grades and attitude toward learning. Josh has made a lasting impact, and I'm so thankful for his dedication and expertise. I highly recommend him to any parent looking for a tutor who wants to invest in their child's growth, success, and academic engagement.",
    },
    {
        name: 'Sam R.',
        test: 'Precalculus / Math',
        improvement: '',
        text: "As a parent, I'm grateful for Josh's help with my child's precalculus. He simplifies complex topics like trigonometry, logarithms, and quadratics, making them easier to understand. Josh's clear explanations have boosted my child's confidence and grades. Precalculus, once intimidating, is now much more manageable. I highly recommend Josh to any parent seeking help with precalculus.",
    },
    {
        name: 'Will A.',
        test: 'General Tutoring',
        improvement: '',
        text: "I've had the privilege of working with Josh, and I can confidently say that he is one of the best tutors out there. His approach is patient and thorough, making sure that complex concepts are broken down in a way that's easy to understand. Josh took the time to understand my learning style and adapted his methods to suit me. I've gained not only knowledge but also confidence in my abilities, and I'm incredibly grateful for his support.",
    },
];

const schemaReviews = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Compassionate Test Prep',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: String(testimonials.length) },
    review: testimonials.map((t) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: t.text,
    })),
};

export default function TestimonialsPage() {
    return (
        <>
            <JsonLd data={schemaReviews} />
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">What Our Students & Parents Say</h1>
                        <div className="flex justify-center items-center gap-6 mt-6">
                            <div className="text-center"><div className="font-heading text-3xl font-bold text-accent">5.0</div><div className="text-white/70 text-sm">Average Rating</div></div>
                            <div className="text-accent text-2xl">★★★★★</div>
                            <div className="text-center"><div className="font-heading text-3xl font-bold text-accent">{testimonials.length}+</div><div className="text-white/70 text-sm">Reviews</div></div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                        {testimonials.map((t) => (
                            <div key={t.name} className="card relative flex flex-col">
                                <div className="text-accent text-5xl font-heading leading-none mb-4">&ldquo;</div>
                                <p className="text-textMain/80 leading-relaxed flex-1 italic mb-6">{t.text}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                    <div>
                                        <div className="font-semibold text-primary">{t.name}</div>
                                        <div className="text-xs text-muted">{t.test}</div>
                                        <div className="flex text-accent gap-0.5 mt-1 text-sm">★★★★★</div>
                                    </div>
                                    {t.improvement && (
                                        <span className="bg-primary text-white font-bold text-base px-4 py-2 rounded-xl">
                                            {t.improvement}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 bg-primary text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
                        <p className="text-white/80 mb-8">Contact us for a free 30-minute intro session and see what Compassionate Test Prep can do for you.</p>
                        <a href="/contact" className="btn-primary text-base px-8 py-4" id="testimonials-cta">Contact for a Free Session</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
