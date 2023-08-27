"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

function CallBackLink({ href, msg, name }) {
    const params = useSearchParams();
    return (
        <Link
            href={{
                pathname: href,
                query: { callbackUrl: params.get("callbackUrl") }
            }}
            className="block mt-3 text-end"
        >
            {msg} &nbsp;
            <span className="underline text-blue-500">{name}</span>
        </Link>
    );
}

export default CallBackLink;
