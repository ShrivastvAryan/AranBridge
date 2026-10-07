import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Badge({ className, variant = "default", ...props }: HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "dark" }) { return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em]", variant === "dark" ? "border border-white/20 text-stone-200" : "bg-red-50 text-red-700", className)} {...props} />; }
