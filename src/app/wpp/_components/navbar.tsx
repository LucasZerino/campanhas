'use client'

import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu"
import { Session } from "next-auth"
import {ChevronDownIcon, BuildingIcon,BoltIcon, CodepenIcon } from './icons'


type Props= {
  user: Session['user']
}


export  function Navbar({ user }: Props) {
  if (!user) return null; // Retornar JSX vazio quando não há usuário



   return(
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <div className="flex-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2" variant="ghost">
              <BuildingIcon className="h-4 w-4" />
              <span>Acme Inc</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuRadioGroup value="acme">
              <DropdownMenuRadioItem value="acme">
                <BuildingIcon className="mr-2 h-4 w-4" />
                Acme Inc
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bolt">
                <BoltIcon className="mr-2 h-4 w-4" />
                Bolt Inc
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="vercel">
                <CodepenIcon className="mr-2 h-4 w-4" />
                Vercel
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
   )
}

      
  