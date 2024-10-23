"use client"
import Button from "@/components/button"
import FadeInOut from "@/components/fade"
import Heading from "@/components/heading"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Fragment, useState } from "react"
import ResetPasswordForm from "./reset-password-form"

const ResetPasswordOtp = () => {
  const [step, setStep] = useState("otp")

  const renderOtpForm = () => (
    <div>
      <Heading>Password Reset</Heading>
      <p className="text-xs font-medium text-brand-bodyText">
        A security code has been sent! Check your email address to proceed.
      </p>
      <form className="mt-6 space-y-6">
        <div className="flex flex-col gap-2">
          <InputOTP maxLength={5}>
            <InputOTPGroup className="w-full justify-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <Fragment key={index}>
                  <InputOTPSlot index={index} />
                  {index < 4 && <InputOTPSeparator />}
                </Fragment>
              ))}
            </InputOTPGroup>
          </InputOTP>
          <Button
            size="sm"
            className="ml-auto w-fit font-semibold text-brand-primary"
            variant="ghost"
          >
            Resend code
          </Button>
        </div>

        <Button className="text-sm" fullWidth onClick={() => setStep("form")}>
          Reset Password
        </Button>
      </form>
    </div>
  )

  return (
    <Fragment>
      {step === "otp" ? (
        renderOtpForm()
      ) : (
        <FadeInOut>
          <ResetPasswordForm />
        </FadeInOut>
      )}
    </Fragment>
  )
}

export default ResetPasswordOtp
