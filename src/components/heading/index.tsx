import { VariantProps, cva } from "class-variance-authority"
import { DetailedHTMLProps, HTMLAttributes } from "react"

import { cn } from "@/utils"

const headerClasses = cva(["font-bold", "font-jaka"], {
 variants: {
  size: {
   h1: ["text-[42px] leading-[52px]"],
   h2: ["text-[30px] leading-[45px]"],
   h3: ["text-[20px] sm:text-[24px] leading-[36px]"],
   h4: ["text-[20px] leading-[30px]"],
   h5: ["text-[18px] leading-[27px]"],
   h6: ["text-[14px] leading-[24px]"],
  },
 },
 defaultVariants: {
  size: "h2",
 },
})

export interface HeadingProps
 extends DetailedHTMLProps<
   HTMLAttributes<HTMLHeadingElement>,
   HTMLHeadingElement
  >,
  VariantProps<typeof headerClasses> {
 as?: HeaderTypes
}
type HeaderTypes = "h1" | "h2" | "h3" | "h4"

function Heading({
 children,
 size,
 as = "h2",
 style,
 className = "font-bold",
}: HeadingProps) {
 const allowedTypes = ["h1", "h2", "h3", "h4", "h5"]
 const Comp = allowedTypes.includes(as) ? as : ("h2" as const)

 const classNames = cn(headerClasses({ size }), className)
 return (
  <Comp className={classNames} style={style}>
   {children}
  </Comp>
 )
}

export default Heading
