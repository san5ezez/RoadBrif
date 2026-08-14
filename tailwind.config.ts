import type { Config } from 'tailwindcss';
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{colors:{navy:'#07111f',panel:'#0b1728',line:'#1f3348',cyan:'#34d3ff',amber:'#f6b73c',danger:'#ff4d5e'},fontFamily:{mono:['var(--font-jetbrains)','ui-monospace','monospace']}}},plugins:[]};
export default config;
