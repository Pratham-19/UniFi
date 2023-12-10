import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cg_bold: ['ClashGrotesk-Bold'],
        cg_extralight: ['ClashGrotesk-Extralight'],
        cg_light: ['ClashGrotesk-light'],
        cg_reg: ['ClashGrotesk-Regular'],
        cg_med: ['ClashGrotesk-Medium'],
        cg_semibold: ['ClashGrotesk-SemiBold'],
        mar_reg: ['Marcellus']
      }
    }
  },
  plugins: []
};
export default config;
