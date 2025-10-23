import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Spinner({ size = "md", className }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-5 w-5 border-2",
    lg: "h-6 w-6 border-[3px]",
  }

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-primary border-t-transparent",
        sizeClasses[size],
        className
      )}
    />
  )
}
