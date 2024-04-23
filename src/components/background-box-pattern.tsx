"use client";

import { cn } from "@/lib/utils/cn";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function BackgroundBoxPattern() {
    const pathname = usePathname();
    const { theme } = useTheme();
    return (
        <div
            className={cn("h-full w-full fixed -z-[1] animate-background-pan motion-reduce:animate-none", pathname !== "/" && "paused", theme === "light" ? "opacity-65" : "opacity-40")}
            style={{ backgroundImage: "linear-gradient(hsl(var(--border)) 0.75px, transparent 0.75px), linear-gradient(to right, hsl(var(--border)) 0.75px, transparent 0.75px)", backgroundSize: "50px 50px", backgroundPosition: "top" }}
        />
    );
}
