import { createServerClient as _createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createServerClient() {
    const cookieStore = cookies();

    return _createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            get(name: string) {
                return cookieStore.get(name)?.value;
            },
            set(name: string, value: string, options: CookieOptions) {
                cookieStore.set({ name, value, ...options });
            },
            remove(name: string, options: CookieOptions) {
                cookieStore.set({ name, value: "", ...options });
            },
        },
    });
}
