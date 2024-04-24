import { Button } from "@/components/ui/button";
import { createServerClient } from "@/lib/supabase/server";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
    const supabase = createServerClient();
    const { data, error } = await supabase.auth.getUser();
    if (!error && data.user) redirect("/notes");

    return (
        <main className="h-supports-dvh flex flex-col justify-center items-center gap-8">
            <header className="flex flex-col items-center gap-4 z-10">
                <h2 className="text-center text-4xl sm:text-5xl md:text-7xl lg:leading-[1.1] leading-tight tracking-tighter font-bold text-balance">
                    Your thoughts, <span className="bg-gradient-to-l from-purple-500 via-blue-600 to-pink-500 text-transparent bg-clip-text font-extrabold">beautifully organized</span>
                </h2>
                <p className="text-center text-lg md:text-2xl text-muted-foreground text-balance">
                    Marble is a <span className="italic text-base">(subjectively)</span> <span className="font-semibold">beautiful</span>, <span className="font-semibold">modern</span> and generally <span className="font-semibold">superior</span> note-taking app.
                </p>
            </header>
            <div className="flex gap-2 z-10">
                <Button className="group" asChild>
                    <Link href="/auth">
                        Start writing in Marble <ArrowUpRight className="h-6 min-w-6 ml-1 group-hover:translate-x-[0.15rem] group-hover:-translate-y-[0.15rem] duration-100" />
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://github.com/theSaintKappa/Marble" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 min-w-5 mr-1" /> GitHub
                    </a>
                </Button>
            </div>
        </main>
    );
}
