import NavigationBar from '@/components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FooterComponent from '@/components/FooterComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body className={inter.className}>
        <div className=' min-h-screen flex flex-col items-center justify-center w-full'>
        <NavigationBar/>
        {children}
        <FooterComponent/>
        </div>
      </body>  
    </html>
  )
}
