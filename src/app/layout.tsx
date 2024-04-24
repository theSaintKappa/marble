import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
    title: "Marble",
    description: "A (subjectively) beautiful, modern and generally superior note-taking app.",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}
