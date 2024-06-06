import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: cn(
          "bg-primary",
          "text-primary-foreground",
          "shadow",
          "hover:bg-primary",
        ),
        primary: cn(
          "bg-blue-500",
          "hover:bg-blue-400",
          "text-white",
          "shadow",
          "dark:bg-blue-700",
          "dark:hover:bg-blue-500",
        ),
        info: cn(
          "bg-sky-500",
          "hover:bg-sky-400",
          "text-white",
          "shadow",
          "dark:bg-sky-500",
          "dark:text-neutral-50",
          "dark:hover:bg-sky-400",
        ),
        warning: cn(
          "bg-amber-500",
          "hover:bg-amber-400",
          "text-white",
          "shadow",
          "dark:bg-amber-600",
          "dark:hover:bg-amber-500",
        ),
        outline: cn(
          "border",
          "border-input",
          "bg-background",
          "shadow-sm",
          "hover:bg-accent",
          "hover:text-accent-foreground",
        ),
        secondary: cn(
          "border",
          "border-slate-300",
          "bg-gray-light",
          "text-gray-700",
          "shadow-sm",
          "hover:bg-slate-200",
          "dark:border-slate-200",
          "dark:bg-gray-light",
          "dark:hover:bg-slate-100",
          "dark:text-slate-800",
        ),
        ghost: cn(
          "hover:bg-accent",
          "hover:text-accent-foreground",
        ),
        link: cn(
          "text-primary",
          "underline-offset-4",
          "hover:underline",
        ),
        success: cn(
          "bg-green-500",
          "hover:bg-green-400",
          "text-white",
          "shadow",
          "dark:bg-green-600",
          "dark:hover:bg-green-500",
        ),
        destructive: cn(
          "bg-destructive",
          "hover:bg-red-400",
          "text-destructive-foreground",
          "shadow-sm",
          "dark:hover:bg-red-500",
        ),
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean,
  capitalize?: boolean,
  uppercase?: boolean,
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, capitalize = false, uppercase = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), {
          "capitalize": capitalize,
          "uppercase": uppercase,
        })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
