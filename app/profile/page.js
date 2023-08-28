import React from "react";
import Profile from "./Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import Quote from "../components/Quote";
import QuotesGroup from "../components/QuotesGroup";

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
            <QuotesGroup data={quotes} allowDelete={true} />
        </div>
    );
}

export default page;
