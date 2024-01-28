import Link from "next/link";

export default function AdminDashboardLayout({ children }) {
    return (
        <html>
            <body>
                <div className="flex gap-10 h-96">
                    <div>
                        <Link href="/admin-dashboard">dashboard</Link>
                        <Link href="/admin-dashboard/demo1">Demo 1</Link>
                        <Link href="/admin-dashboard/demo2">Demo 2</Link>
                    </div>
                    <div>

                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}