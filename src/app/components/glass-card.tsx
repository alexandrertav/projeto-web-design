import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export default function GlassCard({
  Icon,
  title,
  description,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden rounded-2xl p-6",
        className,
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center rounded-lg p-3 bg-white/10">
        <Icon
          className="h-8 w-8 text-white"
          strokeWidth={2}
          aria-hidden
        />
      </div>

      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{description}</p>
    </div>
  );
}
