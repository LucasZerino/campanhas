import Link from "next/link"
import { 
  LayoutGridIcon, 
  ClipboardIcon, 
  PackageIcon, 
  UsersIcon, 
  BarChartIcon, 
  SettingsIcon 
} from "@/icons/index";


const Apps = () => {
  return (
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
  );
};

export default Apps;