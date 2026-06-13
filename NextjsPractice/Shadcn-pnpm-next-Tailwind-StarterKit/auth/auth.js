import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth} =NextAuth({
    providers :[
        Google({
            clientId : process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
        GitHub({
            clientId : process.env.AUTH_GITHUB_ID,
            clientSecret : process.env.AUTH_GITHUB_SECRET
        })
    ],
    callbacks :{
        //save token from provider to jwt
        async jwt({token, account}){
            if(account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({session, token}){
            session.accessToken = token.accessToken;
            return session;
        }
    }
})