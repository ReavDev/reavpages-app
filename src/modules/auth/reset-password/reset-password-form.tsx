"use client"
import Button from "@/components/button"
import Heading from "@/components/heading"
import { Icons } from "@/components/icons"
import Input from "@/components/input"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const resetPasswordSchema = Yup.object().shape({
 newPassword: Yup.string()
  .min(6, "Password must be at least 6 characters long")
  .required("New password is required"),
 confirmPassword: Yup.string()
  .oneOf([Yup.ref("newPassword")], "Passwords must match")
  .required("Confirm password is required"),
})

const ResetPasswordForm = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(resetPasswordSchema),
 })

 const onSubmit = (data: Yup.InferType<typeof resetPasswordSchema>) => {
  console.log("Form Submitted", data)
 }

 return (
  <div>
   <div>
    <Heading>Password Reset</Heading>
    <p className="text-xs font-medium text-brand-bodyText">
     Enter your new password
    </p>
    <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
     <Input
      placeholder="Enter password"
      label="New password"
      type="password"
      inputIcon={Icons.lockIcon}
      {...register("newPassword")} // Register the new password input
      errors={errors} // Pass error message to Input
     />
     <Input
      placeholder="Enter password"
      label="Confirm password"
      type="password"
      inputIcon={Icons.lockIcon}
      {...register("confirmPassword")}
      errors={errors}
     />

     <Button className="text-sm" fullWidth type="submit">
      Reset Password
     </Button>
    </form>
   </div>
  </div>
 )
}

export default ResetPasswordForm
