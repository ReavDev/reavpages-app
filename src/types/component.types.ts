import { LucideIcon } from 'lucide-react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export type BoxProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export interface DrawerProps {
  isOpen: boolean
  setDrawer: () => void
  title: string
  children: React.ReactNode
}

// input types
export interface IInputOption {
  value: string | number
  label: string
}

export type InputWrapperProps = {
  borderColor?: string
  bg?: string
  inputIcon?: IconType | LucideIcon
  name: string
  label?: string
  isLoading?: boolean
  type?: string
  touched?: Record<string, unknown>
  errors?: { [x: string]: unknown } | undefined
  handleClick?: () => void
  isShown?: boolean
  isDisabled?: boolean
  children?: React.ReactNode
  options?: IInputOption[]
  isTextArea?: boolean
  h?: number | string
  py?: string
  pr?: number
  height?: number | string
  isDefault?: boolean
  endComp?: React.ReactNode
  onClick?: () => void
  wrapperClass?: HTMLDivElement['className']
}

export interface Option {
  value: string
  label: string
}
