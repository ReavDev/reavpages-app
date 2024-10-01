import { cn } from '@/utils'
import { InputWrapperProps } from '@/types/component.types'
import { VariantProps } from 'class-variance-authority'
import React from 'react'
import { inputClasses } from '.'
import InputWrapper from './input-wrapper'
export type Ref = HTMLSelectElement

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputClasses> {
  placeholder?: string
  isLoading?: boolean
}

const CustomSelect = React.forwardRef<Ref, SelectProps & InputWrapperProps>(
  (
    {
      value = undefined,
      onChange,
      name,
      onBlur,
      placeholder,
      options,
      className = 'cursor-pointer',
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
            onChange && onChange(e)
          }}
          value={value}
          defaultValue={placeholder}
          id={name}
          ref={ref}
          onBlur={onBlur}
          style={{ color: !fade ? '#818181' : '' }}
          className={cn(inputClasses({ variant, inputSize }), className)}
          disabled={isDisabled}
        >
          <option value={''} hidden>
            {placeholder}
          </option>
          {options &&
            options.map((item) => (
              <option value={item.value} key={item.label}>
                {item.label}
              </option>
            ))}
        </select>
      </InputWrapper>
    )
  }
)

CustomSelect.displayName = 'CustomSelect'

export default CustomSelect
