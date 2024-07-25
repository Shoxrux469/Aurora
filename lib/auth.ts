import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import UsersService from "@/services/api/users";
import { IUser } from "@/interfaces/user";
// const { toast } = useToast();

interface CurrentUser extends User {
  password?: string | null;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const currentUser = (await UsersService.getByEmail(email)) as IUser[];

        if (currentUser.length === 0) {
          return null;
        }
        if (currentUser[0].password === password) {
          return {
            id: currentUser[0].id,
            email: currentUser[0].email,
            name: currentUser[0].name,
            orders: currentUser[0].orders,
            cart: currentUser[0].cart,
          } as User;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }: { user: CurrentUser }) {
      try {
        const currentUser = await UsersService.getByEmail(user.email as string);
        console.log(currentUser);
        if (currentUser.length === 0) {
          console.log("User wasn't found");
          return false;
        }
        if (currentUser[0].password !== user.password) {
          return false;
        }
        localStorage.setItem("user", JSON.stringify(currentUser[0]));
        return true;
      } catch (error) {
        console.log("Error during user lookup:", error);
        return false; // Indicate failure to sign in
      }
    },

    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: "@/components/login-form/LoginForm",
  },
};
