const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        content: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/ui'),
    ]
}