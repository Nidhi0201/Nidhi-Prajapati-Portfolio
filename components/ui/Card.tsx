"use client";

import { forwardRef, HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  variant?: "default" | "elevated" | "outline";
  hover?: boolean;
  shine?: boolean;
  glow?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles = {
  default: "glass border-border/8",
  elevated: "glass-strong border-border/10 shadow-card",
  outline: "bg-transparent border border-border/15",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "default",
      hover = true,
      shine = false,
      glow = false,
      padding = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles = "relative rounded-2xl overflow-hidden";

    const hoverStyles = hover
      ? "transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card-hover hover:border-accent/20"
      : "";

    const glowStyles = glow ? "hover:shadow-glow" : "";

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${glowStyles} ${shine ? "shine-effect" : ""} ${className}`}
        {...(props as HTMLMotionProps<"div">)}
      >
        {children}
        
        {/* Gradient border glow on hover */}
        {hover && (
          <div
            className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--accent) / 0.1) 0%, transparent 50%, rgb(var(--accent) / 0.05) 100%)",
            }}
          />
        )}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;

// Card Header component
export function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

// Card Title component
export function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-lg font-semibold text-foreground ${className}`}>
      {children}
    </h3>
  );
}

// Card Description component
export function CardDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`mt-1 text-sm text-muted ${className}`}>{children}</p>
  );
}

// Card Content component
export function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

// Card Footer component
export function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mt-4 flex items-center gap-3 ${className}`}>{children}</div>;
}
