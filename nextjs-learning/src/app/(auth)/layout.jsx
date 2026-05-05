import Link from "next/link";

function AuthLayout({children}) {
    return ( 
        <>
         <header>
            This is auth layout 
         </header>
         <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>login</Link>
            <Link href={"/"}>register</Link>
         </nav>
         <main>
            {children}
         </main>
        </>
     );
}

export default AuthLayout;