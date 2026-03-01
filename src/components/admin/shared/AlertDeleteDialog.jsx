"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useSupabaseCrud } from "@/hooks/useSupabaseCrud";

function AlertDeleteDialog({ id, tableName, triggerClassName }) {
  const { remove, loading } = useSupabaseCrud(tableName);

  const handleDelete = async () => {
    await remove(id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className={
            triggerClassName ||
            "flex items-center w-full px-2 py-1.5 text-sm rounded-md text-destructive hover:bg-destructive/10 transition-colors"
          }
        >
          <TrashIcon className="w-4 h-4 mr-2" />
          Hapus
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Yakin ingin menghapus data?</AlertDialogTitle>
          <AlertDialogDescription>
            Data yang dihapus tidak dapat dikembalikan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
          >
            {loading ? "Menghapus..." : "Hapus"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertDeleteDialog;
