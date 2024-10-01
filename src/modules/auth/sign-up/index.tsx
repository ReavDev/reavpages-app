'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import Heading from '@/components/heading'
import Button from '@/components/button'
import { Icons } from '@/components/icons'
import Input from '@/components/input'
import { LockKeyhole, Mail } from 'lucide-react'

const SignUpForm = () => {
  return (
    <div className="">
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

      <div className="relative mt-6 flex items-center justify-between gap-4 text-gray-600">
        <hr className="h-[1px] w-full bg-gray-600" />
        or
        <hr className="h-[1px] w-full bg-gray-600" />
      </div>

      <form className="mt-6 space-y-5">
        <Input
          name="email"
          placeholder="Enter email address"
          label="Email"
          inputIcon={Icons.messageIcon}
        />

        <Input
          name="password"
          placeholder="Enter password"
          label="Password"
          type="password"
          inputIcon={Icons.lockIcon}
        />
        <Button fullWidth>
          <Link href="/rest-password">Continue</Link>
        </Button>
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

export default SignUpForm
