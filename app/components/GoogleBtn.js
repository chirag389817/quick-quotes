"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function GoogleBtn() {
    const callbackUrl = useSearchParams().get("callbackUrl");
    return (
        <div className="mt-2">
            <button
                className="py-2 px-4 rounded w-full shadow-md bg-white flex items-center hover:bg-blue-200"
                onClick={(e) => {
                    signIn("google", {
                        callbackUrl
                    });
                }}
            >
                Continue with
                <Image
                    src="/google_logo.png"
                    alt="google logo"
                    className="ml-2"
                    width={20}
                    height={20}
                />
            </button>
        </div>
    );
}

export default GoogleBtn;
