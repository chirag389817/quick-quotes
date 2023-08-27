"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import FormField from "@/app/components/FormField";
import SubmitBtn from "@/app/components/SubmitBtn";
import CallBackLink from "@/app/components/CallBackLink";
import { signIn } from "next-auth/react";

const LoginForm = () => {
    const router = useRouter();
    const form = useForm();

    const callbackUrl = useSearchParams().get("callbackUrl");

    const onSubmit = async (data) => {
        const res = await signIn("credentials", {
            ...data,
            redirect: false
        });
        console.log(res);

        if (!res.error) {
            router.push(callbackUrl);
        } else {
            console.log(res);
            alert(res.error);
        }
    };

    return (
        <>
            <h2 className="text-2xl mb-4">Login</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                {/* Email */}
                <FormField name="Email" form={form} />

                {/* Password */}
                <FormField name="Password" form={form} />

                {/* login button */}
                <SubmitBtn name="Login" />
            </form>
            <CallBackLink
                name="Signup"
                href="/auth/signup"
                msg="Don't have an account?"
            />
        </>
    );
};

export default LoginForm;
