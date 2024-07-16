'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { getUserByEmail } from "../actions";
import { signIn } from 'next-auth/react'

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const user = await getUserByEmail(data.email);

      if (!user) {
        toast({
          title: "Usuário não cadastrado ❌",
          description: "Este usuário não está cadastrado. Entre em contato com o administrador.",
        });
        return;
      }

      // Inicia o processo de login com NextAuth
      try{
        await signIn('email', { email: data.email, redirect: false })

        toast({
          title: "Email enviado 📧",
          description: "Verifique seu email para encontrar o Link de Login.",
        });
      }catch(error ){

        toast({
          title: "Erro ao enviar email 😕",
          description: "Ocorreu um erro ao enviar o email de login. Por favor, tente novamente.",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar email de login:", error);

      toast({
        title: "Erro ao enviar email 😕",
        description: "Ocorreu um erro ao enviar o email de login. Por favor, tente novamente.",
      });
    }
  });

  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Bem-vindo de volta! 👋</h1>
          <p className="text-muted-foreground">Faça login na sua conta para continuar.</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@bolt360.com.br"
              required
              {...form.register('email')}
            />
          </div>
          <Button type="submit" 
          className="w-full"
          disabled={form.formState.isSubmitting}
          onClick={handleSubmit}
          >
            <WandIcon className="mr-2 h-4 w-4" />
            {form.formState.isSubmitting ? 'Enviando...' : 'Entrar com Link Mágico'}
          </Button>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-muted" />
            <p className="px-4 text-muted-foreground">Bolt 360</p>
            <div className="h-px flex-1 bg-muted" />
          </div>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Um link mágico é um método seguro de login que elimina a necessidade de senha 🔐.
          </p>
        </div>
      </div>
    </div>
  );
}


function WandIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  )
}
