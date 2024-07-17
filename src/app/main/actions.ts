'use server'

import axios from 'axios';
import { prisma } from '@/services/database'

export async function fetchCompanyDataServer(cnpj: string) {
  // Remove todos os caracteres não numéricos do CNPJ
  const formattedCnpj = cnpj.replace(/\D/g, '');

  try {
    const response = await axios.get(`https://receitaws.com.br/v1/cnpj/${formattedCnpj}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do CNPJ:', error);
    return null;
  }
}

export async function CadastraUsuario(
    idUsuario: string,
    nomeCompleto: string,
    email: string,
    cnpj: string,
    telefone: string,
    nomeEmpresa: string,
    cargoNome: string,
    aceitoTermos: boolean,
    receberInformacoes: boolean,
    ipUsuario: string | null
  ) {
    try {
      // Cria a nova empresa
      const novaEmpresa = await prisma.empresa.create({
        data: {
          nome: nomeEmpresa,
          CNPJ: cnpj
        }
      });
  
      // Cria o cargo para a nova empresa
      const novoCargo = await prisma.cargo.create({
        data: {
          nome: cargoNome,
          empresaId: novaEmpresa.id
        }
      });
  
      // Define o perfil como Admin
      const perfilAdmin = await prisma.perfil.create({
        data: {
          nome: 'Admin',
          userId: idUsuario,
          empresaId: novaEmpresa.id
        }
      });
  
      // Atualiza os dados do usuário, conecta a nova empresa e associa o cargo
      const usuarioAtualizado = await prisma.user.update({
        where: { id: idUsuario },
        data: {
          name: nomeCompleto,
          email: email,
          mailCorporativo: email,
          telefone: telefone,
          empresas: {
            connect: {
              id: novaEmpresa.id // Conecta a nova empresa ao usuário
            }
          },
          empresaPadraoId: novaEmpresa.id, // Define a nova empresa como empresa padrão
          cargos: {
            connect: {
              id: novoCargo.id // Conecta o novo cargo ao usuário
            }
          }
        },
        include: {
          empresas: true, // Inclui dados das empresas após atualização
          cargos: true // Inclui dados dos cargos após atualização
        }
      });
  
      // Cria os aceites do usuário
      const aceites = [];
      if (aceitoTermos) {
        aceites.push(
          await prisma.acceptance.create({
            data: {
              type: 'TermsOfUse',
              accepted: true,
              userId: idUsuario,
              acceptedIP: ipUsuario
            }
          })
        );
      }
      if (receberInformacoes) {
        aceites.push(
          await prisma.acceptance.create({
            data: {
              type: 'CommercialOffers',
              accepted: true,
              userId: idUsuario,
              acceptedIP: ipUsuario
            }
          })
        );
      }
  
      console.log('Usuário cadastrado com sucesso:', usuarioAtualizado);
  
      return {
        usuario: usuarioAtualizado,
        novaEmpresa,
        novoCargo,
        aceites
      };
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      throw error; // Rejeita a promise com o erro
    } finally {
      await prisma.$disconnect(); // Fecha a conexão com o Prisma
    }
  }
  

// Função para buscar a empresa preferida do usuário
export const fetchPreferredCompany = async (userId: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          empresaPadrao: true,
        },
      });
  
      return user?.empresaPadrao || null;
    } catch (error) {
      console.error('Erro ao buscar a empresa preferida do usuário:', error);
      throw error;
    }
  };


// Função para buscar a lista de empresas do usuário
export const fetchUserCompanies = async (userId: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          empresas: true,
        },
      });
  
      return user?.empresas || [];
    } catch (error) {
      console.error('Erro ao buscar a lista de empresas do usuário:', error);
      throw error;
    }
  };