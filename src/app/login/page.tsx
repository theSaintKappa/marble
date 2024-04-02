import BackgroundBoxPattern from "@/components/background-box-pattern";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import Link from "next/link";

type Provider = "Github" | "Google" | "Twitter";

const providers: { name: Provider; icon: JSX.Element }[] = [
    {
        name: "Github",
        icon: <Github className="h-7 min-w-7" />,
    },
    {
        name: "Google",
        icon: (
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 min-w-7">
                <path
                    d="M23 12.769C23 19.3304 18.6316 24 12.1803 24C5.99508 24 1 18.8621 1 12.5C1 6.1379 5.99508 1 12.1803 1C14.8096 1 17.0745 1.86599 18.9063 3.33257C19.3454 3.68414 19.3476 4.33571 18.9476 4.73125L17.3388 6.3223C16.9487 6.70809 16.3245 6.69881 15.879 6.37868C11.7874 3.43897 5.25123 6.42588 5.25123 12.5C5.25123 16.5111 8.36639 19.7617 12.1803 19.7617C15.7539 19.7617 17.5239 17.6345 18.211 15.9241C18.4396 15.3552 17.9747 14.8046 17.3615 14.8046H13.1803C12.628 14.8046 12.1803 14.3569 12.1803 13.8046V11.8492C12.1803 11.2969 12.628 10.8492 13.1803 10.8492H21.9849C22.4703 10.8492 22.8931 11.197 22.9444 11.6797C22.9794 12.0085 23 12.3603 23 12.769Z"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        ),
    },
    {
        name: "Twitter",
        icon: <Twitter className="h-7 min-w-7" />,
    },
];

export default function LoginPage() {
    return (
        <main className="h-supports-dvh flex justify-center items-center p-8">
            <div className="w-full max-w-2xl relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-purple-500 via-blue-600 to-pink-500 blur opacity-75 group-hover:opacity-100 group-hover:-inset-1 duration-200" />
                <Card className="p-8 flex flex-col items-center relative z-10">
                    <CardHeader className="items-center gap-1 mb-4">
                        <CardTitle className="flex items-center gap-2">
                            <svg className="h-10 w-10" width="128" height="128" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63.999 0C28.6311 0 0 28.786 0 64C0 99.214 28.6311 128 63.999 128C99.3668 128 127.998 99.214 127.998 64C128.279 28.786 99.3668 0 63.999 0ZM59.5078 36.3319C56.1395 37.7293 53.3325 38.2882 50.8062 38.8472C50.2448 38.8472 49.4027 39.1266 48.8413 39.1266C47.9992 39.4061 47.4378 39.4061 46.5958 39.6856C44.6309 39.9651 42.3853 40.524 40.1397 41.3624C26.6662 46.6725 17.9646 59.8079 13.1928 81.607C11.2279 76.0175 10.3858 70.4279 10.3858 64.2795C10.3858 34.3755 34.5258 9.78166 64.2797 9.78166C71.2971 9.78166 78.3145 11.179 85.0513 14.2533C78.3145 24.8734 69.6129 32.4192 59.5078 36.3319ZM44.3502 50.0262C46.5958 49.1878 48.8413 48.9083 51.3676 48.6288L52.2097 48.3493C55.2974 47.7904 59.5078 46.952 64.2797 44.9956C76.6304 39.9651 86.7355 31.3013 94.3143 19.0044C100.209 23.1965 105.261 28.2271 108.63 33.5371C102.174 44.1572 93.4722 51.9825 83.3671 55.8952C78.8759 57.572 75.7883 58.131 72.9813 58.6899C69.8936 58.9694 67.0867 59.8079 64.2797 60.9258C49.4027 66.5153 40.1397 82.7249 36.21 110.114C30.3153 105.921 25.2628 101.45 21.6137 96.4192C24.4207 70.4279 31.9995 54.7773 44.3502 50.0262ZM67.9287 69.5895C70.1743 68.7511 72.1392 68.4716 74.6655 68.1921H75.2269C78.5952 67.6332 82.2443 66.7948 87.2969 65.1179C97.9634 60.6463 107.226 53.6594 113.963 44.1572C116.489 50.5852 117.893 57.572 117.893 64.2795C117.893 94.1834 93.7529 118.218 63.999 118.218C57.5429 118.218 51.3676 117.1 45.473 114.865C48.8413 89.4323 56.4202 74.0611 67.9287 69.5895Z" />
                            </svg>
                            <span className="text-4xl font-extrabold">Marble</span>
                        </CardTitle>
                        <CardDescription>Your notes will be synced to your account</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-1 pb-0">
                        {providers.map(({ name, icon }) => (
                            <Button key={name} variant="outline" className="gap-2 text-lg py-7 px-5">
                                {icon}Continue with {name}
                            </Button>
                        ))}
                    </CardContent>
                    <Separator className="relative w-3/4 my-6 flex justify-center items-center font-medium text-sm text-slate-400 before:absolute before:content-['or'] before:bg-card before:px-3 before:leading-3" />
                    <Button variant="link" className="p-0 pb-2 h-fit text-base">
                        Continue with Email →
                    </Button>
                </Card>
            </div>
            <nav className="fixed top-0 w-full flex justify-between p-2">
                <Button variant="link" asChild className="p-0">
                    <Link href="/">
                        <ArrowLeft className="mr-1" />
                        Go back
                    </Link>
                </Button>
                <ThemeModeToggle variant="outline" />
            </nav>
            <BackgroundBoxPattern />
        </main>
    );
}
