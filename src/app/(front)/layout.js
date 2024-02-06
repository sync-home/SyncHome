import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import AuthProvider from '@/provider/AuthProvider'


export const metadata = {
  applicationName: 'SyncHome',
  publisher: 'Tech Stars',
  authors: [ { name: 'Md. Neamul Hoqe', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Shahidul Islam', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Sakibul Hasan', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Foysal Rahman', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Masud Rana', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Rayhan Ahmed', url: 'https://www.linkedin.com/in/mneamulh' } ],
  title: {
    template: '%s | SyncHome',
    default: 'SyncHome',
  },
  description: 'Smart Residential Building Management System',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
      <Footer />
    </AuthProvider>
  )
}
