"use client";
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { ChevronLeft, Home, LineChart, Package, PanelLeft, PlusCircle, Search, Settings, ShoppingCart, Upload, Users2, GitPullRequest, Plus } from "lucide-react"

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
    },
    {
      icon: GitPullRequest,
      href: "/requests",
      label: "Requests",
    },
    {
      icon: Package,
      href: "/assets",
      label: "Assets",
    },
    {
      icon: Users2,
      href: "/users",
      label: "Users",
    },
    {
      icon: LineChart,
      href: "/analytics",
      label: "Analytics",
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Settings",
    },
  ];

  return (
    <div className={`space-y-4 flex flex-col h-full text-primary bg-secondary ${className}`}>
      <aside>
        <TooltipProvider>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            {routes.map((route) => (
              <Tooltip key={route.href}>
                <TooltipTrigger asChild>
                  <Link href={route.href} className={`group flex h-9 w-9 shrink-0 items-center justify-center
                   gap-2 rounded-full ${pathname === route.href ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'} text-lg font-semibold md:h-8 md:w-8 md:text-base`}>
                    <route.icon className="h-5 w-5" />
                    <span className="sr-only">{route.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{route.label}</TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </TooltipProvider>
      </aside>
    </div>
  );
};

export default Sidebar;
