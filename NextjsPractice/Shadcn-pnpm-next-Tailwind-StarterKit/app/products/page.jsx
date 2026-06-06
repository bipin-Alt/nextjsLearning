'use client'
import ProductList from "@/components/product-list";
import { useQuery, useQueryClient } from "@tanstack/react-query";

  function ProductDistribution() {  // If i need to fetch data with  react query then..........
    const queryClient = useQueryClient();
    const {data, isLoading, error, refetch} = useQuery({  // the advantage of tanstack query is that it will automatically handles loading state error and success state as well with caching.
        queryKey :['products'],
        queryFn : async ()=>{
            const response = await fetch('https://dummyjson.com/products');
            if(!response.ok) throw new Error('Failed to fetch Products');
            const resData = await response.json();
             console.log(resData);
             console.log("IS LOADING ? ", isLoading);
            return resData.products;
        },
        staleTime : 2 * 60 * 1000 // by default we had 5  minutes but maybe in some component you need shorter cache time so you can change from here like this
    })
    console.log(data);

    return (
        <>
         <ProductList data={data || []} isLoading ={isLoading} error={error} />
        </>
    );
}

export default ProductDistribution;
