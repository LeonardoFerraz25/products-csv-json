import React, { useEffect, useState } from "react";
import getProducts from "../helpers/getProducts";
import ProductCard from "./ProductCard";

export default function ProductSection() {

  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const productsGetAll = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>  {
    productsGetAll();
  }, []);

  return (
    <section>
      { isloading
        ?  <span>loading...</span>
        : products.map((product) => (
            <ProductCard
              name={ product.name }
              price={ product.price }
              thumb={ product.thumb }
            />
          ))
      }
    </section>
  )
}