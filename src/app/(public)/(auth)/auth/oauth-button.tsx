"use client";

import type { OAuthProvider } from "./page";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function OAuthButton({ provider: { name, provider, icon } }: { provider: OAuthProvider }) {
    const [loading, setLoading] = useState<boolean>(false);

    async function signInWithOAuth(provider: OAuthProvider["provider"]) {
        setLoading(true);
        const supabase = createBrowserClient();
        await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: `${location.origin}/auth/callback?next=/notes` } });
    }

    return (
        <Button variant="outline" className="gap-2 text-base p-6" disabled={loading} onClick={() => signInWithOAuth(provider)}>
            {loading ? <Loader2 className="mr-2 h-6 min-w-6 animate-spin" /> : icon}
            Continue with {name}
        </Button>
    );
}
