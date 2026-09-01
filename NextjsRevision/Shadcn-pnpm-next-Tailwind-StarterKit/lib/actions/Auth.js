"use server";
import bcrypt from "bcryptjs";
import { prisma } from "../prisma";


//Registration function
export async function HandleRegistration(formData) {
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
    console.log("Your password doesn't match")
    return {
      status:400,
      message:"confirm password should match  to your password."
    }
   }

  // checking if the user with same email exists already
   if(existingUser){
    console.log("Your Account exists already login to access it.")
    return {
      status : 409 ,
      message : "User already exists please login to access your account",
    }
   };
    
   // hashing the password entered by the user
   const hashedPassword = await bcrypt.hash(password,10);
   //save the data to the database
   
   const newUser = await prisma.user.create({   //creating an user with the credentials
    data:{
      email: email,
      password:hashedPassword,
      name: name
    }
   });

   return {
    status : 200,
    message: "Your account has been created successfully",
    data:{userId: newUser.id}
   }
  
  } catch (e) {
    console.log("REGISTRATION ERROR :", e);
    return {
      status:500,
      message:"Something went wrong!try again later"
    }
  }
}

// Login Authentication Function
export async function HandleLogin(formData) {

  try{
     const email = formData.get("email");
  const password = formData.get("password");

  if(!email || !password) {
    return {
      status:400,
      message:"Please enter the email and password",
    }
  }

  const user = await prisma.user.findUnique({
    where:{email}
  })

  if(!user){
    return {
      status:401,
      message:"Invalid email or password",
    }
  }


  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid){
    return {
      status : 401,
      message:"Invalid email or password"
    }
  }
  return{
    status: 200,
    message:"Logged in successfully",
    data : {
      user:{id: user.id, email: user.email, name:user.name, createdAt : user.createdAt}
    },
  }
  }catch(e){
    console.log("Something Went wrong", e);
    return {
      status:500,
      message:"Something went wrong"
    }
  }
}
