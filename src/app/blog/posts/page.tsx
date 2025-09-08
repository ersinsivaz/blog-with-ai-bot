
import {posts} from '@/app/data/data';
import Post from '@/app/ui/components/Post';
export default async function Posts() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a 1 second delay
    return (
        <>
            <h2>Blog Posts</h2>
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </>
    );
}