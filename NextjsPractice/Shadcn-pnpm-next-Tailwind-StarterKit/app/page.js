
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Authenticate yourself</h1>
       
        <Link href={"/Home"}>
        <button variant="outline" className="mt-6">
          Get Started
        </button>
      </Link>
    </div>
  );
}
