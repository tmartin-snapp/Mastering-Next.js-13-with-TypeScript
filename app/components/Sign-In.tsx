import { signIn } from "next-auth/react"

export function SignIn() {
  return (
    <form 
      action={async () => {
        await signIn('google')
      }}
    >
      <button type="submit">SignIn</button>
    </form>
  ) 
}


