"use client"
import Button from "@/components/button"
import Heading from "@/components/heading"
import { Icons } from "@/components/icons"
import Input from "@/components/input"

const ResetPasswordForm = () => {
  return (
    <div>
      <div>
        <Heading>Password Reset</Heading>
        <p className="text-xs font-medium text-brand-bodyText">
          Enter your new password
        </p>
        <form className="mt-6 space-y-6">
          <Input
            name="new-password"
            placeholder="Enter password"
            label="New password"
            type="password"
            inputIcon={Icons.lockIcon}
          />
          <Input
            name="password"
            placeholder="Enter password"
            label="Confirm password"
            type="password"
            inputIcon={Icons.lockIcon}
          />

          <Button className="text-sm" fullWidth>
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordForm
