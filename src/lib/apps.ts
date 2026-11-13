// The four Blaster practice apps, shared by the header, footer, homepage and Practice Apps page.
export type PracticeApp = { id: string; icon: string; name: string; who: string; short: string; href: string; img: string | null };

export const practiceApps: PracticeApp[] = [
    { id: 'sat', icon: '🌍', name: 'SAT Blaster', who: 'High schoolers', short: 'A trip around the world, one SAT skill per stop.', href: 'https://zingy-elf-f0255b.netlify.app/?src=site', img: '/apps/sat-blaster-map.jpg' },
    { id: 'psat', icon: '🚀', name: 'PSAT Blaster', who: '9th and 10th graders', short: 'A road to the Moon for younger students.', href: 'https://zingy-elf-f0255b.netlify.app/psat/?src=site', img: '/apps/psat-blaster-moon.jpg' },
    { id: 'shsat', icon: '🗽', name: 'SHSAT Blaster', who: '7th and 8th graders', short: 'Every skill is a stop on a map of New York City.', href: 'https://ctp-shsat-blaster.netlify.app/?src=site', img: '/apps/shsat-blaster-nyc.jpg' },
    { id: 'act', icon: '🧭', name: 'ACT Blaster', who: 'ACT test-takers', short: 'A journey starting on the Chicago Riverwalk, built from real ACT data.', href: 'https://ctp-act-blaster.netlify.app/?src=site', img: '/apps/act-blaster-chicago.jpg' },
];
