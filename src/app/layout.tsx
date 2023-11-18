import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Navbar} from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KHN',
  description: 'shopping from amazon ',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body className={inter.className}><Navbar/>{children}</body>
    </html>
  )
}
