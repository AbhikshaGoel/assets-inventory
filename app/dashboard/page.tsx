"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
  GitPullRequest,
  Package2Icon,
  BellIcon,
  HomeIcon,
  UsersIcon,
  PackageIcon,
  LineChartIcon,
  SettingsIcon,
  CatIcon,
  GaugeIcon,
  DeleteIcon,
  Trash2Icon,
  ComputerIcon,
  LaptopIcon,
  ServerIcon,
  PrinterIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export function Dashboard() {
  return (
    <div className="flex flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background sm:static sm:bg-transparent">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
              
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          {/**Here come the main Header My Assets */}
          
          
        </header>




    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gradient-to-r from-[#4338CA] to-[#6D28D9] lg:block dark:bg-gradient-to-r dark:from-[#4338CA] dark:to-[#6D28D9]">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold text-white" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">IT Asset Management</span>
            </Link>
            <Button className="ml-auto h-8 w-8 text-white" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-[#6D28D9] px-3 py-2 text-white transition-all hover:bg-[#4338CA]"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#4338CA]"
                href="#"
              >
                <PackageIcon className="h-4 w-4" />
                Assets
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#4338CA]"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Locations
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#4338CA]"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Reports
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#4338CA]"
                href="#"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card className="bg-gradient-to-r from-[#4338CA] to-[#6D28D9] text-white">
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-[#4338CA] hover:bg-gray-200" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gradient-to-r from-[#4338CA] to-[#6D28D9] px-6 text-white dark:bg-gradient-to-r dark:from-[#4338CA] dark:to-[#6D28D9]">
          <h1 className="text-lg font-semibold md:text-xl">IT Asset Management</h1>
          <Button className="ml-auto text-white hover:bg-white hover:text-[#4338CA]" variant="outline">
            Request Asset
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">PCs</CardTitle>
                <ComputerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#4338CA]">850</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Issued: 750 | Requested: 100</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Printers</CardTitle>
                <PrinterIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#6D28D9]">120</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Issued: 100 | Requested: 20</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Laptops</CardTitle>
                <LaptopIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#4338CA]">650</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Issued: 600 | Requested: 50</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Servers</CardTitle>
                <ServerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#6D28D9]">25</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Issued: 20 | Requested: 5</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4 md:mt-6">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Issued</TableHead>
                    <TableHead>Requested</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Laptop"
                          className="rounded-md"
                          height="32"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                          }}
                          width="32"
                        />
                        Laptop 1
                      </div>
                    </TableCell>
                    <TableCell>Laptop</TableCell>
                    <TableCell>HQ - New York</TableCell>
                    <TableCell>
                      <Badge variant="outline">In Use</Badge>
                    </TableCell>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>2023-04-10</TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Desktop"
                          className="rounded-md"
                          height="32"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                          }}
                          width="32"
                        />
                        Desktop 1
                      </div>
                    </TableCell>
                    <TableCell>Desktop</TableCell>
                    <TableCell>HQ - New York</TableCell>
                    <TableCell>
                      <Badge variant="default">In Use</Badge>
                    </TableCell>
                    <TableCell>2023-03-20</TableCell>
                    <TableCell>2023-03-15</TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Tablet"
                          className="rounded-md"
                          height="32"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                          }}
                          width="32"
                        />
                        Tablet 1
                      </div>
                    </TableCell>
                    <TableCell>Tablet</TableCell>
                    <TableCell>Remote - San Francisco</TableCell>
                    <TableCell>
                      <Badge variant="default">In Use</Badge>
                    </TableCell>
                    <TableCell>2023-05-01</TableCell>
                    <TableCell>2023-04-28</TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Printer"
                          className="rounded-md"
                          height="32"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                          }}
                          width="32"
                        />
                        Printer 1
                      </div>
                    </TableCell>
                    <TableCell>Printer</TableCell>
                    <TableCell>HQ - New York</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Maintenance</Badge>
                    </TableCell>
                    <TableCell>2023-02-10</TableCell>
                    <TableCell>2023-02-05</TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Server"
                          className="rounded-md"
                          height="32"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                          }}
                          width="32"
                        />
                        Server 1
                      </div>
                    </TableCell>
                    <TableCell>Server</TableCell>
                    <TableCell>Data Center - New York</TableCell>
                    <TableCell>
                      <Badge variant="default">In Use</Badge>
                    </TableCell>
                    <TableCell>2023-01-15</TableCell>
                    <TableCell>2023-01-10</TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <img
                          alt="Monitor"
                          className="rounded-md"
                          height="32"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                          }}
                          width="32"
                        />
                        Monitor 1
                      </div>
                    </TableCell>
                    <TableCell>Monitor</TableCell>
                    <TableCell>Remote - San Francisco</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Retired</Badge>
                    </TableCell>
                    <TableCell>2022-12-01</TableCell>
                    <TableCell>2022-11-25</TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </main>

      </div>
    </div>
    </div>
    </div>
  )
}

