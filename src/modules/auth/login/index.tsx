'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import Heading from '@/components/heading'
import Button from '@/components/button'
import { Icons } from '@/components/icons'
import Input from '@/components/input'
import { LockKeyhole, Mail } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

interface LoginValues {
  email: string
  password: string
}

// const validationSchema = yup.object({
//   email: yup.string().required("Email is required").email("Email is invalid"),
//   password: yup.string().required("Password is required"),
// });

const LoginForm = () => {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm<LoginValues>({
  //   resolver: yupResolver(validationSchema),
  // });
  // const authLogin = useAuthLogin();

  // const handleLogin = (data: LoginValues) => {
  //   console.log(data);
  // };

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

      <form className="mt-4 space-y-5">
        <Input
          name="email"
          placeholder="Enter email address"
          label="Email"
          inputIcon={Icons.messageIcon}
        />
        <div className="space-y-2">
          <Input
            name="password"
            placeholder="Enter password"
            label="Password"
            type="password"
            inputIcon={Icons.lockIcon}
          />
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
              href={'forgot-password'}
              className="mt-1 font-jaka text-xs font-medium text-brand-primary"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <Button fullWidth>Continue</Button>
        <p className="text-sm">
          By signing up, I agree to the ReavHub&apos;s{' '}
          <Link href="/terms" className="font-medium text-brand-primary">
            Terms of Service
          </Link>
        </p>
      </form>
    </div>
  )
}

// LoginPage.auth = false;

export default LoginForm
