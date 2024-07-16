'use server'

import { prisma } from '@/services/database'

export async function getUserByEmail(email: string) {
    console.log("Email:", email);
    return await prisma.user.findUnique({ where: { email } })
}