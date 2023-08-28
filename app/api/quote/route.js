import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { chkAuth } from "../chkAuth";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const POST = chkAuth(async (data) => {
    const { author, statement, email } = data;
    console.log(author, statement, email);
    if (!author || !statement)
        return NextResponse.json(
            { error: "Statement and Author name are required" },
            { status: 200, statusText: "failed" }
        );
    const quote = await prisma.quotes.create({
        data: { author, statement, postedBy: email }
    });
    revalidatePath("/");
    return NextResponse.json(
        { msg: "Quote added successfully" },
        { status: 200, statusText: "success" }
    );
});

export const DELETE = chkAuth(async (data) => {
    const { id, email } = data;
    // console.log("delete quote", id, email);
    const quote = await prisma.quotes.delete({
        where: { id }
    });
    revalidatePath("/");
    return NextResponse.json(
        { msg: "Quote deleted successfully" },
        { status: 200, statusText: "success" }
    );
});
