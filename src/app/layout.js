import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import AuthProvider from '@/provider/AuthProvider'
import { ToastContainer } from 'react-toastify';
import TanstackProvider from '@/provider/TanstackProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  applicationName: 'SyncHome',
  publisher: 'Tech Stars',
  authors: [{ name: 'Md. Neamul Hoqe', url: 'https://github.com/Md-Neamul-Hoqe' }, { name: 'Md. Shahidul Islam', url: 'https://github.com/Md-Neamul-Hoqe' }, { name: 'Md. Sakibul Hasan', url: 'https://github.com/Md-Neamul-Hoqe' }, { name: 'Foysal Rahman', url: 'https://github.com/Md-Neamul-Hoqe' }, { name: 'Md. Masud Rana', url: 'https://github.com/Md-Neamul-Hoqe' }, { name: 'Rayhan Ahmed', url: 'https://github.com/Md-Neamul-Hoqe' }],
  title: 'SyncHome',
  description: 'Smart Residential Building Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter?.className} suppressHydrationWarning={true}>
        <TanstackProvider>
          <AuthProvider>
            <ToastContainer />
            {children}
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}
