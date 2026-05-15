import Link from "next/link";

export default function Home() {

  return (
   <div>
       <h2>Welcome to the country explorer application, Here you will find difffernt countries and their information.</h2>
       <Link href={"/countries"}>Explore countries</Link>
   </div>
  );
}
