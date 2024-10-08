import type { Metadata } from 'next'
import { cn } from '@/utils'
import { jaka } from '@/fonts'
import '../styles/globals.scss'
import { Providers } from './provider'
import BetaModal, { UsingBetaMode } from '@/components/global/BetaModal'

export const metadata: Metadata = {
 title: 'REAVHUB',
 description:
  'Choose a name for your  workspace to get you started, you can change it later.',
}

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <html
   lang="en"
   suppressHydrationWarning
   className={cn('antialiased', jaka.className)}
  >
   <body>
    <Providers>
     <UsingBetaMode />
     <div className="mx-auto min-h-dvh w-full max-w-[1500px]">
      {children}
      <BetaModal />
     </div>
    </Providers>
   </body>
  </html>
 )
}
