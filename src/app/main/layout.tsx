import { PropsWithChildren } from "react";
import { Sidebar, SidebarHeader, SidebarMain, SidebarLink, SidebarFooter } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { auth } from "@/services/auth";

export default  async function Layout({ children }: PropsWithChildren) {
  const session = await auth(); // Obtenha a sessão do usuário aqui

  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Sidebar>
        <SidebarHeader />
        <SidebarMain>
        <SidebarLink href="/main" iconName="LayoutGridIcon">Dashboard</SidebarLink>
          <SidebarLink href="/main/instancias" iconName="LayersIcon">Listar Instâncias</SidebarLink>
          <SidebarLink href="/main/configuracoes" iconName="SettingsIcon">Configurações</SidebarLink>
          <SidebarLink href="/main/pagamento" iconName="CreditCardIcon">Pagamento</SidebarLink>
          <SidebarLink href="/main/empresa" iconName="BuildingIcon">Empresas</SidebarLink>
          <SidebarLink href="/main/usuarios" iconName="UsersIcon">Usuários</SidebarLink>
        </SidebarMain>
        <SidebarFooter user={session?.user} />
      </Sidebar>
      <div className="flex flex-col">
        <Navbar user={session?.user}/>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
