import React from "react";
import Profile from "./Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import Quote from "../components/Quote";

// export const revalidate = 0;

const prisma = new PrismaClient();

async function page() {
    const session = await getServerSession(authOptions);
    const quotes = await prisma.quotes.findMany({
        where: { postedBy: session.user.email },
        orderBy: {
            postedOn: "desc"
        }
    });
    return (
        <div>
            <Profile name={session.user.name} email={session.user.email} />
            {quotes.map((quote) => (
                <Quote key={quote.id} {...quote} allowDelete={true} />
            ))}
        </div>
    );
}

export default page;
