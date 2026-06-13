"use server";

import { signIn, signOut } from "@/auth/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";


export async function handleLoginWithGoogle() {
  try {
    const googleSignin = await signIn('google',{redirectTo :"/profile"});
    console.log("Google signin", googleSignin);
  } catch (e) {
    if(isRedirectError(e)){
        throw e
    }
    return {
      status: 500,
      error: e.message,
      message: "Something went wrong!",
    };
  }
}
export async function handleLoginWithGithub() {
  try {
    const githubSignin = await signIn('github',{redirectTo:"/profile"});
    console.log("Github Sign in", githubSignin)
    console.log("Github Signin:", githubSignin);  
  } catch (e) {
    if(isRedirectError(e)){
        throw e
    }
    return {
      status: 500,
      error: e.message,
      message: "Something went wrong!",
    };
  }
}

export async function handleLogout(){
  await signOut({redirect:"/login"});
}