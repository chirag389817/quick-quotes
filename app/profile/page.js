"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

const Profile = () => {
    const isAuthenticated = true; // Set this based on your authentication status
    const registrationTimestamp = new Date();

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSaveClick = () => {
        setNameError("");
        setEmailError("");

        if (!name) {
            setNameError("Name is required");
            return;
        }

        if (!email) {
            setEmailError("Email is required");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Invalid email format");
            return;
        }

        console.log("Profile details saved:", { name, email });
    };

    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} />
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <div className="bg-white p-8 rounded shadow">
                    <h1 className="text-2xl font-bold mb-4">Profile</h1>
                    <div className="mb-4">
                        <label
                            htmlFor="registration"
                            className="block font-medium text-gray-600"
                        >
                            Registered on
                        </label>
                        <p className="text-gray-800">
                            {/* {registrationTimestamp.toLocaleString()} */}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block font-medium text-gray-600"
                        >
                            Name
                        </label>
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                />
                                {nameError && (
                                    <p className="text-red-500">{nameError}</p>
                                )}
                            </>
                        ) : (
                            <p className="text-gray-800">{name}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block font-medium text-gray-600"
                        >
                            Email
                        </label>
                        {isEditing ? (
                            <>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                />
                                {emailError && (
                                    <p className="text-red-500">{emailError}</p>
                                )}
                            </>
                        ) : (
                            <p className="text-gray-800">{email}</p>
                        )}
                    </div>
                    <div className="flex justify-end">
                        {isEditing ? (
                            <>
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                                    onClick={handleSaveClick}
                                >
                                    Save
                                </button>
                                <button
                                    className="ml-2 px-4 py-2 border rounded hover:bg-gray-200 focus:outline-none"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
