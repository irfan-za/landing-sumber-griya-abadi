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
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "image",
    header: "Foto",
    cell: ({ row }) => {
      const images = row.original.image_urls;
      return images?.length > 0 ? (
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
          <Image
            src={images[0]}
            alt={row.original.title}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground">
          N/A
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Nama Layanan",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("title")}</span>
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
          <Link href={`/admin/services/${row.original.id}/edit`}>
            <DropdownMenuItem>
              <PencilSquareIcon className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
          </Link>
          <AlertDeleteDialog id={row.original.id} tableName="services" />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

function ServicesTable({ data }) {
  return (
    <AdminDataTable
      columns={columns}
      data={data}
      searchPlaceholder="Cari layanan..."
    />
  );
}

export default ServicesTable;
