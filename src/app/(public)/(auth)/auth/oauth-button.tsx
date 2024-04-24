"use client";

import type { OAuthProvider } from "./page";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";

export default function OAuthButton({ provider: { name, provider, icon } }: { provider: OAuthProvider }) {
    const [loading, setLoading] = useState<boolean>(false);

    async function signInWithOAuth(provider: OAuthProvider["provider"]) {
        setLoading(true);
        const supabase = createBrowserClient();
        await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: `${location.origin}/auth/callback?next=/notes` } });
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" className="gap-3 py-6" disabled={loading} onClick={() => signInWithOAuth(provider)}>
                        {loading ? <Loader2 className="mr-2 h-6 min-w-6 animate-spin" /> : icon}
                        Continue with {name}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        Use your <span className="font-bold">{name}</span> account to sign in
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
