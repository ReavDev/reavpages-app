"use client"
import FadeInOut from "@/components/fade"
import IfElse from "@/components/if-else"
import TabSwitcher from "@/components/menu/TabSwitcher"
import React from "react"
import LoginForm from "./login"
import SignUpForm from "./sign-up"

const AuthMain = () => {
  const [selectedAuthTab, setSelectedAuthTab] = React.useState<string>("log-in")
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
        ifOn={selectedAuthTab === "sign-up"}
        ifOnElse={selectedAuthTab === "log-in"}
        onElse={
          <FadeInOut duration={2}>
            <LoginForm />
          </FadeInOut>
        }
      >
        <FadeInOut duration={2}>
          <SignUpForm />
        </FadeInOut>
      </IfElse>
    </>
  )
}
const authTabs = [
  { text: "Sign Up", status: "sign-up" },
  { text: "Log In", status: "log-in" },
]
export default AuthMain
