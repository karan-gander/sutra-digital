import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "success" | "saffron" | "gold";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  variant = "primary",
  size = "md",
  dot = false,
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary:
      "bg-[#E7F3F0] text-[#0B6B58] border border-[#0B6B58]/20 shadow-2xs",
    secondary:
      "bg-white text-[#57534E] border border-[#EAE3D6] shadow-2xs",
    outline:
      "bg-transparent text-[#78716C] border border-[#D8CEBD] hover:border-[#0B6B58] hover:text-[#0B6B58]",
    success:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs",
    saffron:
      "bg-[#FFEDE3] text-[#E0580C] border border-[#E0580C]/25 shadow-2xs",
    gold:
      "bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide font-medium",
    md: "text-xs px-3.5 py-1 tracking-wide font-semibold",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full transition-all select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B6B58] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B6B58]"></span>
        </span>
      )}
      {children}
    </div>
  );
}
