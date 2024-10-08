"use client"
import { InputWrapperProps } from "@/types/component.types"
import { cn } from "@/utils"
import { VariantProps } from "class-variance-authority"
import React from "react"
import { inputClasses } from "."
import InputWrapper from "./input-wrapper"

export type Ref = HTMLSelectElement

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputClasses> {
  placeholder?: string
  isLoading?: boolean
  options?: { value: string; label: string }[] // Assuming options structure
}

const CustomSelect = React.forwardRef<Ref, SelectProps & InputWrapperProps>(
  (
    {
      value = undefined,
      onChange,
      name,
      onBlur,
      placeholder,
      options = [], // Defaulting options to an empty array
      className = "cursor-pointer",
      isDisabled,
      variant,
      inputSize,
      ...others
    },
    ref
  ) => {
    const [fade, setFade] = React.useState(false)

    return (
      <InputWrapper
        type="select"
        isDisabled={isDisabled}
        name={name}
        {...others}
      >
        <select
          name={name}
          onChange={(e) => {
            setFade(true)
            if (onChange) {
              onChange(e) // Ensure onChange gets called if provided
            }
          }}
          value={value}
          defaultValue={placeholder}
          id={name}
          ref={ref}
          onBlur={onBlur}
          style={{ color: !fade ? "#818181" : "" }}
          className={cn(inputClasses({ variant, inputSize }), className)}
          disabled={isDisabled}
        >
          <option value={""} hidden>
            {placeholder}
          </option>
          {
            options && options.length > 0
              ? options.map((item) => (
                  <option value={item.value} key={item.label}>
                    {item.label}
                  </option>
                ))
              : null /* Explicitly returning null when no options */
          }
        </select>
      </InputWrapper>
    )
  }
)

CustomSelect.displayName = "CustomSelect"

export default CustomSelect
