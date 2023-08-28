import React from "react";
import Profile from "./Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import Quote from "../components/Quote";
import QuotesGroup from "../components/QuotesGroup";
import LineThroughText from "../components/LineThroughText";

// export const revalidate = 0;

export const metadata = {
    title: "QQ  - Profile",
    description: "Your profile on quick quotes"
};

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
            <LineThroughText>
                <h1 className="text-xl font-bold text-gray-700">Your Quotes</h1>
            </LineThroughText>
            <QuotesGroup data={quotes} allowDelete={true} />
        </div>
    );
}

export default page;
