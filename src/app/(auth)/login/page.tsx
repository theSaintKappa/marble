import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="flex flex-col items-center">
            <span>Hello Login!</span>
            <span>
                Don't have an account?
                <Link href="/signup">Sign Up Now</Link>
            </span>
        </main>
    );
}
