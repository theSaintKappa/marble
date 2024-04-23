import { createServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
    const supabase = createServerClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) redirect("/");

    return <p>Hello {data.user.email}</p>;
}
