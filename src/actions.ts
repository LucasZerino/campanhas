'use server'

import { prisma } from '@/services/database'

export async function getUserBusiness(email: string) {
    console.log("Email:", email);
    return await prisma.user.findUnique({
        where: { email },
        include: { empresas: true }  // Include the associated empresa (company)
    });
}
