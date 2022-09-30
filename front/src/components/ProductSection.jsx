import React, { useEffect, useState } from "react";
import getProducts from "../helpers/getProducts";
import ProductCard from "./ProductCard";

export default function ProductSection() {

  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const handleChange = ({target}) => {
    setSearch(target.value);
    const produtos = products;
    const produtosFilter = produtos.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    setProducts(produtosFilter);
  }

  return (
    <section >
      <h2>Produtos</h2>
      <div>
        <input type="text" placeholder="pesquise por um produto..."
          onChange={ handleChange }
        />
      </div>
      <div
        className="w-[90%] flex flex-wrap justify-around m-auto mt-20"
      >
        { isloading
          ?  <span>loading...</span>
          : products.map((product) => (
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