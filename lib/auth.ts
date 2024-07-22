import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import UsersService from "@/services/api/users";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ user }: { user: User }) {
      try {
        const userExists = await (user.email as string);
        if (!userExists) {
          await UsersService.postUser(user);
          return true;
        } else {
          return true;
        }
      } catch (error) {
        return false;
      }
    },

    async session({ session }) {
      try {
        return session;
      } catch (error) {
        throw error;
      }
    },
  },
};
