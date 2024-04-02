"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, type ButtonProps } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ThemeModeToggle({ ...props }: ButtonProps) {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={props.variant} className={props.className} size="icon">
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value)}>
                    <DropdownMenuRadioItem value="light" className="cursor-pointer">
                        Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark" className="cursor-pointer">
                        Dark
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="system" className="cursor-pointer">
                        System
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
