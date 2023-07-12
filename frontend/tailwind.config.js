/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'home-black-letters': '#212021',
        'home-gray-subtexts': '#647491',
        'home-blue-addi': '#00AACE',
        'home-orange-addi': '#EC7F22',
        'home-purple-textbox': '#3936BE',
        'home-white-background': '#FFFFFF',
        'prices-gray-subtexts': '#647491',
        'prices-blue-slide': '#00AACE',
        'prices-gray-slide': '#EAE7E7',
        'prices-gray-packages-background': '#F5F7F9',
        'prices-white-packages': '#FFFFFF',
        'prices-green-checks': '#25D366'
      }
    },
    fontFamily: {
      customFont: 'EuclidCircularB'
    },
    plugins: []
  }
}
