import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function AdminFormLayout({ title, backHref, children }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href={backHref}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 text-muted-foreground" />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
      </div>
      <div className="bg-card rounded-lg border p-6">{children}</div>
    </div>
  );
}

export default AdminFormLayout;
