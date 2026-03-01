"use client";

import AdminDataTable from "@/components/admin/shared/AdminDataTable";
import AlertDeleteDialog from "@/components/admin/shared/AlertDeleteDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const columns = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Nama Kategori",
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => (
      <span className="text-muted-foreground font-mono text-xs">
        {row.getValue("slug")}
      </span>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Tanggal",
    cell: ({ row }) =>
      new Date(row.getValue("created_at")).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <EllipsisVerticalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href={`/admin/categories/${row.original.id}/edit`}>
            <DropdownMenuItem>
              <PencilSquareIcon className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
          </Link>
          <AlertDeleteDialog id={row.original.id} tableName="categories" />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

function CategoriesTable({ data }) {
  return (
    <AdminDataTable
      columns={columns}
      data={data}
      searchPlaceholder="Cari kategori..."
    />
  );
}

export default CategoriesTable;
