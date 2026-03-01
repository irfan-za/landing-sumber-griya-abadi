import DashboardContent from "@/components/admin/dashboard/DashboardContent";
import AdminPageHeader from "@/components/admin/shared/AdminPageHeader";

export const revalidate = 0;

export default function AdminDashboardPage() {
  return (
    <>
      <AdminPageHeader
        title="Dashboard"
        description="Ringkasan data dan aktivitas terbaru"
      />
      <DashboardContent />
    </>
  );
}
