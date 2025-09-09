"use client";

import {posts} from '@/app/data/data';
import Post from '@/app/ui/components/Post';
import { User } from '@/app/data/models/user';
import { useState,useEffect } from 'react';
import { getSession } from 'next-auth/react';

export default function Posts() {
    //await new Promise((resolve) => setTimeout(resolve, 2000));

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getSession().then((session) => {
            setUser(session?.user || null);
        })
    }, []);

    return (
        <>
            <h3>Welcome {user?.name || 'Guest'}</h3>
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </>
    );
}