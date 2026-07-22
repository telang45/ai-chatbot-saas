// Simplified chart wrapper — we use recharts directly in pages.
import * as React from "react";
import { cn } from "@/lib/utils";

export const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("w-full", className)} {...props}>{children}</div>
  ),
);
ChartContainer.displayName = "ChartContainer";

export const ChartTooltip = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const ChartTooltipContent = () => null;
export const ChartLegend = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const ChartLegendContent = () => null;
export const ChartStyle = () => null;
export type ChartConfig = Record<string, { label?: string; color?: string }>;
