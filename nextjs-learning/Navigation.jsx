import Link from "next/link";

function Navbar() {
    return ( 
     <div className="bg-[#f2f2f2] flex align-text-bottom  justify-center gap-10 h-15 text-black  font-bold ">
        <Link className="mt-3" href="/home">Home</Link>
        <Link className="mt-3" href="/about">About</Link>
        <Link className="mt-3" href="/projects">Projects</Link>
     </div>
     );
}
export default Navbar;