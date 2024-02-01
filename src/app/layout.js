import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import AuthProvider from '@/provider/AuthProvider'
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  applicationName: 'SyncHome',
  publisher: 'Tech Stars',
  authors: [{ name: 'Md. Neamul Hoqe', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Shahidul Islam', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Sakibul Hasan', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Foysal Rahman', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Masud Rana', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Rayhan Ahmed', url: 'https://www.linkedin.com/in/mneamulh' }],
  title: 'SyncHome',
  description: 'Smart Residential Building Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter?.className} suppressHydrationWarning={true} style={{ margin: 0, padding: 0 }}>
        <AuthProvider>
          <ToastContainer />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
