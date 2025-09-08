import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
                <svg
                    className="w-20 h-20 text-indigo-400 mb-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                    />
                </svg>
                <h1 className="text-4xl font-bold text-indigo-700 mb-2">404</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Oops! The blog post you&apos;re looking for was not found.
                </p>
                <Link
                    href="/blog/posts"
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    Back to Posts
                </Link>
            </div>
        </div>
    );
}