import React from "react";

const SkeletonPost = () => (
    <div className="animate-pulse bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
        <div className="h-5 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
        <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
        <div className="flex space-x-2">
            <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="flex-1">
                <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-800 rounded mb-1"></div>
                <div className="h-3 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
            </div>
        </div>
    </div>
);

const SkeletonPosts = ({ count = 4 }: { count?: number }) => (
    <div>
        {Array.from({ length: count }).map((_, i) => (
            <SkeletonPost key={i} />
        ))}
    </div>
);

export default SkeletonPosts;