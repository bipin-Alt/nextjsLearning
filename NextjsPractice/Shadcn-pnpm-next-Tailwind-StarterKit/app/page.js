import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hello Next.js</h1>
        <Button variant="outline" className="mt-6">
          Hello World
        </Button>
     
    </div>
  );
}
