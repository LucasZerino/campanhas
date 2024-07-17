import { CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { formatPhoneNumber } from "../../utils/validations";
interface Step1Props {
  nomeCompleto: string;
  setNomeCompleto: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  cnpj: string;
  setCnpj: (value: string) => void;
  telefone: string;
  setTelefone: (value: string) => void;
}

const Step1: React.FC<Step1Props> = ({ nomeCompleto, setNomeCompleto, email, setEmail, cnpj, setCnpj, telefone, setTelefone }) => (
  <>
    <div className="space-y-2">
      <CardTitle>Detalhes do Usuário</CardTitle>
      <CardDescription>Forneça as informações básicas sobre você.</CardDescription>
    </div>
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="nome-completo">Nome Completo</Label>
          <Input id="nome-completo" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email Corporativo</Label>
          <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cnpj">CNPJ</Label>
          <Input id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="Telefone">Telefone</Label>
          <Input id="telefone" value={formatPhoneNumber(telefone)} onChange={(e) => setTelefone(e.target.value)} required />
        </div>
      </div>
    </div>
  </>
);

export default Step1;
