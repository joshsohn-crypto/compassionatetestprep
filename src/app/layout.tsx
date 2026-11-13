import type { Metadata } from 'next';
import './globals.css';
import Motion from '@/components/Motion';

export const metadata: Metadata = {
    title: {
        default: 'Compassionate Test Prep | Expert Tutoring in Brooklyn, NY',
        template: '%s | Compassionate Test Prep',
    },
    description:
        'One-on-one SAT, SHSAT and ACT prep in Brooklyn and online from Josh Sohn: 25+ years, 2,200+ students, and practice apps he built himself.',
    metadataBase: new URL('https://www.compassionatetestprep.com'),
    openGraph: {
        siteName: 'Compassionate Test Prep',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>{children}<Motion /></body>
        </html>
    );
}
