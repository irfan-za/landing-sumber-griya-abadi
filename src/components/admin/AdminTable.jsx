'use client'
import { EllipsisVerticalIcon, EyeIcon, PencilIcon, PencilSquareIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import DataTable from "../ui/data-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import Link from "next/link";
import AlertDelete from "./product/AlertDelete";

export const columns = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({row}) => row.index + 1,
  },
  {
    accessorKey: "title",
    header: "Produk",
  },
  {
    accessorKey: "created_at",
    header: "Tanggal",
    cell: ({row}) => new Date(row.getValue("created_at")).toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' }),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    enableHiding: false,  
    cell: ({row}) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <EllipsisVerticalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href={`/admin/${row.original.id}`}><DropdownMenuItem><EyeIcon width={16} height={16} className="mr-2" /> Detail</DropdownMenuItem></Link>
          <Link href={`/admin/edit/${row.original.id}`}><DropdownMenuItem><PencilSquareIcon width={16} height={16} className="mr-2" /> Edit</DropdownMenuItem></Link>
          <DropdownMenuItem><AlertDelete id={row.original.id} /></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

function AdminTable({data}) {
  return (
    <section>
      <h1 className="font-semibold text-center text-xl my-5">Daftar Produk</h1>
      <div className="flex justify-between mb-3">
        <Input
          placeholder="Cari produk..."
          className="max-w-sm"
        />
        <Link href="/admin/edit/add">
          <Button><PlusIcon width={16} height={16} strokeWidth={2} className="mr-2" /> Tambah Produk</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </section>
  )
}

export default AdminTable