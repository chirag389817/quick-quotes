"use client";

import { useState } from "react";
import Quote from "./Quote";

function QuotesGroup({ data, allowDelete }) {
    const [quotes, setQuotes] = useState(data);
    return (
        <div>
            {quotes.map((quote) => (
                <Quote
                    key={quote.id}
                    statement={quote.statement}
                    author={quote.author}
                    id={quote.id}
                    setQuotes={setQuotes}
                    allowDelete={allowDelete}
                />
            ))}
        </div>
    );
}

export default QuotesGroup;
