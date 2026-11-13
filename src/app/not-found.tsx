import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="bg-bg min-h-[70vh] flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="font-heading text-8xl font-bold text-primary/20 mb-4">404</div>
                    <h1 className="font-heading text-3xl font-bold text-primary mb-4">Page Not Found</h1>
                    <p className="text-muted mb-8">Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/" className="btn-primary" id="not-found-home">Go Home</Link>
                        <Link href="/contact" className="btn-outline" id="not-found-contact">Book a Session</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
