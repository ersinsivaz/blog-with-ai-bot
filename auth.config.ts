import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';

export const authConfig = {
  providers: [],
} satisfies NextAuthOptions;

export const {handlers,auth,signIn,signOut} = NextAuth(authConfig);