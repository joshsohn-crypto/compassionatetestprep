/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Navy, brass and cream: the same family as my session reports and emails
                primary: {
                    DEFAULT: '#1F3864',
                    light: '#2A4F8F',
                    dark: '#142850',
                },
                accent: {
                    DEFAULT: '#8A6A2E',
                    light: '#D9B86A',
                    dark: '#6E5323',
                },
                bg: '#FAF7F2',
                surface: '#FFFFFF',
                textMain: '#1C2433',
                muted: '#5F6672',
            },
            fontFamily: {
                heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                body: ['Georgia', '"Times New Roman"', 'serif'],
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.5rem',
            },
        },
    },
    plugins: [],
};
