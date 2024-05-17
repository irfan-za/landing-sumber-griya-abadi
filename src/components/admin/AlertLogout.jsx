import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'
import { navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { useRouter } from 'next/navigation'
import { supabase } from '@/config/supabase'

function AlertLogout() {
  const router = useRouter()
  const logout = async() => {
    const { error } = await supabase.auth.signOut()
    if(error) return alert(error.message)
    router.replace('/')
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className={`${navigationMenuTriggerStyle()} rounded-md cursor-pointer hover:text-white bg-red-500 hover:bg-red-500 focus:bg-red-500 border-red-500 flex items-center w-full px-4 py-2`}>
          <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Yakin ingin keluar?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={logout} >Keluar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertLogout