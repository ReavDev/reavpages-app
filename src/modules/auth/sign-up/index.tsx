"use client"
import Button from "@/components/button"
import Heading from "@/components/heading"
import { Icons } from "@/components/icons"
import Input from "@/components/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const signUpSchema = Yup.object().shape({
 email: Yup.string()
  .email("Invalid email address")
  .required("Email is required"),
 password: Yup.string()
  .min(6, "Password must be at least 6 characters long")
  .required("Password is required"),
})

const SignUpForm = () => {
 const securityRules = [
  "6 Characters",
  "Uppercase",
  "Lowercase",
  "Number",
  "Special Character",
 ]

 const [rulesPassed, setRulesPassed] = useState<boolean[]>(
  new Array(securityRules.length).fill(false)
 )

 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(signUpSchema),
 })

 const onSubmit = (data: Yup.InferType<typeof signUpSchema>) => {
  console.log("Form Submitted", data)
 }

 const allRulesPassed = () => {
  return rulesPassed.every((rule) => rule === true)
 }

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target
  if (name === "password") {
   validatePassword(value)
  }
 }

 const validatePassword = (password: string) => {
  const newRulesPassed = [
   password.length >= 6,
   /[A-Z]/.test(password),
   /[a-z]/.test(password),
   /\d/.test(password),
   /[!@#$%^&*(),.?":{}|<>]/.test(password),
  ]

  setRulesPassed(newRulesPassed)
 }

 return (
  <div>
   <Heading size="h6" className="-mt-2 mb-5 text-[#1E1E1E]">
    Sign up now and start with a free 20-page plan!
   </Heading>

   <Button
    variant="cal_outline"
    className="border border-gray-400 text-sm"
    leftIcon={<Icons.google className="w-4" />}
    fullWidth
   >
    Continue with Google
   </Button>

   <DividerWithText text="or" />

   <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
    <Input
     placeholder={`Enter Email`}
     label="Email"
     inputIcon={Icons.messageIcon}
     {...register("email")}
     errors={errors}
    />
    <div className="space-y-2">
     <Input
      placeholder="Enter Password"
      label="Password"
      type="password"
      inputIcon={Icons.lockIcon}
      {...register("password")}
      onChange={handleChange}
      errors={errors}
     />
     <>
      <Heading size="h6" className="font-jaka font-medium text-brand-bodyText">
       Must contain:
      </Heading>
      <div className="mr-9 flex w-fit flex-wrap gap-2">
       {securityRules.map((rule, index) => (
        <SecurityBadge key={rule} rule={rule} isChecked={rulesPassed[index]} />
       ))}
      </div>
     </>
    </div>

    <Button fullWidth type="submit" disabled={!allRulesPassed()}>
     Continue
    </Button>
    <p className="text-sm">
     By signing up, I agree to the ReavHub&apos;s{" "}
     <Link href="/terms" className="font-medium text-brand-primary">
      Terms of Service
     </Link>
    </p>
   </form>
  </div>
 )
}

const SecurityBadge = ({
 rule,
 isChecked,
}: {
 rule: string
 isChecked: boolean
}) => (
 <RadioGroup
  aria-readonly
  className={`flex w-fit items-center rounded-3xl border-[0.5px] border-[#868686] bg-white p-[6px] font-jaka text-xs`}
 >
  <RadioGroupItem disabled value={rule} id={rule} checked={isChecked} />
  <Label htmlFor={rule} className={`text-xs font-normal text-[#868686]`}>
   {rule}
  </Label>
 </RadioGroup>
)

const DividerWithText = ({ text }: { text: string }) => (
 <div className="relative mt-6 flex items-center justify-between gap-4 text-gray-600">
  <hr className="h-[1px] w-full bg-gray-600" />
  {text}
  <hr className="h-[1px] w-full bg-gray-600" />
 </div>
)

export default SignUpForm
