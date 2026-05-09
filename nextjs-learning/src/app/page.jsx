import FetchData from "./sercerComponent/page";




export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-lg text-[#f2f2f2f2] font-bold">Hello Next JS</h1>
      <FetchData/>
    </div>
  );
}
