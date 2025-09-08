
import {posts} from '@/app/data/data';
import Post from '@/app/ui/components/Post';
export default function Page({params}: {params: {id: string}}) {
    const post = posts.find((post) => post.id === params.id);
    return (
        <>
            <h2>Blog Posts</h2>
            <Post {...post} />
        </>
    );
}