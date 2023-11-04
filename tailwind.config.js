/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    //Tailwind独自のGlobal Styleを無効化
    preflight: false,
  },
  //Utiliti Classのprefixを変更
  prefix: 'otsuka-'
}

