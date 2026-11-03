"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow" | "saffron";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      href,
      asAnchor = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B6B58] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none group cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#0B6B58] text-white hover:bg-[#085546] font-semibold shadow-sm hover:shadow-md",
      secondary:
        "bg-white text-[#1C1917] border border-[#EAE3D6] hover:border-[#D8CEBD] hover:bg-[#F4EFE6] shadow-2xs",
      outline:
        "bg-transparent text-[#0B6B58] border-2 border-[#0B6B58] hover:bg-[#E7F3F0]",
      ghost:
        "bg-transparent text-[#57534E] hover:text-[#0B6B58] hover:bg-[#F4EFE6]",
      glow:
        "bg-[#0B6B58] text-white hover:bg-[#085546] font-semibold shadow-[0_8px_25px_-4px_rgba(11,107,88,0.35)] hover:shadow-[0_12px_30px_-4px_rgba(11,107,88,0.5)]",
      saffron:
        "bg-[#E0580C] text-white hover:bg-[#C2410C] font-semibold shadow-[0_8px_25px_-4px_rgba(224,88,12,0.35)]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
    };

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (asAnchor && href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </a>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.015 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.985 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
