/**
 * Small shadcn/ui-style primitives. Class helpers rather than components for
 * buttons, so they work on <Link>, <a> and <button> alike.
 */

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type ButtonVariant = "default" | "audit" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "default" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";

const variants: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  // The only use of amber on the site.
  audit: "bg-amber text-[#000000] hover:bg-amber/90",
  outline: "border border-input bg-transparent hover:bg-accent",
  ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
  link: "text-teal underline-offset-4 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[13px]",
  default: "h-9 px-4 text-sm",
  lg: "h-11 px-6 text-[15px]",
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
        "inline-flex items-center rounded-md border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  description,
  as: Tag = "h2",
  align = "left",
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Tag className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
