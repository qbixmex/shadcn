import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default:cn([
          "bg-background",
          "text-foreground"
        ]),
        primary: cn([
          "border-blue-600",
          "text-blue-600",
          "[&>svg]:text-blue-600",
          "dark:bg-blue-700",
          "dark:text-blue-50",
          "dark:[&>svg]:text-blue-50"
        ]),
        warning: cn([
          "border-amber-500",
          "text-amber-500",
          "dark:bg-amber-500",
          "dark:text-amber-50",
          "[&>svg]:text-amber-600",
          "dark:[&>svg]:text-amber-50",
        ]),
        info: cn([
          "border-cyan-600",
          "text-cyan-600",
          "[&>svg]:text-cyan-600",
          "dark:bg-cyan-600",
          "dark:text-cyan-50",
          "dark:[&>svg]:text-cyan-50",
        ]),
        success: cn([
          "border-green-500",
          "text-green-800",
          "[&>svg]:text-green-800",
          "dark:bg-green-500",
        ]),
        destructive: cn([
          "border-destructive/50",
          "text-destructive",
          "[&>svg]:text-destructive",
          "dark:bg-destructive",
          "dark:border-destructive",
          "dark:text-red-50",
          "dark:[&>svg]:text-red-50",
        ])
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
