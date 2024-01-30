import Sidebar from "@/ui/Sidebar"
import { Container } from "@mui/material"

export const metadata = {
  applicationName: 'SyncHome',
  publisher: 'Tech Stars',
  authors: [ { name: 'Md. Neamul Hoqe', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Shahidul Islam', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Sakibul Hasan', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Foysal Rahman', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Masud Rana', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Rayhan Ahmed', url: 'https://www.linkedin.com/in/mneamulh' } ],
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard',
  },
  description: 'Smart Residential Building Management System',
}

export default function RootLayout({ children, list }) {
  return (
    <Container className="flex min-h-screen">
      <aside className="flex-[1] h-full border">
        <Sidebar list={list} />
      </aside>
      <aside className="flex-[2] h-full border">
        {children}
      </aside>
    </Container>
  )
}
