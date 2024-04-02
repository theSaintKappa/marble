import BlobMouseTrail from "@/components/blob-mouse-trail";
import BackgroundBoxPattern from "@/components/background-box-pattern";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="h-screen supports-[height:100dvh]:h-dvh flex flex-col justify-center items-center gap-8">
            <header className="flex flex-col items-center gap-4 z-10">
                <h2 className="text-center text-5xl md:text-6xl lg:leading-[1.1] leading-tight tracking-tighter font-bold text-balance">
                    Your thoughts, <span className="bg-gradient-to-r from-purple-500 via-blue-600 to-pink-500 text-transparent bg-clip-text font-extrabold cursor-crosshair">beautifully organized</span>
                </h2>
                <p className="text-center text-lg md:text-xl text-muted-foreground text-balance">Marble streamlines your ideas using markdown. Experience clarity and focus like never before.</p>
            </header>
            <div className="flex gap-2 z-10">
                <Button className="group" asChild>
                    <Link href="/login">
                        Start writing in Marble <ArrowUpRight className="h-6 min-w-6 ml-1 group-hover:translate-x-[0.15rem] group-hover:-translate-y-[0.15rem] duration-100" />
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://github.com/theSaintKappa/Marble" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 min-w-5 mr-1" /> GitHub
                    </a>
                </Button>
            </div>
            <BlobMouseTrail />
            <BackgroundBoxPattern />
        </main>
    );
}
