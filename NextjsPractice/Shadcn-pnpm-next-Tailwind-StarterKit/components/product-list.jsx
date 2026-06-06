import Image from "next/image";

function ProductList({ data }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Dynamic Grid: 1 column on mobile, 2 on tablet, 3 on laptop, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col bg-card text-card-foreground rounded-xl border shadow-xs overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            {/* Image Container with fixed aspect ratio */}
            <div className="relative w-full aspect-square bg-muted flex items-center justify-center overflow-hidden">
              <Image 
                alt={product.title} 
                src={product.thumbnail} 
                loading="eager"
                blur ="true"
                width={300} 
                height={300} 
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Body Details */}
            <div className="flex flex-col flex-1 p-4">
              <header className="mb-2">
                <h3 className="font-semibold text-base leading-tight text-foreground line-clamp-1">
                  {product.title}
                </h3>
              </header>
              
              {/* Optional: if your dummyJSON data includes prices, this formats it nicely */}
              {product.price && (
                <p className="mt-auto font-medium text-sm text-primary">
                  ${product.price.toFixed(2)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;