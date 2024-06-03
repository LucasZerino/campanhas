import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from '@auth/prisma-adapter' 
import { prisma } from "../database"

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/autht',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/main',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
        server: process.env.EMAIL_SERVER_URL,
        from: process.env.EMAIL_FROM
    })
  ],
})