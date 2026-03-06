import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  const novoUsuario = await prisma.user.create({
    data: {
      email: data.email,
      passwordHash: data.passwordHash,
      planId: data.planId,
    },
  });
  return NextResponse.json(novoUsuario);
}