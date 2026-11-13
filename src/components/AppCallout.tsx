import Link from 'next/link';
import { practiceApps } from '@/lib/apps';

// A strip that points visitors on a service page straight to the matching practice app(s).
export default function AppCallout({ ids, title }: { ids: string[]; title: string }) {
    const list = practiceApps.filter((a) => ids.includes(a.id));
    return (
        <section className="py-12 px-4 sm:px-6 bg-primary/5 border-y border-primary/10" id="app-callout">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex-1">
                    <span className="inline-block bg-accent text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">FREE PRACTICE APP</span>
                    <h2 className="font-heading text-2xl font-bold text-primary mt-3 mb-2">{title}</h2>
                    <p className="text-muted text-sm">
                        The same approach I use one on one, as a practice app: adaptive questions, timed tests and full explanations.{' '}
                        <Link href="/practice-apps" className="text-primary font-semibold hover:text-accent">How it works →</Link>
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    {list.map((a) => (
                        <a key={a.id} href={a.href} target="_blank" rel="noopener" className="btn-primary whitespace-nowrap" id={`callout-${a.id}`}>
                            {a.icon} Start {a.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
