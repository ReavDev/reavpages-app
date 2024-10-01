'use client'
import TabSwitcher from '@/components/menu/TabSwitcher'
import React from 'react'
import SignUpForm from './sign-up'
import IfElse from '@/components/if-else'
import FadeInOut from '@/components/fade'
import LoginForm from './login'

const AuthMain = () => {
  const [selectedAuthTab, setSelectedAuthTab] =
    React.useState<string>('sign-up')
  return (
    <>
      <div className="mt-10 w-full">
        <TabSwitcher
          setStatus={setSelectedAuthTab}
          status={selectedAuthTab}
          tabs={authTabs}
        />
      </div>
      <IfElse
        ifOn={selectedAuthTab === 'sign-up'}
        ifOnElse={selectedAuthTab === 'log-in'}
        onElse={
          <FadeInOut>
            <LoginForm />
          </FadeInOut>
        }
      >
        <FadeInOut>
          <SignUpForm />
        </FadeInOut>
      </IfElse>
    </>
  )
}
const authTabs = [
  { text: 'Sign Up', status: 'sign-up' },
  { text: 'Log In', status: 'log-in' },
]
export default AuthMain
