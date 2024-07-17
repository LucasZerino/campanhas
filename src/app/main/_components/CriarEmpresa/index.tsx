'use client'

import { useEffect, useState } from 'react';
import { toast } from "@/components/ui/use-toast";
import { fetchCompanyDataServer, CadastraUsuario } from '../../actions';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Step1 from './Step1';
import Step2 from './Step2';
import { validateEmail, validateCNPJ, formatPhoneNumber } from "../../utils/validations";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import  axios  from "axios";

type User = {
    id: string;
    name: string;
    empresas: {
      id: string;
      nome: string;
    }[];
    empresaPadraoId?: string;
};
  
  const CriarEmpresa: React.FC<{ user: User }> = ({ user }) => {
    const [step, setStep] = useState(1);
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cargo, setCargo] = useState('');
    const [aceitoTermos, setAceitoTermos] = useState(false);
    const [receberInformacoes, setReceberInformacoes] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ipUsuario, setIpUsuario] = useState<string | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
  
    useEffect(() => {
      // Função para obter o IP do usuário
      const fetchUserIP = async () => {
        try {
          const response = await axios.get('https://api.ipify.org/?format=json');
          const userIP = response.data.ip;
          setIpUsuario(userIP);
        } catch (error) {
          console.error('Erro ao obter IP do usuário:', error);
          // Trate o erro conforme necessário
        }
      };
  
      fetchUserIP();
    }, []);

    if (user.empresaPadraoId) {
        return null; // Retorna null para não exibir o formulário de cadastro
    }
    
  
    const handleNext = async () => {
      if (step === 1) {
        // Validação dos campos de entrada
        if (!nomeCompleto || !email || !cnpj || !telefone) {
          toast({ title: 'Erro', description: 'Por favor, preencha todos os campos.', variant: 'destructive' });
          return;
        }
        if (!validateEmail(email)) {
          toast({ title: 'Erro', description: 'Por favor, insira um email corporativo válido.', variant: 'destructive' });
          return;
        }
        if (!validateCNPJ(cnpj)) {
          toast({ title: 'Erro', description: 'Por favor, insira um CNPJ válido.', variant: 'destructive' });
          return;
        }
    
        setLoading(true);
        try {
          const data = await fetchCompanyDataServer(cnpj);
          setNomeEmpresa(data.nome);
          setStep(2);
        } catch (error) {
          toast({ title: 'Erro', description: 'Falha ao buscar dados da empresa.', variant: 'destructive' });
        }
        setLoading(false);
      } else if (step === 2) {
        // Validação dos campos da segunda etapa
        if (!aceitoTermos) {
          toast({ title: 'Erro', description: 'Você deve aceitar os termos de uso e política de privacidade.', variant: 'destructive' });
          return;
        }
        if (!cargo) {
          toast({ title: 'Erro', description: 'Você deve selecionar seu cargo.', variant: 'destructive' });
          return; // Retorna aqui para evitar continuar a execução
        }
    
        setLoading(true);
        try {
          // Chama a função cadastrarUsuario com os dados coletados
          await CadastraUsuario(
            user.id,
            nomeCompleto,
            email,
            cnpj,
            telefone,
            nomeEmpresa,
            cargo,
            aceitoTermos,
            receberInformacoes,
            ipUsuario // Passa o IP do usuário para a função cadastrarUsuario
          );
          toast({ title: 'Sucesso', description: 'Empresa cadastrada com sucesso!', variant: 'default' });
          // Reinicializa os estados após o cadastro
          handleCancel();
          // Após sucesso, podemos setar o step para 0 ou null para esconder o componente
          setShowSuccess(true);
        } catch (error) {
          toast({ title: 'Erro', description: 'Falha ao cadastrar empresa.', variant: 'destructive' });
        }
        setLoading(false);
      }
    };
  
    const handleBack = () => {
      setStep(1);
    };
  
    const handleCancel = () => {
      setStep(1);
      setNomeCompleto('');
      setEmail('');
      setCnpj('');
      setTelefone('');
      setNomeEmpresa('');
      setCargo('');
      setAceitoTermos(false);
      setReceberInformacoes(false);
      setShowSuccess(false); // Resetar o estado de sucesso ao cancelar
    };
  
    if (showSuccess) {
      return null; // Retorna um componente vazio quando o toast de sucesso é exibido
    }
  
    return (
      <div className="absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm z-50">
        <Card>
          <CardHeader className="space-y-1">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Registro de Empresa</h2>
              <p className="text-sm text-muted-foreground">Forneça as informações para criar a sua empresa.</p>
            </div>
            <div className="space-y-1 pt-4">
              <Progress value={step === 1 ? 50 : 100} />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col space-y-8">
            {step === 1 ? (
              <Step1
                nomeCompleto={nomeCompleto}
                setNomeCompleto={setNomeCompleto}
                email={email}
                setEmail={setEmail}
                cnpj={cnpj}
                setCnpj={setCnpj}
                telefone={telefone}
                setTelefone={setTelefone}
              />
            ) : (
              <Step2
                nomeEmpresa={nomeEmpresa}
                cargo={cargo}
                setCargo={setCargo}
                aceitoTermos={aceitoTermos}
                setAceitoTermos={setAceitoTermos}
                receberInformacoes={receberInformacoes}
                setReceberInformacoes={setReceberInformacoes}
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleCancel}>Cancelar</Button>
            <div className="flex gap-2">
              {step === 2 && <Button variant="outline" onClick={handleBack}>Voltar</Button>}
              <Button onClick={handleNext} disabled={loading}>{step === 2 ? 'Concluir' : 'Próximo'}</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  export default CriarEmpresa;