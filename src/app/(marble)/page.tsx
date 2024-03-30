import HomeBackground from "@/components/home-background";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="w-full supports-[height:100dvh]:h-dvh flex justify-center items-center z-10 overflow-hidden">
                <div className="flex flex-col gap-6 items-center">
                    <header className="flex flex-col items-center gap-4">
                        <h2 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">Your thoughts, beautifully organized</h2>
                        <p className="text-center text-lg text-muted-foreground sm:text-xl">Marble is the modern note-taking app that leverages markdown to shape your ideas.</p>
                    </header>
                    <div className="flex gap-2">
                        <Button className="group" asChild>
                            <Link href="/login">
                                Get Started <ArrowUpRight className="h-6 min-w-6 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 duration-100" />
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="https://github.com/theSaintKappa/Marble" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 min-w-5 mr-1" /> GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </main>
            <HomeBackground />
        </>
    );
}
