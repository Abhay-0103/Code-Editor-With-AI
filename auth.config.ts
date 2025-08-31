import Github from "next-auth/providers/github";
import Goolge from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export default{
    providers:[
        Github({
            clientId:process.env.AUTH_GITHUB_ID,
            clientSecret:process.env.AUTH_GITHUB_SECRET
        }),
        Goolge({
            clientId:process.env.AUTH_GOOGLE_ID,
            clientSecret:process.env.AUTH_GOOGLE_SECRET,
        })
    ]
} satisfies NextAuthConfig