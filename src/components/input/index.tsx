"use client"
import { InputWrapperProps } from "@/types/component.types"
import { cn } from "@/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import InputWrapper from "./input-wrapper"
export type Ref = HTMLInputElement

export const inputClasses = cva(
  [
    "focus:ring-0",
    "transition",
    "font-semibold",
    "font-jaka",
    "duration-200",
    "ease-in-out",
    "px-3",
    "outline-none",
    "font-normal",
    "w-full",

    "border-0",
    "text-brand-darkest",
    // 'placeholder:font-bold',
    // "placeholder:text-opacity-80",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "flex items-center file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#B1B1B1] placeholder:font-semibold",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-transparent", "text-brand-text"],
      },
      inputSize: {
        sm: ["h-9", "text-sm", "py-1"],
        md: ["h-11", "text-sm"],
      },
    },
    defaultVariants: {
      variant: "primary",
      inputSize: "md",
    },
  }
)

// below here we just extended our input base interface and VariantProps interface which we imported from CVA
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputClasses> {
  isLoading?: boolean
}

const Input = React.forwardRef<
  Ref,
  InputProps & Omit<InputWrapperProps, "type">
>(
  (
    {
      value,
      onChange,
      name = "",
      type = "text",
      onBlur,
      onFocus,
      placeholder,
      isDisabled,
      className = "",
      variant,
      inputSize,
      readOnly,
      ...others
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
      <InputWrapper
        type={type}
        isDisabled={isDisabled}
        name={name}
        isShown={show}
        handleClick={handleClick}
        {...others}
      >
        <input
          name={name}
          type={type !== "password" ? type : show ? "text" : "password"}
          onChange={onChange}
          value={value}
          id={name}
          ref={ref}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          className={cn(inputClasses({ variant, inputSize }), className)}
          min={others.min}
          max={others.max}
          disabled={isDisabled}
          readOnly={readOnly}
        />
      </InputWrapper>
    )
  }
)

Input.displayName = "Input"

export default Input
