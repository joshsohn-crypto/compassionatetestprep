import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Policies | Compassionate Test Prep',
    description: 'Privacy policy and terms of service for Compassionate Test Prep.',
};

export default function PoliciesPage() {
    return (
        <>
            <Header />
            <main className="py-20 px-4 sm:px-6 bg-bg min-h-screen">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10">Policies</h1>

                    <section className="bg-surface rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
                        <h2 className="font-heading text-2xl font-semibold text-primary mb-4">Privacy Policy</h2>
                        <div className="prose prose-sm text-textMain/80 space-y-3 leading-relaxed">
                            <p>Compassionate Test Prep (&quot;we&quot;, &quot;Josh&quot;) values your privacy. This policy describes how we collect, use, and protect your information when you use our website.</p>
                            <h3 className="font-semibold text-primary">Information We Collect</h3>
                            <p>When you submit our contact form or get in touch, we collect your name, email address, and any information you voluntarily share. We do not sell this data to third parties.</p>
                            <h3 className="font-semibold text-primary">How We Use Your Information</h3>
                            <p>We use your information solely to respond to your inquiry, schedule sessions, and communicate about your tutoring services. We do not use your information for marketing without consent.</p>
                            <h3 className="font-semibold text-primary">Cookies</h3>
                            <p>This website may use analytics cookies (such as Google Analytics) to understand how visitors use our site. You can opt out via your browser settings.</p>
                            <h3 className="font-semibold text-primary">Contact</h3>
                            <p>For privacy questions, contact us via the <Link href="/contact" className="text-accent hover:underline">contact page</Link>.</p>
                        </div>
                    </section>

                    <section className="bg-surface rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h2 className="font-heading text-2xl font-semibold text-primary mb-4">Session Policies</h2>
                        <div className="space-y-4 text-textMain/80 text-sm leading-relaxed">
                            <div>
                                <h3 className="font-semibold text-primary mb-1">Cancellations</h3>
                                <p>Please provide at least 24 hours&apos; notice for session cancellations or rescheduling. Late cancellations may be subject to a fee.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary mb-1">Payment</h3>
                                <p>Payment terms are discussed and agreed upon before sessions begin. Please contact Josh for current rates.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary mb-1">Scheduling</h3>
                                <p>Sessions are scheduled based on mutual availability. Use the booking page or contact form to request your preferred time.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
