"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

function GoogleBtn() {
    const callbackUrl = useSearchParams().get("callbackUrl");
    return (
        <div className="mt-2">
            <button
                className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600"
                onClick={(e) => {
                    signIn("google", {
                        callbackUrl
                    });
                }}
            >
                Login with Google
            </button>
        </div>
    );
}

export default GoogleBtn;
