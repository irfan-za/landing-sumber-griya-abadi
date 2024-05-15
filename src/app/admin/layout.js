import Sidebar from "@/components/admin/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <Sidebar />
        <div className="lg:pl-72">{children}</div>
      </body>
    </html>
  );
}
