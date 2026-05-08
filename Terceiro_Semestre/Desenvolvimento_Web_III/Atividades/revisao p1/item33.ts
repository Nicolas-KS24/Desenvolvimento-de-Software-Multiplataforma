const items = await prisma.shoppingItem.findMany({
    where: { isDone: true }
});