/**
 * Small UI primitives. Class helpers rather than components for buttons,
 * so they work on <Link>, <a> and <button> alike.
 */

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type ButtonVariant = "default" | "audit" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "default" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,border-color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5 active:scale-[0.97] [-webkit-tap-highlight-color:transparent]";

const variants: Record<ButtonVariant, string> = {
  // Primary: royal blue (ink inside a blue block).
  default: "bg-primary text-primary-foreground hover:bg-primary/85",
  // The main call to action. Always royal blue.
  audit: "bg-blue text-white hover:bg-[#2741d4]",
  outline: "border border-input bg-transparent text-foreground hover:border-foreground",
  ghost: "text-muted-foreground hover:text-foreground",
  link: "text-foreground underline decoration-1 underline-offset-4 hover:decoration-2",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  default: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variants[variant], variant === "link" ? "" : sizes[size], className);
}

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border px-2.5 py-1 text-xs text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Section label with the lime square mark, e.g. "■ 02 / Services". */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("label flex items-center gap-3", className)}>
      <span className="mark !size-2" aria-hidden="true" />
      {index && <span className="text-muted-foreground">{index} /</span>}
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  title,
  description,
  label,
  index,
  as: Tag = "h2",
  align = "left",
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  label?: string;
  index?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {label && (
        <SectionLabel index={index} className={cn("mb-6", align === "center" && "justify-center")}>
          {label}
        </SectionLabel>
      )}
      <Tag className="font-display text-[34px] uppercase leading-[0.98] text-balance sm:text-5xl lg:text-6xl">
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
