"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useMediaQuery from "@/hooks/media-query";
import { createBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AuthResponse } from "@supabase/supabase-js";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { JohnDoeApiRespone } from "./email-dialog";

const FormSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string(),
});

export function SignInForm({ johnDoe }: { johnDoe: JohnDoeApiRespone }) {
    const [loading, setLoading] = useState(false);
    const [authResponse, setAuthResponse] = useState<AuthResponse | null>(null);

    const isDesktop = useMediaQuery("(min-width: 768px)");

    const supabase = createBrowserClient();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { email: "", password: "" },
    });

    async function handleAuth({ email, password }: z.infer<typeof FormSchema>) {
        setLoading(true);
        setAuthResponse(null);
        await supabase.auth.signInWithPassword({ email, password }).then((res) => setAuthResponse(res));
        setLoading(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAuth)} className={cn("p-6 w-full max-w-96 mx-auto flex flex-col items-center gap-4", isDesktop && "my-2")}>
                <h1 className="text-2xl text-center font-bold mb-2">Welcome back 👋</h1>
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

                {authResponse?.error && <p className="text-destructive text-sm font-bold text-center">{authResponse.error.message}</p>}

                <Button type="submit" className="m-auto mt-4 px-8" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 min-w-4 animate-spin" />}
                    Sign In
                </Button>
            </form>
        </Form>
    );
}
