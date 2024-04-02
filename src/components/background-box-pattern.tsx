export default function BackgroundBoxPattern() {
    return (
        <div
            className="h-full w-full absolute opacity-35 animate-background-pan motion-reduce:animate-none"
            style={{ backgroundImage: "linear-gradient(hsl(var(--muted)) 0.75px, transparent 0.75px), linear-gradient(to right, hsl(var(--muted)) 0.75px, transparent 0.75px)", backgroundSize: "50px 50px", backgroundPosition: "top" }}
        />
    );
}
