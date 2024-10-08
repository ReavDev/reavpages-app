import React from 'react'
import { IconType } from 'react-icons/lib'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/utils'
import { BoxProps } from '@/types/component.types'

export type IconProps = BoxProps & {
  IconComp: IconType | LucideIcon
  boxSize?: number
}

const Icon: React.FC<IconProps> = (props) => {
  const { boxSize = 5, IconComp, className = '', ...others } = props
  const classNames = cn(`h-${boxSize} w-${boxSize}`, className)

  //   @ts-expect-error : TS is unable to infer the type of `IconComp`

  return <IconComp className={classNames} {...others} />
}

export default Icon
