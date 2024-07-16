'use client'

import Link from "next/link";
import { LayoutGridIcon } from './icons';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDownIcon, LogOutIcon, UserIcon, PlusIcon, LayersIcon, SettingsIcon, BoltIcon, CreditCardIcon, UsersIcon, BuildingIcon } from './icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import React from "react";
import { cn } from "@/lib/utils";
import { Session } from "next-auth"
import { usePathname } from 'next/navigation'
import { RocketIcon } from "@radix-ui/react-icons";
type IconName = "PlusIcon" | "LayersIcon" | "LayoutGridIcon" | "SettingsIcon" | "BoltIcon" | "CreditCardIcon" | "UserIcon" | "ChevronDownIcon" | "LogOutIcon" | "UsersIcon" | "BuildingIcon";

export type SidebarGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
  iconName: IconName;
} & T;

const getIconComponent = (iconName: IconName) => {
  switch (iconName) {
    case "PlusIcon":
      return PlusIcon;
    case "LayersIcon":
      return LayersIcon;
    case "LayoutGridIcon":
      return LayoutGridIcon;
    case "SettingsIcon":
      return SettingsIcon;
    case "BoltIcon":
      return BoltIcon;
    case "CreditCardIcon":
      return CreditCardIcon;
    case "UserIcon":
      return UserIcon;
    case "ChevronDownIcon":
      return ChevronDownIcon;
    case "LogOutIcon":
      return LogOutIcon;
    case "UsersIcon":
      return UsersIcon;
    case "BuildingIcon":
      return BuildingIcon;
    default:
      return null;
  }
};

export type SidebarFooterProps = {
  user: Session['user'] | null; // Defina o tipo da propriedade user
}

export function Sidebar({ className, children }: SidebarGenericProps) {
  return (
    <div className={cn(["flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40", className])}>
      {children}
    </div> 
  );
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
  return (
    <div className={cn(["flex h-[60px] items-center px-6", className])}>
      <Link href="/main">
        <div className="flex items-center gap-2 font-semibold">
          <RocketIcon className="h-6 w-6" />
          <span>Wpp Campanhas</span>
        </div>
      </Link>
    </div>
  );
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
  return (
    <div className={cn(["flex-1", className])}>
      <nav className="grid items-start px-4 text-sm font-medium">
        {children}
      </nav>
    </div>
  );
}

export function SidebarLink({ href, children, iconName }: SidebarGenericProps) {
  const pathname = usePathname()

  const IconComponent = getIconComponent(iconName);
  if (!IconComponent) return null;
  const isActive = pathname === href;

  return (
    <Link href={href} className={cn(["flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", isActive && 'bg-gray-100 dark:bg-gray-800 text-black'])}>
      <IconComponent className="h-4 w-4" />
      <span>{children}</span>
    </Link>
  );
}

export function SidebarFooter({ user }: SidebarFooterProps) {
  return (
    <div className="border-t px-4 py-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
            <Avatar className="h-8 w-8">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user ? user.name : ''}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{user ? user.email : ''}</span>
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
  );
}