import Button from '@/components/button'
import Heading from '@/components/heading'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import React from 'react'

const ResetPasswordForm = () => {
  return (
    <div>
      <Heading>Password Reset</Heading>
      <p className="text-xs font-medium text-brand-bodyText">
        A security code has been sent! Check your email address to proceed
      </p>
      <form className="mt-6 space-y-8">
        <InputOTP maxLength={5}>
          <InputOTPGroup className="w-full justify-center space-x-1">
            <InputOTPSlot index={0} />
            <InputOTPSeparator />
            <InputOTPSlot index={1} />
            <InputOTPSeparator />
            <InputOTPSlot index={2} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} />
            <InputOTPSeparator />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
        </InputOTP>
        <Button className="text-sm" fullWidth>
          Send Reset Instruction
        </Button>
      </form>
    </div>
  )
}

export default ResetPasswordForm
