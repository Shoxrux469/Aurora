import { IUser } from "@/interfaces/user";
import { getServerSession, NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import UsersService from "@/services/api/users";
import CredentialsProvider from "next-auth/providers/credentials";

interface IUserData extends IUser {
  password: string;
  createTime: string;
  updateTime: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "612462130092-2mfb40c1o5q4dkfj3s5c0om0f2fgk6t3.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await UsersService.getByEmail(
            credentials!.email as string
          );

          const { createTime, updateTime, password, ...profileData } =
            user as IUserData;

          return profileData;
        } catch (error) {
          console.error("Error during credentials authentication:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        return true;
      } catch (error) {
        console.log("THERE IS AN ERROR" + error);
        return false;
      }
    },
    async session({ session, token }) {
      // console.log("Session callback - token:", token);
      session.user = token.user as IUser;
      // console.log("Session callback - session:", session);

      return session;
    },
    async jwt({ token, user }) {
      // console.log("JWT callback - user:", user);
      if (user) {
        token.user = user;
        // console.log("JWT callback - token:", token);
      }
      return token;
    },
  },
};

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  const user = session?.user as IUser;

  return user;
}
