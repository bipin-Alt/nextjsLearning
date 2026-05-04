import Link from "next/link";

function NotFoundPage() {
    return ( 
        <div>
           <section>
            <h2>404</h2>
            <p>The page you are looking for doesn't exists!! clcik the button below to return to the home page</p>
         <button><Link href={"/"}>Home</Link></button>
           </section>
        </div>
     );
}

export default NotFoundPage;