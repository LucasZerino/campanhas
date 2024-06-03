'use client'

import Link from "next/link"
import { Session } from "next-auth"
import { PlusIcon, LayersIcon, LayoutGridIcon, SettingsIcon, BoltIcon, CreditCardIcon, UserIcon, ChevronDownIcon, LogOutIcon, UsersIcon,BuildingIcon } from './icons'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { usePathname } from 'next/navigation'
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"

type Props= {
  user: Session['user']
}


export  function Sidebar({ user }: Props) {
  if (!user) return null; // Retornar JSX vazio quando não há usuário
  const pathname = usePathname()
  const isActiveRoute = (route: string) => {
    return pathname === route ? 'bg-gray-100 dark:bg-gray-800' : ''; // Adicione a classe de destaque se a rota corresponder
  };



   return(
    <div className="flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
      <div className="flex h-[60px] items-center px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <BoltIcon className="h-6 w-6" />
          <span>Wpp Campanhas</span>
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/main"
          >
            <LayoutGridIcon className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/main/instancias"
          >
            <LayersIcon className="h-4 w-4" />
            Listar Instâncias
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/main/configuracoes"
          >
            <SettingsIcon className="h-4 w-4" />
            Configurações
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/main/pagamento"
          >
            <CreditCardIcon className="h-4 w-4" />
            Pagamento
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/main/empresa"
          >
            <BuildingIcon className="h-4 w-4" />
            Empresas
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/main/usuarios"
          >
            <UsersIcon className="h-4 w-4" />
            Usuários
          </Link>
        </nav>
      </div>
      <div className="border-t px-4 py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">john@example.com</span>
              </div>
              <ChevronDownIcon className="ml-auto h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href="/main/perfil">
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                Ver Perfil
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOutIcon className="mr-2 h-4 w-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
   )
}

      
  