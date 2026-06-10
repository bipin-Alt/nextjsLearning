"use server";
import { signIn } from "next-auth/react";

export async function handleLogin(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("EMAIL IS :", email);
    console.log("PASSWORD IS :", password);
    
    if (!result.ok) {
      return {
        status: 401,
        error: e.message,
        message: "Authentication Failed! Invalid Credentials",
      };
    }
  } catch (e) {
    return {
      status: 500,
      error: e.message,
      message: "Something went wrong!",
    };
  }
}
