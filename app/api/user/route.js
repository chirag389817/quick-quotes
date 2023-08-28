import { PrismaClient } from "@prisma/client";
import { chkAuth } from "../chkAuth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = chkAuth(async (data) => {
    const { name, email } = data;
    if (!name)
        return NextResponse.json(
            { error: "Name is required" },
            { status: 200, statusText: "failed" }
        );
    const updatedUser = await prisma.user.update({
        where: { email },
        data: { name }
    });
    return NextResponse.json(
        { error: "Name updated" },
        { status: 200, statusText: "success" }
    );
});
