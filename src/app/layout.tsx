import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Compassionate Test Prep | Expert Tutoring in Brooklyn, NY',
        template: '%s | Compassionate Test Prep',
    },
    description:
        'Expert SAT, ACT, GMAT, Regents, AP English, and math tutoring in Brooklyn, NY. 25+ years, 2000+ students. Tutoring with heart.',
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
            <body>{children}</body>
        </html>
    );
}
