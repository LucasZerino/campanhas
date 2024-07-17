'use client'
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { BuildingIcon, ChevronDownIcon } from "@/icons/index";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { fetchUserCompanies, fetchPreferredCompany } from "../actions";
import { signOut } from 'next-auth/react';

type User = {
  id: string;
  name: string;
};

type Company = {
  id: string;
  nome: string;
};

const getInitials = (name: string) => {
  const names = name.split(' ');
  const initials = names.map(name => name.charAt(0)).join('');
  return initials.slice(0, 2).toUpperCase();
};

const Header = ({ user }: { user: User }) => {
  const [preferredCompany, setPreferredCompany] = useState<Company | null>(null);
  const [userCompanies, setUserCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const [preferredCompany, companies] = await Promise.all([
          fetchPreferredCompany(user.id),
          fetchUserCompanies(user.id)
        ]);
        setPreferredCompany(preferredCompany);
        setUserCompanies(companies);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [user.id]);

  if (loading) {
    return <div>Carregando...</div>; // Ou qualquer outro indicador de carregamento
  }

  const empresaPadraoNome = preferredCompany ? preferredCompany.nome : "Selecione uma empresa";

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 shadow-sm sm:px-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6 ml-auto mr-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <BuildingIcon className="h-5 w-5" />
                <span>{empresaPadraoNome}</span>
                <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuLabel>Selecionar Empresa</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {userCompanies.map(empresa => (
                <DropdownMenuItem key={empresa.id}>{empresa.nome}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage alt={user.name} src="/placeholder-avatar.jpg" />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
