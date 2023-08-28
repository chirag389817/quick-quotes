"use client";

import { useRouter } from "next/navigation";
import { AiFillDelete } from "react-icons/ai";

function Quote({ statement, author, id, allowDelete }) {
    const router = useRouter();
    const deleteQuote = async (e) => {
        let res = await fetch("/api/quote", {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ id })
        });
        if (res.statusText === "success") {
            router.refresh();
        } else {
            console.log(res);
            console.log(await res.json());
        }
    };
    return (
        <div className="max-w-4xl mx-auto px-4 mt-8">
            <div className="bg-white p-8 rounded shadow flex items-center">
                <div className="flex-1 pr-5">
                    <h1 className="text-2xl font-bold mb-4 text-slate-800">
                        {`"${statement}"`}
                    </h1>
                    <span className="block text-end text-xl pr-5">
                        &nbsp; - &nbsp;
                        {author}
                    </span>
                </div>
                {allowDelete && (
                    <AiFillDelete
                        className="p-1 rounded-md bg-red-400 text-white text-3xl cursor-pointer hover:bg-red-600"
                        onClick={deleteQuote}
                    />
                )}
            </div>
        </div>
    );
}

export default Quote;
