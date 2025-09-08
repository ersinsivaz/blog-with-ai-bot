"use client";

import React from "react";

export default function PostsError() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-pink-100 to-yellow-100">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center max-w-md">
                <svg
                    className="w-16 h-16 text-red-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 48 48"
                >
                    <circle cx="24" cy="24" r="22" strokeWidth="4" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M16 16l16 16M32 16L16 32"
                    />
                </svg>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
                <p className="text-gray-600 mb-6 text-center">
                    We couldn't load the blog posts. Please try refreshing the page or come back later.
                </p>
                <a
                    href="/blog/posts"
                    className="inline-block px-6 py-2 bg-red-400 text-white rounded-lg shadow hover:bg-red-500 transition"
                >
                    Retry
                </a>
            </div>
        </div>
    );
}