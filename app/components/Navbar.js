"use client";

import Link from "next/link";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const NavbarUI = () => {
    const data = useSession();
    const path = usePathname();
    // console.log(data);
    return (
        <nav className="bg-blue-500 py-4 sticky top-0">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-white text-xl font-bold font-serif"
                        >
                            QQ
                        </Link>
                    </div>
                    <div className="flex items-center">
<Link
                                    href={{
                                        pathname: "/add-quote",
                                        query: { callbackUrl: path }
                                    }}
                                    className="text-white mr-7"
                                >
                                    Add Quote
                                </Link>

                        {data.status === "authenticated" ? (
                            <>
                                                                <Link
                                    href="/profile"
                                    className="text-white mr-5"
                                >
                                    Profile
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={{
                                        pathname: "/auth/login",
                                        query: { callbackUrl: path }
                                    }}
                                    className="text-white mr-7"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={{
                                        pathname: "/auth/signup",
                                        query: { callbackUrl: path }
                                    }}
                                    className="text-white mr-5"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default function Navbar() {
    return (
        <SessionProvider>
            <NavbarUI isAuthenticated={true} />
        </SessionProvider>
    );
}
