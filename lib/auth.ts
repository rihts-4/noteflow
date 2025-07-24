import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import db from "./db"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
        credentials: {
            email: {},
            password: {}
        },
        authorize: async (credentials) => {
            const email = typeof credentials?.email === "string" ? credentials.email : "";
            const password = typeof credentials?.password === "string" ? credentials.password : "";

            const user = await db.user.findFirst({
                where: {
                    email,
                    password
                }
            })

            if (!user) {
                throw new Error("Invalid credentials")
            }

            return user
        }
    })
  ],
})