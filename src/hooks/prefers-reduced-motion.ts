import * as React from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";

export function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(typeof window === "undefined" ? true : !window.matchMedia(QUERY).matches);
    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);
        const listener = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(!event.matches);
        };
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener("change", listener);
        } else {
            mediaQueryList.addListener(listener);
        }
        return () => {
            if (mediaQueryList.removeEventListener) {
                mediaQueryList.removeEventListener("change", listener);
            } else {
                mediaQueryList.removeListener(listener);
            }
        };
    }, []);
    return prefersReducedMotion;
}
