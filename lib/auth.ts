import { getServerSession, NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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