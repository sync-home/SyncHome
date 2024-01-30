import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import AuthProvider from '@/provider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SyncHome',
  description: 'Smart Residential Building Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter?.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
