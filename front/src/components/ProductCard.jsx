import React from "react";

export default function ProductCard({ name, price, thumb }) {
  return (
    <div>
      <div>
        <img src={ thumb } alt={ name } />
      </div>
      <span>{ name }</span>
      <span>{ price }</span>
    </div>
  )
}