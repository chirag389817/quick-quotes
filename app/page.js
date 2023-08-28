import { PrismaClient } from "@prisma/client";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";

const prisma = new PrismaClient();

async function getQuotes() {
    return await prisma.quotes.findMany({
        orderBy: {
            postedOn: "desc"
        }
    });
}

export default async function Page() {
    const quotes = await getQuotes();
    return (
        <div>
            <Navbar />
            {quotes.map((quote) => (
                <Quote
                    key={quote.id}
                    statement={quote.statement}
                    author={quote.author}
                />
            ))}
        </div>
    );
}
