"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import useMediaQuery from "@/hooks/media-query";
import { createBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AuthError, AuthResponse, User } from "@supabase/supabase-js";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import type { JohnDoeApiRespone } from "./email-dialog";

const FormSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export function SignUpForm({ johnDoe }: { johnDoe: JohnDoeApiRespone }) {
    const [loading, setLoading] = useState(false);
    const [authResponse, setAuthResponse] = useState<AuthResponse | null>(null);

    const isDesktop = useMediaQuery("(min-width: 768px)");

    const supabase = createBrowserClient();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { email: "", password: "", username: "" },
    });

    async function handleAuth({ email, password, username }: z.infer<typeof FormSchema>) {
        setLoading(true);
        setAuthResponse(null);
        await supabase.auth.signUp({ email, password, options: { data: { username } } }).then((res) => setAuthResponse(res));
        setLoading(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAuth)} className={cn("p-6 w-full max-w-96 mx-auto flex flex-col items-center gap-4", isDesktop && "my-2")}>
                <h1 className="text-2xl text-center font-bold mb-2">Start writing in Marble ✨</h1>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="w-full max-w-72">
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder={`${johnDoe?.first} ${johnDoe.last}`} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full max-w-72">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder={`${johnDoe.first.toLocaleLowerCase()}.${johnDoe.last.toLocaleLowerCase().split("-")[0].split(" ").join("")}@example.com`} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="w-full max-w-72">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder={Array.from({ length: Math.floor(Math.random() * 7) + 6 }, () => "•").join("")} className="text-xl tracking-wide" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {authResponse && <AuthMessage user={authResponse.data.user} error={authResponse.error} />}

                <Button type="submit" className="m-auto mt-4 px-8" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 min-w-4 animate-spin" />}
                    Sign Up
                </Button>
            </form>
        </Form>
    );
}

function AuthMessage({ user, error }: { user: User | null; error: AuthError | null }) {
    if (error) return <p className="text-destructive text-sm font-bold text-center">{error.message}</p>;
    if (!user) return null;
    if (user.identities && user.identities.length === 0)
        return (
            <p className="text-destructive text-sm font-bold text-center">
                A user with this email already exists. <span className="text-xs font-normal">Maybe you used an OAuth provider to sign up?</span>
            </p>
        );
    if (!user.email_confirmed_at || user.role === "authenticated") return <p className="text-primary text-sm font-bold text-center">We've sent a verification email to {user?.email}</p>;
}
