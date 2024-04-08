"use client";

import { cn } from "@/lib/utils/cn";
import { usePathname } from "next/navigation";

export default function BackgroundBoxPattern() {
    const pathname = usePathname();
    return (
        <div
            className={cn("h-full w-full fixed -z-[1] opacity-40 animate-background-pan motion-reduce:animate-none", pathname !== "/" && "paused")}
            style={{ backgroundImage: "linear-gradient(hsl(var(--border)) 0.75px, transparent 0.75px), linear-gradient(to right, hsl(var(--border)) 0.75px, transparent 0.75px)", backgroundSize: "50px 50px", backgroundPosition: "top" }}
        />
    );
}
