"use client"
import Heading from "@/components/heading"
import { chelsea_market } from "@/fonts"
import React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className={`relative flex min-h-screen w-full flex-col`}>
      <div className="my-auto flex w-full justify-center p-6 md:px-8 lg:p-5">
        <div className="flex w-[30em] flex-col space-y-5 rounded-2xl border border-r-gray-200 p-8 shadow">
          <Heading
            size="h5"
            className={`text-brand-primary ${chelsea_market.className}`}
          >
            REAVHUB
          </Heading>
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
