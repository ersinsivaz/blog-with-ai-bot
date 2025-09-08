import Link from 'next/link';
import React, { JSX } from 'react';

export default function Component({ id, title, content, date }: { id: string, title: string, content: string, date: string }) {
    return (
        <article key={id} className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <Link href={`/blog/posts/${id}`} className="text-sm text-purple-600 hover:underline">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{title}</h1>
            </Link>
            
            
            <div className="prose prose-lg text-gray-700">{content}</div>
        </article>
    );
}