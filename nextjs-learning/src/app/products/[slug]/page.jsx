async function ProductDetails({params}) {
    console.log(await params);
    return ( 
        <>
         <h2> This is the product details page .....</h2>
        </>
    );
}

export default ProductDetails;