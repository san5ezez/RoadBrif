import './globals.css';import type {Metadata} from 'next';
export const metadata:Metadata={title:'RoadBrief',description:'Professional route planning for drivers'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
