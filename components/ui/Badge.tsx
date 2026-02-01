"use client";

import { forwardRef, HTMLAttributes } from "react";
import { motion } from "framer-motion";

type BadgeVariant = "default" | "outline" | "filled" | "accent";
type BadgeSize = "sm" | "md";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-card/60 border border-border/10 text-foreground/80 backdrop-blur-sm",
  outline:
    "bg-transparent border border-border/20 text-foreground/70",
  filled:
    "bg-accent/10 border border-accent/20 text-accent-light",
  accent:
    "bg-gradient-to-r from-accent/20 to-accent-light/20 border border-accent/30 text-accent-light",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = "default", size = "md", icon, className = "", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200";

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

// Filter Chip - clickable badge for filtering
interface FilterChipProps {
  children: React.ReactNode;
  active?: boolean;
  size?: BadgeSize;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function FilterChip({
  children,
  active = false,
  size = "md",
  icon,
  className = "",
  onClick,
  disabled,
}: FilterChipProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-300 ease-smooth cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const activeStyles = active
    ? "bg-accent/20 border border-accent/40 text-accent-light shadow-glow-sm"
    : "bg-card/60 border border-border/10 text-foreground/70 hover:border-accent/30 hover:text-foreground/90 backdrop-blur-sm";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${activeStyles} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}

// Status Badge - for showing status indicators
interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "away" | "busy" | "offline";
  pulse?: boolean;
}

export function StatusBadge({
  children,
  status = "online",
  pulse = true,
  className = "",
  ...props
}: StatusBadgeProps) {
  const statusColors = {
    online: "bg-green-500",
    away: "bg-yellow-500",
    busy: "bg-red-500",
    offline: "bg-gray-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/10 px-3 py-1.5 text-xs font-medium text-foreground/90 ${className}`}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${statusColors[status]} opacity-75`}
          />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${statusColors[status]}`}
        />
      </span>
      {children}
    </span>
  );
}
