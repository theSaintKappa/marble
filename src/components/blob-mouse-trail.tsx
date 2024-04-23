"use client";

import useMediaQuery from "@/hooks/media-query";
import { usePrefersReducedMotion } from "@/hooks/prefers-reduced-motion";
import { useRef, useEffect } from "react";

export default function BlobMouseTrail() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const isDesktop = useMediaQuery("(min-width: 1200px)");

    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!prefersReducedMotion || isDesktop) window.addEventListener("pointermove", animateBlob);
        return () => {
            window.removeEventListener("pointermove", animateBlob);
        };
    }, [prefersReducedMotion, isDesktop]);

    useEffect(() => {
        if (prefersReducedMotion || !isDesktop) window.removeEventListener("pointermove", animateBlob);
    }, [prefersReducedMotion, isDesktop]);

    const animateBlob = (event: PointerEvent) => {
        const { clientX, clientY } = event;
        blobRef.current?.animate({ left: `${clientX}px`, top: `${clientY}px` }, { duration: 5000, fill: "forwards" });
    };

    return (
        <div className="h-full w-full absolute blur-[10vmax] overflow-hidden">
            <div className="h-[25vmax] aspect-square absolute left-1/2 top-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-60 animate-blob-spin" style={{ translate: "-50% -50%" }} ref={blobRef} />
        </div>
    );
}
