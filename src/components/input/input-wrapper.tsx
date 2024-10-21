"use client"
import { InputWrapperProps } from "@/types/component.types"
import { cn } from "@/utils"
import { ErrorMessage } from "@hookform/error-message"
import { Eye, EyeOff } from "lucide-react"
import { get } from "react-hook-form"
import Button from "../button"
import Icon from "../icon"
import { Icons } from "../icons"

const InputWrapper: React.FC<InputWrapperProps> = ({
 children,
 name,
 label,
 isLoading = false,
 type = "text",
 errors,
 isShown,
 handleClick,
 inputIcon,
 wrapperClass,
 ...props
}) => {
 const hasError = get(errors, name)
 const bgColor = hasError ? "bg-red-50" : (props.bg ?? "bg-bran-gray")
 const borderColor = hasError
  ? "border-red-600"
  : (props.borderColor ?? "border-[#DEDEDE]")

 return (
  <div
   className={`relative w-full text-brand-inputText ${
    props.isDisabled ? "opacity-90" : "opacity-100"
   }`}
  >
   {label && (
    <label
     className={cn(
      "text-left font-jaka text-sm font-semibold capitalize text-brand-inputLabel"
     )}
     htmlFor={name}
    >
     {label}
    </label>
   )}
   <div
    className={`relative flex items-center overflow-hidden rounded-[8px] border transition ${
     hasError ? "border-red-600" : "focus-within:border-brand-primary"
    } ${wrapperClass} ${bgColor} ${borderColor} ${label ? "mt-1" : ""} ${
     type === "select" ? "cursor-not-allowed pr-1" : ""
    }`}
   >
    {inputIcon && (
     <Icon IconComp={inputIcon} boxSize={5} className="ml-4 text-gray-300" />
    )}
    {/* The child input element which can be input, textarea, select etc */}
    {children}
    {/* To indicate loading, usefull when input default value is gotten from the server */}
    {isLoading && (
     <div className={`absolute right-1 top-3 ${bgColor}`}>
      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
     </div>
    )}
    {/* Icon used to indicate error state */}

    {/* password type switcher use to toggle password fields */}

    {type === "password" && !isLoading && (
     <Button
      variant="link"
      tabIndex={1}
      className="border-0 bg-transparent px-2 text-[#606970] no-underline shadow-none outline-none focus:border-0 focus:shadow-none focus:ring-0 focus:ring-offset-0"
      onClick={handleClick}
     >
      <Icon boxSize={4} IconComp={isShown ? EyeOff : Eye} />
     </Button>
    )}
   </div>
   {hasError && (
    <ErrorMessage
     errors={errors}
     name={name}
     render={({ message }) => {
      return (
       <div className="absolute -bottom-[16px] right-0">
        <p className="text-[10px] font-light text-red-500">{message}</p>
       </div>
      )
     }}
    />
   )}
  </div>
 )
}

export default InputWrapper
