import Sidebar from "@/components/admin/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <Sidebar />
        <div className="lg:pl-72">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
