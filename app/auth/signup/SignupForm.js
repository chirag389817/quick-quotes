"use client";

import CallBackLink from "@/app/components/CallBackLink";
import FormField from "@/app/components/FormField";
import SubmitBtn from "@/app/components/SubmitBtn";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

const SignupForm = () => {
    const router = useRouter();
    const form = useForm();
    const { formState } = form;
    const { errors } = formState;

    const callbackUrl = useSearchParams().get("callbackUrl");

    const onSubmit = async (data) => {
        console.log("Form submitted:", data);

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.error) {
            alert(result.error);
            return;
        }

        const loginStatus = await signIn("credentials", {
            email: result.email,
            password: data.password,
            redirect: false
        });

        if (!loginStatus.error) {
            router.push(callbackUrl);
        } else {
            console.log(res);
            alert(res.error);
        }
    };

    return (
        <>
            <h2 className="text-2xl mb-4">Signup</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                {/* Name */}
                <FormField name="Name" form={form} />

                {/* Email */}
                <FormField name="Email" form={form} />

                {/* Password */}
                <FormField name="Password" form={form} />

                {/* login button */}
                <SubmitBtn name="Signup" />
            </form>
            <CallBackLink
                name="Login"
                href="/auth/login"
                msg="Already have an account?"
            />
        </>
    );
};

export default SignupForm;
