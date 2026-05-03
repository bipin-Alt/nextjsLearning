 export default async function ProductFilter({params}){
    console.log(await params);
    return <div>
       <h1>This is the product filter</h1>
    </div>
}