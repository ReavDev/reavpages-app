import { Input } from '@/components/ui/input'
import { ComponentPropsWithRef } from 'react'

interface TitleInputProps extends ComponentPropsWithRef<'input'> {}

const TitleInput = ({
 value,
 onChange,
 placeholder,
}: Pick<TitleInputProps, 'value' | 'placeholder' | 'onChange'>) => {
 return (
  <div className="editor-title">
   <Input
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    className="h-auto items-center border-x-0 border-t-0 px-0 text-6xl font-black text-gray-900 placeholder:text-gray-50"
   />
  </div>
 )
}

export default TitleInput
