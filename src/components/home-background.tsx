"use client";

import useMediaQuery from "@/lib/utils/use-media-query";
import { usePrefersReducedMotion } from "@/lib/utils/use-prefers-reduced-motion";
import { useRef, useEffect } from "react";

export default function HomeBackground() {
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
        blobRef.current?.animate({ left: `${clientX}px`, top: `${clientY}px` }, { duration: 3000, fill: "forwards" });
    };

    return (
        <>
            <div className="h-[25vmax] aspect-square absolute left-1/2 top-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 animate-blob-spin" style={{ translate: "-50% -50%" }} ref={blobRef} />
            <div className="h-full w-full absolute backdrop-blur-[12vmax]" />
            <div className="h-full w-full absolute opacity-35" style={{ backgroundImage: "linear-gradient(hsl(var(--muted)) 0.75px, transparent 0.75px), linear-gradient(to right, hsl(var(--muted)) 0.75px, transparent 0.75px)", backgroundSize: "50px 50px", backgroundPosition: "top" }} />
        </>
    );
}
