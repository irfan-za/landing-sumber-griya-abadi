"use client";

import AdminDataTable from "@/components/admin/shared/AdminDataTable";
import AlertDeleteDialog from "@/components/admin/shared/AlertDeleteDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    header: "Cover",
    cell: ({ row }) => {
      const image = row.original.image;
      return image ? (
        <div className="w-16 h-10 rounded-lg overflow-hidden bg-muted">
          <Image
            src={image}
            alt={row.original.title}
            width={64}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-16 h-10 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground">
          N/A
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Judul",
    cell: ({ row }) => (
      <div className="max-w-[300px]">
        <span className="font-medium line-clamp-1">{row.getValue("title")}</span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Kategori",
    cell: ({ row }) => (
      <Badge variant="secondary" className="text-xs">
        {row.getValue("category")}
      </Badge>
    ),
  },
  {
    accessorKey: "author",
    header: "Penulis",
  },
  {
    accessorKey: "featured",
    header: "Featured",
    cell: ({ row }) =>
      row.getValue("featured") ? (
        <Badge className="bg-primary/10 text-primary text-xs">Featured</Badge>
      ) : (
        <span className="text-muted-foreground text-xs">-</span>
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
          <Link href={`/admin/blogs/${row.original.id}/edit`}>
            <DropdownMenuItem>
              <PencilSquareIcon className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
          </Link>
          <AlertDeleteDialog id={row.original.id} tableName="blogs" />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

function BlogsTable({ data }) {
  return (
    <AdminDataTable
      columns={columns}
      data={data}
      searchPlaceholder="Cari artikel..."
    />
  );
}

export default BlogsTable;
