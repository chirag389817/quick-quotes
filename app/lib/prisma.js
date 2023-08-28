import { PrismaClient } from "@prisma/client";

let prisma = null;

if (!prisma) {
    prisma = new PrismaClient();
    console.log("prisma client is generated...");
}

export { prisma };
