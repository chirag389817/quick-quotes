import React from "react";

function Quote({ statement, author }) {
    return (
        <div className="max-w-4xl mx-auto px-4 mt-8">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-2xl font-bold mb-4 text-slate-800">
                    {`"${statement}"`}
                </h1>
                <span className="block text-end text-xl">
                    &nbsp; - &nbsp;
                    {author}
                </span>
            </div>
        </div>
    );
}

export default Quote;
