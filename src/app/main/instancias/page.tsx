import { auth } from "@/services/auth"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {ServerIcon, ServerOffIcon, QrCodeIcon, UnplugIcon, TrashIcon } from '../_components/icons'

export default async function Page(){
    const session = await auth()
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Instâncias</h1>
          <div className="flex gap-2">
            <Button variant="outline">+ Criar Instância</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Instances</CardTitle>
              <ServerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Registered Instances</CardTitle>
              <ServerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Disconnected Instances</CardTitle>
              <ServerOffIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instance</TableHead>
                  <TableHead>Number</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-green-50 dark:bg-green-900/20">
                  <TableCell className="font-medium">Instance A</TableCell>
                  <TableCell>001</TableCell>
                  <TableCell>
                    <Badge
                      className="bg-green-400 text-green-900 dark:bg-green-500 dark:text-green-50"
                      variant="outline"
                    >
                      Connected
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <QrCodeIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Generate QR Code</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <UnplugIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Disconnect</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="flex items-center gap-2">
                            Delete
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-red-50 dark:bg-red-900/20">
                  <TableCell className="font-medium">Instance B</TableCell>
                  <TableCell>002</TableCell>
                  <TableCell>
                    <Badge className="bg-red-400 text-red-900 dark:bg-red-500 dark:text-red-50" variant="outline">
                      Disconnected
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <QrCodeIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Generate QR Code</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <UnplugIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Disconnect</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="flex items-center gap-2">
                            Delete
                            <Checkbox className="ml-auto" />
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-green-50 dark:bg-green-900/20">
                  <TableCell className="font-medium">Instance C</TableCell>
                  <TableCell>003</TableCell>
                  <TableCell>
                    <Badge
                      className="bg-green-400 text-green-900 dark:bg-green-500 dark:text-green-50"
                      variant="outline"
                    >
                      Connected
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <QrCodeIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Generate QR Code</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <UnplugIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Disconnect</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="flex items-center gap-2">
                            Delete
                            <Checkbox className="ml-auto" />
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-red-50 dark:bg-red-900/20">
                  <TableCell className="font-medium">Instance D</TableCell>
                  <TableCell>004</TableCell>
                  <TableCell>
                    <Badge className="bg-red-400 text-red-900 dark:bg-red-500 dark:text-red-50" variant="outline">
                      Disconnected
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <QrCodeIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Generate QR Code</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <UnplugIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Disconnect</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="rounded-full" size="icon" variant="ghost">
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="flex items-center gap-2">
                            Delete
                            <Checkbox className="ml-auto" />
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
      )
    }