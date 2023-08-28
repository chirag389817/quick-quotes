"use client";

import { useForm } from "react-hook-form";
import FormField from "../components/FormField";
import { useRouter, useSearchParams } from "next/navigation";

function AddQuoteComponent() {
    const form = useForm();
    const callbackUrl = useSearchParams().get("callbackUrl");
    const router = useRouter();
    const onSubmit = async (data) => {
        console.log(data);
        let res = await fetch("/api/quote", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ ...data })
        });
        const result = await res.json();
        if (!result.error) {
            router.push(callbackUrl);
        } else {
            console.log(res);
            console.log(await res.json());
        }
    };
    return (
        <div className="max-w-7xl mx-auto px-4 mt-8">
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white p-8 rounded shadow flex flex-col"
                noValidate
            >
                <h1 className="text-2xl font-bold mb-4">Add Quote</h1>
                <FormField name="Statement" type="text" form={form} />
                <FormField name="Author" type="text" form={form} />
                <div className="mb-4 self-end">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mx-2"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddQuoteComponent;
