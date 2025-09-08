
import {posts} from '@/app/data/data';
import Post from '@/app/ui/components/Post';
import { notFound } from 'next/navigation';
export default async function Page({params}: {params: {id: string}}) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const post = posts.find((post) => post.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <>
            <h2>Blog Posts</h2>
            <Post {...post} />
        </>
    );
}