/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/button"
import Icon from "@/components/icon"
import { InputWrapperProps } from "@/types/component.types"
import { ErrorMessage } from "@hookform/error-message"
import { Trash, Upload } from "lucide-react"
import Image from "next/image"
import React from "react"
import { get } from "react-hook-form"

export type Ref = HTMLInputElement

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: any
  handleDeleteImage: () => void
}

const ImageUpload = React.forwardRef<
  Ref,
  InputProps & Omit<InputWrapperProps, "type">
>(
  (
    {
      value,
      onChange,
      name,
      onBlur,
      placeholder = "Click to upload",
      isDisabled,
      handleDeleteImage,
      errors,
      label,
    },
    ref
  ) => {
    const hasError = get(errors, name)
    const bgColor = hasError ? "bg-red-50" : "bg-transparent"
    const brColor = hasError ? "border-red-600" : "border-[#999]"

    const handleLabelClick = () => {
      const fileInputRef = document.getElementById(name)
      if (fileInputRef) {
        fileInputRef?.click()
      }
    }
    const isFilePresent = value && value?.[0]
    return (
      <div className="relative space-y-1 pb-3 pt-1">
        {label && (
          <label
            className="text-left text-sm font-normal capitalize"
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <div
          className={`${
            isFilePresent ? "" : "items-center justify-center"
          } ${bgColor} ${brColor} hide-scroll-bar flex h-[250px] flex-col rounded-[4px] border`}
        >
          <div
            className={`${"flex h-full w-full items-center justify-center"}`}
          >
            {isFilePresent && (
              <div className="relative h-[248px] w-full rounded-md transition-all duration-300">
                <div className="group absolute right-0 top-0 grid h-full w-full place-items-center bg-black bg-opacity-0 transition-all duration-300 hover:bg-opacity-40">
                  <Button
                    onClick={handleDeleteImage}
                    variant="outline"
                    className="text-bunchpay-600 hidden rounded-full bg-white px-3 transition-all duration-300 group-hover:flex"
                  >
                    <Icon IconComp={Trash} boxSize={4} />
                  </Button>
                </div>
                <Image
                  src={
                    value?.[0]?.url
                      ? value?.[0]?.url
                      : URL?.createObjectURL(value?.[0])
                  }
                  alt={`Preview`}
                  className="h-full w-full object-cover"
                  width="500"
                  height="400"
                />
              </div>
            )}
            {!isFilePresent && (
              <button
                type="button"
                onClick={handleLabelClick}
                className="flex h-[250px] flex-1 place-items-center"
              >
                <div className="relative mx-auto my-auto flex h-28 w-80 flex-col items-center justify-center px-2 pb-6">
                  <input
                    type="file"
                    id={name}
                    accept="image/*"
                    className="invisible relative z-10 mt-6"
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    disabled={isDisabled}
                    ref={ref}
                  />

                  <label className="bg-btn-blue flex w-full cursor-pointer justify-center rounded px-2 py-2 text-xs text-[#444]">
                    {placeholder}
                  </label>
                  <div className="pb-1 text-center">
                    <Icon
                      IconComp={Upload}
                      boxSize={16}
                      className="text-gray-700"
                    />
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
        {hasError && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return (
                <div className="absolute -bottom-[4px] right-0">
                  <p className="text-[10px] font-light text-red-500">
                    {message}
                  </p>
                </div>
              )
            }}
          />
        )}
      </div>
    )
  }
)

ImageUpload.displayName = "ImageUpload"

export default ImageUpload
