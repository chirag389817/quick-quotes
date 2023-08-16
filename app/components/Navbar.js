import Link from "next/link";
import Image from "next/image";
import logo from "../../public/png/logo-no-background-white.png";

const Navbar = ({ isAuthenticated }) => {
    return (
        <nav className="bg-blue-500 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="text-white text-lg font-bold">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="w-8 h-8"
                                priority={true}
                            />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <>
                                <Link
                                    href="/profile"
                                    className="text-white mr-4"
                                >
                                    Profile
                                </Link>
                                <Link href="/logout" className="text-white">
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-white mr-4">
                                    Login
                                </Link>
                                <Link href="/signup" className="text-white">
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

export default Navbar;
