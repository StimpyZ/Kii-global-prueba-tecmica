/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#0C071D',
                secondary: '#0B2073',
                fucsia: '#5B3D7D',
                aquamarine: '#009FE3',
                shadowBlue: 'rgba(9, 151, 124, 0.1)',
                dark: '#0a0618'
            },
            fontFamily: {
                gothan: ['Gotham', 'sans-serif']
            }
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px'
        }
    },
    plugins: []
}
