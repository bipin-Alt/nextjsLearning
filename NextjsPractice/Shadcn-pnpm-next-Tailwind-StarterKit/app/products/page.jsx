import ProductList from "@/components/product-list";

 async function ProductDistribution() {
    const response = await fetch('https://dummyjson.com/products', {
      cache :'force-cache'
    })
    const data = await response.json();
    const products = data.products
    return (
        <>
         <ProductList data={products} />
        </>
    );
}

export default ProductDistribution;
