import type { Database } from "@/types/db.types";
import { createBrowserClient as _createBrowserClient } from "@supabase/ssr";

export function createBrowserClient() {
    return _createBrowserClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}
