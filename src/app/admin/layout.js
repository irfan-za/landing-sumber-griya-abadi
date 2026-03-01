import Sidebar from "@/components/admin/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-64">
        <main className="min-h-screen bg-muted/30">
          <div className="p-4 pt-16 sm:p-6 sm:pt-6 lg:p-8">{children}</div>
        </main>
      </div>
      <Toaster />
    </>
  );
}
