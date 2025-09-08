
import {posts} from '@/app/data/data';
import Post from '@/app/ui/components/Post';
export default function Posts() {
    return (
        <>
            <h2>Blog Posts</h2>
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </>
    );
}