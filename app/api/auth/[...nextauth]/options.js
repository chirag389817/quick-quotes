import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions = {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            name: "credentials",
            credentials: {
                name: {
                    label: "Name",
                    type: "text",
                    placeholder: "jsmith"
                },
                email: {
                    label: "Email",
                    type: "email"
                },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                if (!credentials.email || !credentials.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });
                if (!user) throw new Error("user not found");

                const pswdMatch = await bcrypt.compare(
                    credentials.password,
                    user.password
                );
                if (!pswdMatch) throw new Error("Invalid password");

                return user;
            }
        })
    ],
    pages: {
        signIn: "/auth/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    debugger: process.env.NODE_ENV === "development"
};
