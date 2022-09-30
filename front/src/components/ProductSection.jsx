import React, { useEffect, useState } from "react";
import getProducts from "../helpers/getProducts";
import ProductCard from "./ProductCard";

export default function ProductSection() {

  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const productsGetAll = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setFilterProduct(data);
      setIsLoading(false); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>  {
    productsGetAll();
  }, []);

  const handleChange = ({target}) => {
    const produtos = products;
    const filter = produtos.filter((product) => product.name.toLowerCase().includes(target.value.toLowerCase()));
    setFilterProduct(filter);
  }

  return (
    <section
      className="flex flex-col items-center mx-auto px-6 py-8"
    >
      <div>
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-[600px]"
          type="text"
          placeholder="pesquise por um produto..."
          onChange={ handleChange }
        />
      </div>
      <div
        className="w-[90%] flex flex-wrap justify-around m-auto mt-6"
      >
        { isloading
          ?  <span>loading...</span>
          : filterProduct.map((product) => (
              <ProductCard
                name={ product.name }
                price={ product.price }
                thumb={ product.thumb }
                quantity={ product.quantity }
              />
            ))
        }
      </div>
    </section>
  )
}