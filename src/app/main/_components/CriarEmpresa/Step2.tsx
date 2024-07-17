import { BuildingIcon, ChevronDownIcon } from "@/icons";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from 'next/link';

interface Step2Props {
  nomeEmpresa: string;
  cargo: string;
  setCargo: (value: string) => void;
  aceitoTermos: boolean;
  setAceitoTermos: (value: boolean) => void;
  receberInformacoes: boolean;
  setReceberInformacoes: (value: boolean) => void;
}

const Step2: React.FC<Step2Props> = ({ nomeEmpresa, cargo, setCargo, aceitoTermos, setAceitoTermos, receberInformacoes, setReceberInformacoes }) => (
  <>
    <div className="space-y-2">
      <CardTitle>Detalhes da Empresa</CardTitle>
      <CardDescription>Forneça as informações sobre sua empresa.</CardDescription>
    </div>
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="nome-empresa">Nome da Empresa</Label>
          <Input id="nome-empresa" disabled value={nomeEmpresa} readOnly required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cargo">Cargo</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <BuildingIcon className="h-5 w-5" />
                <span>{cargo ? cargo : 'Selecionar Cargo'}</span>
                <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuLabel>Selecione o Cargo</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {['Gerente', 'Coordenador', 'Analista', 'Desenvolvedor', 'Estagiário', 'Outros'].map((role) => (
                <DropdownMenuItem key={role} onClick={() => setCargo(role)}>{role}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className='flex align-center justify-center flex-col gap-2'>
        <div className="flex items-center space-x-2">
          <Checkbox id="termos" checked={aceitoTermos} onClick={() => setAceitoTermos(!aceitoTermos)} />
          <label htmlFor="termos" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Li e aceito os <Link href={'#'} className="text-primary underline">Termos de Uso</Link> e <Link href={'#'} className="text-primary underline">Política de Privacidade</Link>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="ofertas" checked={receberInformacoes} onClick={() => setReceberInformacoes(!receberInformacoes)} />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Desejo receber ofertas por e-mail e contato do time comercial
          </label>
        </div>
      </div>
    </div>
  </>
);

export default Step2;
