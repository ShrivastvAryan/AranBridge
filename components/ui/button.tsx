import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = { children: ReactNode; className?: string; href?: string; variant?: "default" | "outline" | "secondary" | "light"; size?: "default" | "sm" | "lg"; } & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;
const variants = { default: "bg-red-700 text-white hover:bg-red-800", outline: "border border-stone-900 bg-transparent text-stone-900 hover:bg-stone-900 hover:text-white", secondary: "border border-stone-300 bg-white/30 text-stone-900 hover:border-stone-900", light: "bg-white text-red-700 hover:-translate-y-0.5" };
const sizes = { default: "px-5 py-3 text-sm", sm: "px-4 py-2 text-xs", lg: "gap-7 px-5 py-4 text-sm" };
export function Button({ children, className, href, variant = "default", size = "default", ...props }: ButtonProps) { const styles = cn("inline-flex items-center justify-center rounded-md font-bold transition", variants[variant], sizes[size], className); return href ? <a className={styles} href={href}>{children}</a> : <button className={styles} {...props}>{children}</button>; }
