import { getServerSession, NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: "612462130092-2mfb40c1o5q4dkfj3s5c0om0f2fgk6t3.apps.googleusercontent.com",
      clientSecret: "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",
    })
  ],
  callbacks: {
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        return true
      } catch (error) {
        return false
      }
    },
    async session({ session }) {
      return session
    }
  }
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session
}
