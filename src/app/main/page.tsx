import { auth } from '@/services/auth';
import Header from './_components/header';
import Apps from './_components/apps';
import CriarEmpresa from './_components/CriarEmpresa';

// Definindo o tipo para User
type User = {
  id: string;
  name: string;
  empresas: {
    id: string;
    nome: string;
  }[];
  empresaPadraoId?: string;
};

// Componente principal da página
export default async function Page() {
  const session = await auth();
  const user = session?.user as User;

  return (
    <div className="flex flex-col min-h-screen w-full bg-background relative">
      <CriarEmpresa user={user} />
      <Header user={user} />
      <Apps />
    </div>
  );
}
