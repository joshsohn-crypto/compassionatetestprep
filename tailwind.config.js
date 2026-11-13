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
                primary: {
                    DEFAULT: '#1A5C3A',
                    light: '#2A7A50',
                    dark: '#123F28',
                },
                accent: {
                    DEFAULT: '#E8643A',
                    light: '#F07A52',
                    dark: '#C94E28',
                },
                bg: '#F8F9FA',
                surface: '#FFFFFF',
                textMain: '#1C2B2B',
                muted: '#6B7280',
            },
            fontFamily: {
                heading: ['Lora', 'Georgia', 'serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.5rem',
            },
        },
    },
    plugins: [],
};
