import { cn } from '@/utils'
import { InputWrapperProps } from '@/types/component.types'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import InputWrapper from './input-wrapper'
export type Ref = HTMLTextAreaElement

const inputClasses = cva(
  [
    'focus:ring-0',
    'transition',
    'font-normal',
    'duration-200',
    'ease-in-out',
    'px-3',
    'outline-none',
    'w-full',
    'border-0',
    'disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-cod-300',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-transparent', 'text-slate-600'],
        secondary: ['bg-gray-100', 'text-slate-900'],
      },
      inputSize: {
        md: ['min-h-[130px]', 'text-sm', 'py-2'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      inputSize: 'md',
    },
  }
)

// below here we just extended our input base interface and VariantProps interface which we imported from CVA
export interface InputProps
  extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    VariantProps<typeof inputClasses> {
  isLoading?: boolean
}

const Textarea = React.forwardRef<
  Ref,
  Omit<InputProps, 'type'> & InputWrapperProps
>(
  (
    {
      value,
      onChange,
      name = '',
      type = 'text',
      onBlur,
      placeholder,
      isDisabled,
      className = '',
      cols = 40,
      variant,
      inputSize,
      ...others
    },
    ref
  ) => {
    return (
      <InputWrapper type={type} isDisabled={isDisabled} name={name} {...others}>
        <textarea
          name={name}
          onChange={onChange}
          value={value}
          id={name}
          cols={cols}
          ref={ref}
          onBlur={onBlur}
          placeholder={placeholder}
          className={cn(className, inputClasses({ variant, inputSize }))}
        />
      </InputWrapper>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
