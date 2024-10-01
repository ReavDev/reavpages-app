import AuthLayout from '@/components/layout/auth-layout'
import React from 'react'

export default function ForgothPasawordLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthLayout>{children}</AuthLayout>
}
