import ServiceForm from "@/components/admin/services/ServiceForm";
import { getItem } from "@/lib/utils/supabaseCRUD";
import { notFound } from "next/navigation";

export default async function EditServicePage({ params }) {
  const { id } = await params;
  const { data: service, error } = await getItem("services", id);
  if (error || !service) notFound();

  return <ServiceForm service={service} />;
}
