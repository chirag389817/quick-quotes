"use client";

import { useRouter } from "next/navigation";
import { AiFillDelete } from "react-icons/ai";
import { Ubuntu } from "next/font/google";

const font = Ubuntu({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
});

function Quote({ statement, author, id, allowDelete, setQuotes }) {
    const router = useRouter();
    const deleteQuote = async (e) => {
        let res = await fetch("/api/quote", {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ id })
        });
        const result = await res.json();
        if (!result.error) {
            // window.location.reload();
            // router.refresh();
            // reload();
            setQuotes((oldQuote) => oldQuote.filter((item) => item.id !== id));
        } else {
            console.log(res);
            console.log(await res.json());
        }
    };
    return (
        <div className={`max-w-4xl mx-auto px-4 my-5 ${font.className}`}>
            <div className="bg-white py-5 rounded shadow flex items-center">
                <div className="flex-1 px-5 ">
                    <h1 className="text-md md:text-2xl font-bold text-slate-800">
                        {`"${statement}"`}
                    </h1>
                    <span className="block md:text-lg text-end text-sm">
                        &nbsp; - &nbsp;
                        {author}
                    </span>
                </div>
                {allowDelete && (
                    <AiFillDelete
                        className="p-1 mr-2 rounded-md bg-red-400 text-white text-3xl cursor-pointer hover:bg-red-600"
                        onClick={deleteQuote}
                    />
                )}
            </div>
        </div>
    );
}

export default Quote;
