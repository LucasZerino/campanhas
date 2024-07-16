'use client';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect } from "react";
import { getUserBusiness } from "@/actions";
import { redirect } from "next/navigation";

export default function Page() {

  useEffect(() => {
    // Fetch user data and check if empresa is present
    const userEmail = 'lucaszerino@gmail.com'; // Replace with actual logic to get user email
    fetchUserAndRedirect(userEmail);
  }, []);

  async function fetchUserAndRedirect(email: string) {
    console.log("Tentando buscar o usuário:", email);
    try {
      const user = await getUserBusiness(email);
      if (!user || !user.empresa) {
        redirect('/onboarding'); // Redirect to onboarding if empresa is not present
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 shadow-sm sm:px-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6 ml-auto mr-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <BuildingIcon className="h-5 w-5" />
                  <span>Acme Inc</span>
                  <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuLabel>Select Company</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Acme Inc</DropdownMenuItem>
                <DropdownMenuItem>Globex Corporation</DropdownMenuItem>
                <DropdownMenuItem>Stark Industries</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <Link
              href="#"
              className="group relative flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground transition-colors group-hover:bg-primary/90">
                <LayoutGridIcon className="h-8 w-8" />
              </div>
              <div className="text-sm font-medium">Dashboard</div>
            </Link>
            <Link
              href="#"
              className="group relative flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl font-bold text-accent-foreground transition-colors group-hover:bg-accent/90">
                <ClipboardIcon className="h-8 w-8" />
              </div>
              <div className="text-sm font-medium">Orders</div>
            </Link>
            <Link
              href="#"
              className="group relative flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-3xl font-bold text-secondary-foreground transition-colors group-hover:bg-secondary/90">
                <PackageIcon className="h-8 w-8" />
              </div>
              <div className="text-sm font-medium">Products</div>
            </Link>
            <Link
              href="#"
              className="group relative flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success text-3xl font-bold text-success-foreground transition-colors group-hover:bg-success/90">
                <UsersIcon className="h-8 w-8" />
              </div>
              <div className="text-sm font-medium">Customers</div>
            </Link>
            <Link
              href="#"
              className="group relative flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-info text-3xl font-bold text-info-foreground transition-colors group-hover:bg-info/90">
                <BarChartIcon className="h-8 w-8" />
              </div>
              <div className="text-sm font-medium">Analytics</div>
            </Link>
            <Link
              href="#"
              className="group relative flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-warning text-3xl font-bold text-warning-foreground transition-colors group-hover:bg-warning/90">
                <SettingsIcon className="h-8 w-8" />
              </div>
              <div className="text-sm font-medium">Settings</div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ClipboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function LayoutGridIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}