import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Quick Quotes",
    description: "explore and make quick quotes"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
