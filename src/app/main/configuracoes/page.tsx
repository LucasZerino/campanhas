import {TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default async function Page() {
  return (
      <div className="flex-1 p-6">
        <Tabs className="w-full" defaultValue="profile">
          <TabsContent value="profile">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da API</CardTitle>
                  <CardDescription>Atualize as configurações da API.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">URL</Label>
                      <Input defaultValue="https://urlapi.com.br" id="url" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Senha</Label>
                      <Input defaultValue="Digite a senha da api" id="senhapi" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                <Button className="ml-auto" variant="outline">
                  Limpar dados
                </Button>
                <Button className="ml-2">Atualizar informações</Button>
              </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
  )
}

