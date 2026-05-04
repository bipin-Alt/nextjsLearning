import { defaultConfig } from "next/dist/server/config-shared";

async function getProducts (){
    const number = Math.random() > 0.5;
    console.log(number);
    if(number){
      throw new Error("failed to fetch Data");
    }
    return [
        {
            id:1, name:"hello",
        },
        {
            id:2, name:"Bipin",
        },
        {
            id:3, name:"Poudel",
        },
        {
            id:4, name:"Alt"
        }
    ]
}

export default async function errorExample (){
    const products = await getProducts();

   return (
    <div>
        <h1>Product List</h1>
        <section>
            {
                products.map((product)=><div key={product.id}>
                    <p>{product.name}</p>
                </div>)
            }
        </section>
    </div>
   )
}