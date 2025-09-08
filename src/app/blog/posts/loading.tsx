import React from "react";
//import SkeletonPosts from "./skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-xl">
                    ...
                </span>
            </div>
            <p className="mt-6 text-lg text-gray-600 animate-pulse">
                Loading posts, please wait
            </p>
        </div>
    );
} 


/* 
export default function Loading() { 
    return <SkeletonPosts count={4} />;
} */