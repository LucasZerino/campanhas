export interface User {
    id: string;
    name: string | null;
    email: string;
    emailVerified?: string | null;
    image: string | null;
    empresaId?: string | null;
    createdAt?: string;
    updatedAt?: string;
  }