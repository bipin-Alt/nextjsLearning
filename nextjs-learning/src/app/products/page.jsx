import Link from "next/link";

function Products() {
  const products = [
    {
      id: 1,
      title: "Redmi Note 9 Pro",
      price: 31200,
    },
    {
      id: 2,
      title: "Lenevo Ideapad Slim 3i",
      price: 93500,
    },
    {
      id: 3,
      title: "Iphone 17 pro max",
      price: 350000,
    },
  ];
  return (
    <>
      <h2>These are the products availabe in our store : </h2>
      {products.map((product) => (
        <div className="text-white border-2 border-amber-50" key={product.id}>
          <p> product id : {product.id}</p>
          <p className="text-white">{product.title}</p>
          <p>{product.price}</p>
          <Link href={`/products/${product.id}`}>
            <button className="bg-emerald-950 text-amber-50 p-1 rounded-0.5xl">
              Product Details
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Products;
