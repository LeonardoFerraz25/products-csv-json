import React from "react";

export default function ProductCard({ name, price, thumb, quantity }) {
  return (
    <div
      className="bg-white rounded-md shadow-md overflow-hidden w-[250px] h-[400px] relative
      hover: transition-all mb-8 flex flex-col items-center pt-4"
    >
      <div
        className="flex w-[230px] h-[230px]"
      >
        <img
          src={ thumb }
          alt={ name }
          className="h-full w-full"
        />
      </div>
      <span
        className="text-gray-500 text-sm mt-6"
      >Estoque: { quantity }</span>
      <div
        className="flex flex-col items-center justify-center absolute bottom-8"
      >
        <span
          className="text-xl font-bold"
        >{ name }</span>
        <span>R$:   { parseFloat(price).toFixed(2)}</span>
      </div>
    </div>
  )
}