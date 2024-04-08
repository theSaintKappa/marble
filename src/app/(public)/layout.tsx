import BackgroundBoxPattern from "@/components/background-box-pattern";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <BackgroundBoxPattern />
            {children}
        </>
    );
}
