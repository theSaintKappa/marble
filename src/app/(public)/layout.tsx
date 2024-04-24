import BackgroundBoxPattern from "@/components/background-box-pattern";
import BlobMouseTrail from "@/components/blob-mouse-trail";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <BackgroundBoxPattern />
            <BlobMouseTrail />
            {children}
        </>
    );
}
