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
            screens: {
                light: { raw: "(prefers-color-scheme: light)" },
                dark: { raw: "(prefers-color-scheme: dark)" }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ]
}