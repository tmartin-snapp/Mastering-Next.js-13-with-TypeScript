"use client"

import { signIn } from "next-auth/react"

const SignIn = () => {
  return <button onClick={() => signIn("google")}>SignIn</button>
}

export default SignIn
