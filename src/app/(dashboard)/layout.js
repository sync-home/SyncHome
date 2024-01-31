import AdminSidebar from "@/components/ui/AdminSidebar"

export const metadata = {
  applicationName: 'SyncHome',
  publisher: 'Tech Stars',
  authors: [{ name: 'Md. Neamul Hoqe', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Shahidul Islam', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Sakibul Hasan', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Foysal Rahman', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Md. Masud Rana', url: 'https://www.linkedin.com/in/mneamulh' }, { name: 'Rayhan Ahmed', url: 'https://www.linkedin.com/in/mneamulh' }],
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard',
  },
  description: 'Smart Residential Building Management System',
}

export default function DashboardLayout({ children}) {
  return (
    <main className="flex min-h-screen min-w-full m-0">
      <aside className="lg:flex-[1] xl:flex-[1] min-h-screen border">
        <AdminSidebar />
      </aside>
      <aside className="lg:flex-[2] xl:flex-[3] min-h-screen border">
        {children}
      </aside>
    </main>
  )
}
