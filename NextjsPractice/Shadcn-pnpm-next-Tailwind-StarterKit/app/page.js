import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Note Application</h1>
       <p>Save your feelings and important things with ease</p>
        <Link href={"/xnote"}>
        <Button variant="outline" className="mt-6">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
