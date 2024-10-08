"use client"

import Button from "@/components/button"
import Heading from "@/components/heading"
import { Icons } from "@/components/icons"
import Input from "@/components/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"

const SignUpForm = () => {
  const securityRules = [
    "6 Characters",
    "Uppercase",
    "Lowercase",
    "Number",
    "Special Character",
  ]

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

      <form className="mt-6 space-y-5">
        <Input
          name="email"
          placeholder="Enter email address"
          label="Email"
          inputIcon={Icons.messageIcon}
        />
        <PasswordInput securityRules={securityRules} />

        <Button fullWidth href="reset-password">
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

const PasswordInput = ({ securityRules }: { securityRules: string[] }) => {
  return (
    <div className="space-y-2">
      <Input
        name="password"
        placeholder="Enter password"
        label="Password"
        type="password"
        inputIcon={Icons.lockIcon}
      />
      <Heading size="h6" className="font-jaka font-medium text-brand-bodyText">
        Must contain:
      </Heading>
      <div className="mr-9 flex w-fit flex-wrap gap-2">
        {securityRules.map((rule) => (
          <SecurityBadge key={rule} rule={rule} />
        ))}
      </div>
    </div>
  )
}

const SecurityBadge = ({ rule }: { rule: string }) => (
  <RadioGroup
    aria-readonly
    className="flex w-fit items-center rounded-3xl border-[0.5px] p-[6px] font-jaka text-xs text-[#868686]"
  >
    <RadioGroupItem disabled value={rule} id={rule} />
    <Label htmlFor={rule} className="text-xs font-normal text-[#868686]">
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
