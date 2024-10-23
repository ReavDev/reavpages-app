"use client"
import Button from "@/components/button"
import Heading from "@/components/heading"
import { Icons } from "@/components/icons"
import Input from "@/components/input"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const forgotPasswordSchema = Yup.object().shape({
 email: Yup.string()
  .email("Please enter a valid email address")
  .required("Email is required"),
})

const ForgotPasswordForm = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(forgotPasswordSchema),
 })

 const onSubmit = (data: Yup.InferType<typeof forgotPasswordSchema>) => {
  console.log("Reset instructions sent to:", data.email)
 }

 return (
  <div>
   <Heading>Forgot your Password?</Heading>
   <p className="font-jaka text-xs font-medium text-brand-bodyText">
    Enter your registered email address to receive a reset instruction
   </p>
   <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
    <div>
     <Input
      placeholder="Enter email address"
      label="Email"
      inputIcon={Icons.messageIcon}
      {...register("email")}
      errors={errors}
     />
    </div>
    <Button className="text-sm" fullWidth type="submit">
     Send Reset Instruction
    </Button>
   </form>
  </div>
 )
}

export default ForgotPasswordForm
