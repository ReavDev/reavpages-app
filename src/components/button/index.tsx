/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { jaka } from "@/fonts"
import { cn } from "@/utils"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import Link from "next/link"
import React from "react"
import { Icons } from "../icons"

export const buttonVariants = cva(
 `inline-flex gap-2 items-center relative border-0 justify-center transition-all duration-300 disabled:cursor-not-allowed whitespace-nowrap rounded-[8px] outline-none text-base font-medium focus:ring-2 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 font-jaka`,
 {
  variants: {
   variant: {
    default:
     "bg-brand-primary text-white hover:bg-brand-primaryHover focus:ring-brand-primary focus:ring-2 focus:ring-offset-1 active:ring-brand-primary",
    destructive:
     "bg-destructive text-destructive-foreground hover:bg-destructive/90 ",

    destructive_outline:
     "bg-transperent text-brand-red border hover:bg-cod-50 focus:ring-brand-red focus:ring-2 focus:ring-offset-1 active:ring-brand-red",

    outline:
     "border-brand-primary border text-brand-primary hover:bg-bunchpay-50 focus:ring-brand-primary focus:ring-2 focus:ring-offset-1 active:ring-brand-primary",
    secondary: "bg-bunchpay-50 text-brand-primary hover:bg-secondary/80",
    ghost:
     "hover:bg-accent hover:text-brand-primary text-brand-primary focus:ring-brand-primary focus:ring-2  active:ring-brand-primary",
    ink: "hover:bg-[#2684FC33] text-brand-primary bg-[#2684FC33]",
    wallet: "bg-accent text-brand-primary",
    link: "text-brand-primary underline-offset-4 hover:underline",
    cal_outline:
     "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    cal_ghost: "hover:bg-accent hover:text-accent-foreground",
    bill:
     "bg-white text-[#0C0C0C] focus:ring-brand-primary focus:ring-2 focus:ring-offset-1 px-1",
    neutral: "bg-transparent text-inherit",
   },
   size: {
    default: "h-11 px-4 py-2",
    sm: "h-9 px-3 rounded-lg",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
    close: "h-7 w-7",
   },
   fullWidth: {
    true: "w-full",
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
 leftIcon?: React.ReactNode
 rightIcon?: React.ReactNode
 asChild?: boolean
 isLoading?: boolean
 href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 (
  {
   children,
   leftIcon,
   rightIcon,
   variant,
   size,
   isLoading = false,
   disabled,
   className = "",
   asChild,
   fullWidth,
   href,
   type = "button",
   ...others
  },
  ref
 ) => {
  const Comp = asChild ? Slot : "button"
  if (href) {
   return (
    <Link
     href={href}
     // @ts-expect-error next.js
     ref={ref}
     {...others}
     disabled={isLoading || disabled}
     className={cn(
      jaka.className,
      buttonVariants({ variant, size, fullWidth, className })
     )}
    >
     {leftIcon && leftIcon}
     {children}
     {rightIcon && rightIcon}
    </Link>
   )
  }
  return (
   <Comp
    ref={ref}
    type={type}
    {...others}
    disabled={isLoading || disabled}
    className={cn(
     jaka.className,
     buttonVariants({ variant, size, fullWidth, className })
    )}
   >
    {leftIcon && (
     <span
      style={{
       opacity: isLoading ? 0 : 1,
      }}
     >
      {leftIcon}
     </span>
    )}
    <Slottable>
     <span
      style={{
       opacity: isLoading ? 0 : 1,
      }}
     >
      {children}
     </span>
    </Slottable>

    {rightIcon && (
     <span
      style={{
       opacity: isLoading ? 0 : 1,
      }}
     >
      {rightIcon}
     </span>
    )}
    {isLoading && (
     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Icons.spinner className="h-6 w-6 animate-spin text-white" />
     </div>
    )}
   </Comp>
  )
 }
)

Button.displayName = "Button"

export default Button
