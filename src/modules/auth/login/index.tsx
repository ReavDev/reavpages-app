"use client"
import Button from "@/components/button"
import Heading from "@/components/heading"
import { Icons } from "@/components/icons"
import Input from "@/components/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const loginSchema = Yup.object().shape({
 email: Yup.string()
  .email("Please enter a valid email address")
  .required("Email is required"),
 password: Yup.string().required("Password is required"),
})

const LoginForm = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(loginSchema),
 })

 const onSubmit = (data: Yup.InferType<typeof loginSchema>) => {
  console.log("Form Submitted", data)
 }

 return (
  <div className="">
   <Heading size="h6" className="-mt-2 mb-5 text-[#1E1E1E]">
    Welcome back! Log in to continue.
   </Heading>

   <Button
    variant="cal_outline"
    className="border border-gray-400 text-sm"
    leftIcon={<Icons.google className="w-4" />}
    fullWidth
   >
    Continue with Google
   </Button>

   <div className="relative mt-5 flex items-center justify-between gap-4 text-gray-600">
    <hr className="h-[1px] w-full bg-gray-600" />
    or
    <hr className="h-[1px] w-full bg-gray-600" />
   </div>

   <form className="mt-4 space-y-5" onSubmit={handleSubmit(onSubmit)}>
    <div>
     <Input
      placeholder="Enter email address"
      label="Email"
      inputIcon={Icons.messageIcon}
      {...register("email")}
      errors={errors}
     />
    </div>

    <div className="space-y-2">
     <Input
      placeholder="Enter password"
      label="Password"
      type="password"
      inputIcon={Icons.lockIcon}
      {...register("password")}
      errors={errors}
     />
    </div>

    <div className="flex items-center justify-between">
     <div className="flex items-center space-x-1">
      <Checkbox id="terms" />
      <Label
       htmlFor="terms"
       className="mt-1 font-jaka text-xs font-medium text-[#676767] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       Stay logged in
      </Label>
     </div>
     <Link
      href={"forgot-password"}
      className="mt-1 font-jaka text-xs font-medium text-brand-primary"
     >
      Forgot password?
     </Link>
    </div>

    <Button fullWidth type="submit">
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

export default LoginForm
