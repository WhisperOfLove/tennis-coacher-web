type ActionButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export function ActionButton({
  label,
  href,
  variant = "primary",
}: ActionButtonProps) {
  const baseStyles =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60";

  const variantStyles =
    variant === "primary"
      ? "bg-[#bcff2f] text-[#122131] hover:bg-[#d0ff63] focus-visible:ring-[#bcff2f]"
      : "border border-white/60 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white";

  return (
    <a className={`${baseStyles} ${variantStyles}`} href={href}>
      {label}
    </a>
  );
}
