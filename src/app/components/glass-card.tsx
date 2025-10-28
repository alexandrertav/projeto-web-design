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

      <h3 className="text-white text-lg font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{title}</h3>
      <p className="text-gray-200 mt-2 text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">{description}</p>
    </div>
  );
}
