'use client'

import { usePathname, useRouter } from "next/navigation";

function Profile() {
    const router = useRouter();
    const pathName = usePathname();
    console.log(pathName)
    return (
     <>
      <h1>This is the profile component. --- client</h1>
      <button onClick={()=>{router.push("/")}}>Navigate to Home page.</button>
     </>
      );
}

export default Profile;