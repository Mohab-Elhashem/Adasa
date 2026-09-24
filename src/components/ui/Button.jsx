export default function Button({
    children,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
    ...props
}) {
    const baseStyles = "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none";
    const variants = {
        primary: "bg-linear-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 shadow-lg shadow-orange-500/20",
        secondary: "text-neutral-300 border border-[#262626] hover:text-white hover:border-neutral-700",
        outline: "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
    };
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}