export default function PingDot({
    color = "bg-orange-500",
    size = "size-2",
    className = "",
}) {
    return (
        <span className={`relative inline-flex items-center justify-center ${size} ${className}`}>
            <span className={`animate-ping absolute inset-0 inline-flex h-full w-full rounded-full opacity-75 ${color}`} />
            <span className={`relative inline-flex rounded-full h-full w-full ${color}`} />
        </span>
    );
}
