import GoogleBtn from "../components/GoogleBtn";
import Image from "next/image";
import logo from "../../public/logo.png";

export const metadata = {
    title: "authentication",
    description: "Simple authentication for quick quotes"
};

export default function RootLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <div className="mb-4 flex justify-center">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="w-14 h-14"
                        priority={true}
                    />
                </div>
                {children}
            </div>
            <h1 className="mt-2">OR</h1>
            <GoogleBtn />
        </div>
    );
}
