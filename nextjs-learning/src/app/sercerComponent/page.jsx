import RenderData from "@/clientComponent/renderData";
import { Suspense } from "react";

export default async function FetchData() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    return ( 
    <Suspense fallback={<div>loading.........</div>}>
      <RenderData fetchedData={data}/>
    </Suspense>
     );
}
                       