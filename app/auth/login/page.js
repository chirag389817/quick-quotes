"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/svg/logo-no-background.svg";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email and password are not empty
        if (!formData.email) {
            setError("Email is required");
            return;
        } else if (!formData.password) {
            setError("Password is required");
            return;
        }

        // Perform login logic
        console.log("Form submitted:", formData);
        setError("");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-blue-50">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <div className="mb-4 flex justify-center">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="w-14 h-14"
                        priority={true}
                    />
                </div>
                <h2 className="text-2xl mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs mt-1">{error}</p>
                    )}

                    <div className="mt-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
