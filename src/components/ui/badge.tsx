import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-gray-400 text-white hover:bg-gray-400/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        primary: "border-transparent text-white bg-blue-500 hover:bg-blue-500/80",
        info: "border-transparent bg-sky-500 text-white hover:bg-sky-500/80",
        warning: "border-transparent text-white bg-amber-500 hover:bg-amber-500/80",
        success: "border-transparent text-white bg-green-600 hover:bg-green-600/80",
        primary_outline: "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
        secondary_outline: "border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white",
        info_outline: "border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white",
        warning_outline: "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white",
        success_outline: "border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
        destructive_outline: "border-destructive text-destructive hover:bg-destructive hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
    capitalize?: boolean,
    uppercase?: boolean,
    lowercase?: boolean,
  };

function Badge({
  className,
  variant,
  capitalize = false,
  uppercase = false,
  lowercase = false,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), {
      "capitalize": capitalize,
      "uppercase": uppercase,
      "lowercase": lowercase,
    }, className)} {...props} />
  )
}

export { Badge, badgeVariants }
