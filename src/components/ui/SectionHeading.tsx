import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeDot?: boolean;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeDot = false,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center items-center" : "text-left items-start",
        "flex flex-col gap-3 mb-10 md:mb-14",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-flex", isCenter ? "justify-center" : "justify-start")}>
          <Badge variant="saffron" dot={badgeDot}>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] font-heritage-serif leading-[1.18]">
        {title}{" "}
        {highlight && (
          <span className="text-[#0B6B58] underline decoration-[#E0580C]/40 decoration-wavy decoration-1 underline-offset-8">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-[#57534E] font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
