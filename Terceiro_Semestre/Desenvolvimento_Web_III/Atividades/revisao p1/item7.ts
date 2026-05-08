import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function adicionarItem(name: string, quantity: number) {
  // LÓGICA DE VALIDAÇÃO: Bloqueia valores negativos antes do create
  if (quantity < 0) {
    throw new Error("Erro de validação: A quantidade não pode ser um valor negativo.");
  }

  // Se passou pela validação, salva no banco
  try {
    const newItem = await prisma.shoppingItem.create({
      data: {
        name: name,
        quantity: quantity,
        isDone: false
      }
    });
    console.log("Item salvo com sucesso:", newItem);
    return newItem;
  } catch (error) {
    console.error("Erro ao salvar no banco:", error);
  }
}