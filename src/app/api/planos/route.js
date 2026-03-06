import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// LISTAR (Read do CRUD)
export async function GET() {
  const planos = await prisma.plan.findMany();
  return NextResponse.json(planos);
}

// CRIAR (Create do CRUD)
export async function POST(request) {
  const data = await request.json();
  const novoPlano = await prisma.plan.create({
    data: {
      name: data.name,
      price: data.price,
      maxLinks: data.maxLinks,
      maxClicks: data.maxClicks,
    },
  });
  return NextResponse.json(novoPlano);
}