import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../database";
import { createTransport } from "nodemailer";

const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/signin', // Exemplo de rota para página de login
    signOut: '/auth/signout', // Exemplo de rota para página de logout
    error: '/auth/error', // Exemplo de rota para página de erro
    verifyRequest: '/auth/verify-request', // Exemplo de rota para página de verificação de solicitação
    newUser: '/auth/new-user', // Exemplo de rota para página de novo usuário
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER_URL as string,
      from: process.env.EMAIL_FROM as string,
      sendVerificationRequest: async ({ identifier: email, url }: { identifier: string; url: string }) => {
        const transport = createTransport({
          host: process.env.EMAIL_SERVER as string,
          port: parseInt(process.env.SMTP_PORT as string),
          auth: {
            user: process.env.SMTP_USER as string,
            pass: process.env.SMTP_PASSWORD as string,
          },
        });

        await transport.sendMail({
          to: email,
          from: process.env.EMAIL_FROM as string,
          subject: 'Login no SeuApp - Verificação de Email',
          html: `
            <html>
              <body style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
                <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                  <h2 style="color: #333333;">Bem-vindo ao SeuApp!</h2>
                  <p style="color: #444444;">Para iniciar sua sessão, clique no link abaixo:</p>
                  <p><a href="${url}" style="background-color: #007bff; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Acessar SeuApp</a></p>
                  <p style="color: #666666;">Se você não solicitou este email, pode ignorá-lo com segurança.</p>
                </div>
              </body>
            </html>
          `,
        });
      },
    }),
  ],
});

export { auth, handlers, signIn, signOut };
