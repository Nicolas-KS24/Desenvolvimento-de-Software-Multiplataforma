if (data.quantity < 0) {
    throw new Error("Quantidade não pode ser negativa");
}
await prisma.item.create({ data });