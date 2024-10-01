'use client'
import Button from '@/components/button'
import Heading from '@/components/heading'
import { Icons } from '@/components/icons'
import Input from '@/components/input'
import React from 'react'

const ForgotPasswordForm = () => {
  return (
    <div>
      <Heading>Forgot your Password?</Heading>
      <p className="font-jaka text-xs font-medium text-brand-bodyText">
        Enter your registered email address to receive a reset instruction
      </p>
      <form className="mt-6 space-y-5">
        <Input
          name="email"
          placeholder="Enter email address"
          label="Email"
          inputIcon={Icons.messageIcon}
        />
        <Button className="text-sm" fullWidth>
          Send Reset Instruction
        </Button>
      </form>
    </div>
  )
}

export default ForgotPasswordForm
