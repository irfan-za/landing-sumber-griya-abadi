import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";

function AdminPageHeader({ title, description, actionLabel, actionHref }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        )}
      </div>
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button className="gap-2">
            <PlusIcon className="w-4 h-4" />
            {actionLabel}
          </Button>
        </Link>
      )}
    </div>
  );
}

export default AdminPageHeader;
