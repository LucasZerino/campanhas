import { auth } from "@/services/auth"

export default async function Page(){
    const session = await auth()
    return (
      <h1>Empresa Page</h1>
      )
    }