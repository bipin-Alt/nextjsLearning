"use server";
import bcrypt from "bcryptjs";
import { prisma } from "../prisma";


//Registration function
export async function HandleRegistration(formData) {
  console.log(formData);
  try {

    //selecting elements
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword")

    if (!email || !password) {  //checking if the email and password is empty
      return { status:400, message:"Please enter your passwords and "};
    }

   const existingUser = await prisma.user.findUnique({   //checking if the user already exists 
    where :{email},
   });

   //for form validation of the passwords didn't match 
   if(password !== confirmPassword) {
    return {
      status:400,
      message:"confirm password should match  to your password."
    }
   }

  // checking if the user with same email exists already
   if(existingUser){
    return {
      status : 409 ,
      message : "User already exists please login to access your account",
    }
   };
    
   // hashing the password entered by the user
   const hashedPassword = await bcrypt.hash(password,10);
   //save the data to the database
   
   const newUser = await prisma.user.create({
    data:{
      email : email,
      password:hashedPassword,
      name: name
    }
   });
   



  } catch (e) {
    console.log("REGISTRATION ERROR :", e);
  }
}

// Login Authentication Function
export async function HandleLogin(formData) {
  console.log(formData);
}
