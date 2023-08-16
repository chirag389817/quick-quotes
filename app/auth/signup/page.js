"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/svg/logo-no-background.svg";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!formData.name) validationErrors.name = "Name is required";
        if (!formData.email) validationErrors.email = "Email is required";
        if (!formData.password)
            validationErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            validationErrors.confirmPassword = "Passwords do not match";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Form submitted:", formData);
        }
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
                <h2 className="text-2xl mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 p-2 block w-full rounded-md ${
                                errors.name
                                    ? "border-red-500 border"
                                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 p-2 block w-full rounded-md ${
                                errors.email
                                    ? "border-red-500 border"
                                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 p-2 block w-full rounded-md ${
                                errors.password
                                    ? "border-red-500 border"
                                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
                        />
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`mt-1 p-2 block w-full rounded-md ${
                                errors.confirmPassword
                                    ? "border-red-500 border"
                                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
                        />
                        {errors.confirmPassword && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
