"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={cn("z-10 w-full px-6 sticky top-0", pathname === "/" && "fixed")}>
            <div className="container flex items-center justify-between p-6 border-2 border-dashed border-primary border-t-0 rounded-b-2xl bg-background">
                <Link href="/" className="flex items-center gap-2">
                    <svg className="h-8 w-8" width="128" height="128" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.999 0C28.6311 0 0 28.786 0 64C0 99.214 28.6311 128 63.999 128C99.3668 128 127.998 99.214 127.998 64C128.279 28.786 99.3668 0 63.999 0ZM59.5078 36.3319C56.1395 37.7293 53.3325 38.2882 50.8062 38.8472C50.2448 38.8472 49.4027 39.1266 48.8413 39.1266C47.9992 39.4061 47.4378 39.4061 46.5958 39.6856C44.6309 39.9651 42.3853 40.524 40.1397 41.3624C26.6662 46.6725 17.9646 59.8079 13.1928 81.607C11.2279 76.0175 10.3858 70.4279 10.3858 64.2795C10.3858 34.3755 34.5258 9.78166 64.2797 9.78166C71.2971 9.78166 78.3145 11.179 85.0513 14.2533C78.3145 24.8734 69.6129 32.4192 59.5078 36.3319ZM44.3502 50.0262C46.5958 49.1878 48.8413 48.9083 51.3676 48.6288L52.2097 48.3493C55.2974 47.7904 59.5078 46.952 64.2797 44.9956C76.6304 39.9651 86.7355 31.3013 94.3143 19.0044C100.209 23.1965 105.261 28.2271 108.63 33.5371C102.174 44.1572 93.4722 51.9825 83.3671 55.8952C78.8759 57.572 75.7883 58.131 72.9813 58.6899C69.8936 58.9694 67.0867 59.8079 64.2797 60.9258C49.4027 66.5153 40.1397 82.7249 36.21 110.114C30.3153 105.921 25.2628 101.45 21.6137 96.4192C24.4207 70.4279 31.9995 54.7773 44.3502 50.0262ZM67.9287 69.5895C70.1743 68.7511 72.1392 68.4716 74.6655 68.1921H75.2269C78.5952 67.6332 82.2443 66.7948 87.2969 65.1179C97.9634 60.6463 107.226 53.6594 113.963 44.1572C116.489 50.5852 117.893 57.572 117.893 64.2795C117.893 94.1834 93.7529 118.218 63.999 118.218C57.5429 118.218 51.3676 117.1 45.473 114.865C48.8413 89.4323 56.4202 74.0611 67.9287 69.5895Z" />
                    </svg>
                    <h1 className="text-3xl font-extrabold">Marble</h1>
                </Link>
                <div className="hidden md:flex md:gap-2">
                    <Button variant="link" className="text-muted-foreground" asChild>
                        <Link href="/tutorial">How to use?</Link>
                    </Button>
                    <ThemeModeToggle variant="outline" />
                    <Button asChild>
                        <Link href="/auth">Log In</Link>
                    </Button>
                </div>
                <Button variant="outline" className="px-2 md:hidden">
                    <Menu className="" />
                </Button>
            </div>
        </nav>
    );
}
