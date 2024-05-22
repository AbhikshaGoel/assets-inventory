"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/navbar/Logo";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";


interface NavbarProps {
    className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("isDarkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            window.localStorage.removeItem("isDarkMode");
        }
    };

    return (
        <div
            className={`navbar ${className} dark:bg-slate-700/70  bg-opacity-0 backdrop-filter backdrop-blur-sm flex flex-row justify-between w-full p-2 py-4 z-10 lg:px-8 shadow-sm border-b-[1px] border-slate-900/10 lg:border-0 dark:border-slate-300/10`}>
            <div className="px-2 flex items-center gap-3">
                <Logo />
            </div>

            <div className="ml-auto flex items-center">
                <div className="relative ml-auto flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="overflow-hidden rounded-full"
                        >
                            <Image
                                src="/placeholder-user.jpg"
                                width={36}
                                height={36}
                                alt="Avatar"
                                className="overflow-hidden rounded-full"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    );
};

export default Navbar;
