'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"
import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RocketIcon } from "@radix-ui/react-icons";

export function AuthForm() {

  const form = useForm()
  const handleSubmit = form.handleSubmit(async(data) => {
    try {
        console.log(data)
        await signIn('email', { email: data.email, redirect: false})
        toast({
            title: "Email enviado",
            description: "Verifique seu email para encontrar o Link de Login."
        })
    } catch (error) {
        toast({
            title: "Error",
            description: "Ocorreu um Erro. Por favor, tente novamente."
        })
    }
  })

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <RocketIcon
            className="mx-auto h-12 w-auto"
            height={48}
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
           Entrar com um link mágico
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Sem necessidade de senha. Enviaremos um link de login seguro para você.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4">
            <br/>
            <div>
              <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                Endereço de e-mail
              </Label>
              <div className="mt-1">
              <Input className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400" id="email" placeholder="Digite seu email" type="email" {...form.register('email')}/>
              </div>
            </div>
            <Button className="w-full bg-green-600 text-white" type="submit" disabled={form.formState.isSubmitting} onClick={handleSubmit}>
              {form.formState.isSubmitting ? 'Enviando...' : 'Enviar link de Login'}
          </Button>
          </CardContent>
        </Card>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            A magic link is a secure login method that eliminates the need for a password. When you enter your email,
            we'll send you a one-time link that you can use to sign in securely.
          </p>
        </div>
      </div>
    </div>
  )
}