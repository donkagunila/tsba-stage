import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'
import {parseColor} from 'tailwindcss/lib/util/color'


const toRGB = (value) => {
    return parseColor(value).color.join(' ')
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['Satoshi']
            },
            fontSize: {
                xss: '0.6rem'
            },
            container: {
                center: true
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%'
            },
            strokeWidth: {
                0.5: 0.5,
                1.5: 1.5,
                2.5: 2.5
            },
            colors: {
                primary: '#05303c',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                accentText: '#ecb91e',
                success: 'rgb(var(--color-success) / <alpha-value>)',
                info: 'rgb(var(--color-info) / <alpha-value>)',
                warning: 'rgb(var(--color-warning) / <alpha-value>)',
                pending: 'rgb(var(--color-pending) / <alpha-value>)',
                danger: 'rgb(var(--color-danger) / <alpha-value>)',
                light: 'rgb(var(--color-light) / <alpha-value>)',
                dark: 'rgb(var(--color-dark) / <alpha-value>)',
                theme: {
                    1: 'rgb(var(--color-theme-1) / <alpha-value>)',
                    2: 'rgb(var(--color-theme-2) / <alpha-value>)'
                },
                darkmode: {
                    50: 'rgb(var(--color-darkmode-50) / <alpha-value>)',
                    100: 'rgb(var(--color-darkmode-100) / <alpha-value>)',
                    200: 'rgb(var(--color-darkmode-200) / <alpha-value>)',
                    300: 'rgb(var(--color-darkmode-300) / <alpha-value>)',
                    400: 'rgb(var(--color-darkmode-400) / <alpha-value>)',
                    500: 'rgb(var(--color-darkmode-500) / <alpha-value>)',
                    600: 'rgb(var(--color-darkmode-600) / <alpha-value>)',
                    700: 'rgb(var(--color-darkmode-700) / <alpha-value>)',
                    800: 'rgb(var(--color-darkmode-800) / <alpha-value>)',
                    900: 'rgb(var(--color-darkmode-900) / <alpha-value>)'
                },
                accent: {
                    50: 'rgb(var(--color-accent-50) / <alpha-value>)',
                    100: 'rgb(var(--color-accent-100) / <alpha-value>)',
                    200: 'rgb(var(--color-accent-200) / <alpha-value>)',
                    300: 'rgb(var(--color-accent-300) / <alpha-value>)',
                    400: 'rgb(var(--color-accent-400) / <alpha-value>)',
                    500: 'rgb(var(--color-accent-500) / <alpha-value>)',
                    600: 'rgb(var(--color-accent-600) / <alpha-value>)',
                    700: 'rgb(var(--color-accent-700) / <alpha-value>)',
                    800: 'rgb(var(--color-accent-800) / <alpha-value>)',
                    900: 'rgb(var(--color-accent-900) / <alpha-value>)'
                }
            }
        }
    },
    plugins: [
        plugin(function ({addBase}) {
            addBase({
                ':root': {
                    '--color-primary': toRGB(colors.emerald['700']),
                    '--color-theme-1': toRGB(colors.emerald['700']),
                    '--color-theme-2': toRGB(colors.emerald['700'])
                },
                '.dark': {
                    '--color-primary': toRGB(colors.slate['800']),
                    '--color-darkmode-50': '87 103 132',
                    '--color-darkmode-100': '74 90 121',
                    '--color-darkmode-200': '65 81 114',
                    '--color-darkmode-300': '53 69 103',
                    '--color-darkmode-400': '48 61 93',
                    '--color-darkmode-500': '41 53 82',
                    '--color-darkmode-600': '40 51 78',
                    '--color-darkmode-700': '35 45 69',
                    '--color-darkmode-800': '27 37 59',
                    '--color-darkmode-900': '15 23 42'
                },
                '.accent': {
                    '--color-primary': toRGB(colors.slate['800']),
                    '--color-accent-50': '87 103 132',
                    '--color-accent-100': '74 90 121',
                    '--color-accent-200': '65 81 114',
                    '--color-accent-300': toRGB(colors.amber['300']),
                    '--color-accent-400': toRGB(colors.amber['400']),
                    '--color-accent-500': toRGB(colors.amber['500']),
                    '--color-accent-600': '40 51 78',
                    '--color-accent-700': '35 45 69',
                    '--color-accent-800': '27 37 59',
                    '--color-accent-900': '15 23 42'
                },
                '.theme-1': {
                    '--color-primary': toRGB(colors.emerald['800']),
                    '--color-theme-1': toRGB(colors.emerald['900']),
                    '--color-theme-2': toRGB(colors.emerald['900']),
                    '--color-accent-500': toRGB(colors.amber['500'])
                },
                '.theme-2': {
                    '--color-primary': toRGB(colors.violet['500']),
                    '--color-theme-1': toRGB(colors.violet['600']),
                    '--color-theme-2': toRGB(colors.violet['900'])
                },
                '.theme-3': {
                    '--color-primary': toRGB(colors.orange['400']),
                    '--color-theme-1': toRGB(colors.amber['800']),
                    '--color-theme-2': toRGB(colors.amber['900'])
                },
                '.theme-4': {
                    '--color-primary': toRGB(colors.slate['800']),
                    '--color-theme-1': toRGB(colors.slate['900']),
                    '--color-theme-2': toRGB(colors.slate['900'])
                },
                '.theme-5': {
                    '--color-primary': toRGB(colors.pink['400']),
                    '--color-theme-1': toRGB(colors.pink['500']),
                    '--color-theme-2': toRGB(colors.pink['500'])
                }
            })
        })
    ]
}

