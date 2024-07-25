import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import UsersService from "@/services/api/users";
import { useToast } from "@/components/ui/use-toast";
import CredentialsProvider from "next-auth/providers/credentials";
import { IUser } from "@/interfaces/user";

const { toast } = useToast();

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          const user: IUser[] = await UsersService.getByEmail(email);

          console.log(user);

          if (user.length === 0) {
            toast({
              title: "Пользователь не найден!",
              description:
                "Пользователь с таким Эмайл адресом не найден, пожалуйста зарегистрируйтесь и повторите снова",
              variant: "default",
            });
            return null;
          }
          if (user && user[0].password === credentials?.password) {
            return { email, password };
          }
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }: { user: User }) {
      try {
        const userExists = await UsersService.getByEmail(user.email as string);
        if (userExists.length === 0) {
          toast({
            title: "Пользователь не найден!",
            description:
              "Пользователь с таким Эмайл адресом не найден, пожалуйста зарегистрируйтесь и повторите снова",
            variant: "default",
          });
          return false;
        }
        return true;
      } catch (error) {
        toast({
          title: "Ошибка",
          description:
            "Произошла ошибка при проверке существования пользователя",
          variant: "destructive",
        });
        return false;
      }
    },

    async session({ session }) {
      return session;
    },
  },
};
