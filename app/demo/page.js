"use client";

import React from "react";
import { useForm } from "react-hook-form";

function page() {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="grid place-content-center h-screen w-screen">
            <form
                className="max-w-lg"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <label className="block" htmlFor="name">
                    Name
                </label>
                <input
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "name is required",
                        minLength: 4
                    })}
                    placeholder="Chirag"
                />
                <p className="text-red-500 text-xs mt-1">
                    {errors.name?.message}
                </p>
                <label className="block" htmlFor="email">
                    email
                </label>
                <input
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    id="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email address"
                        },
                        validate: {
                            demo: (val) => {
                                if (val === "c@a") return "not allowed";
                                else return true;
                            }
                        }
                    })}
                    placeholder="chirag389817@gmail.com"
                />
                <p className="text-red-500 text-xs mt-1">
                    {errors.email?.message}
                </p>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 mt-3"
                    type="submit"
                >
                    submit
                </button>
            </form>
        </div>
    );
}

export default page;
