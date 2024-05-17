import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { deleteItem } from '@/lib/utils/supabaseCRUD';
import { TrashIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation';

function AlertDelete({id}) {
  const router = useRouter()
  const handleDelete = async(id) => {
    const {error} = await deleteItem("offline_products", id);
    if(error) return alert(error.message);
    router.refresh()
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className='flex items-center w-full px-2 py-1.5 text-sm rounded-md bg-red-500/70 text-white hover:bg-red-500'><TrashIcon width={16} height={16} className="mr-2" /> Hapus</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Yakin ingin menghapus data?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={()=>handleDelete(id)} className="bg-red-500 hover:bg-red-600" >Hapus</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDelete