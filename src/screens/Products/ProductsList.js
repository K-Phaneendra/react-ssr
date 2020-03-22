import React from "react";
import ProductCard from "./ProductCard";
import ProductCardContainer from "./ProductCardContainer";

const ProductsList = props => {
  const { products, toggleIsFavorite } = props;
  
  return (
    <>
      <ProductCardContainer>
        {products.map((item, i) => {
          if (item.displayable) {
            return <ProductCard key={i + 1} image={item.media.main.medium.url} item={item} toggleIsFavorite={toggleIsFavorite} />;
          }
        })}
      </ProductCardContainer>
    </>
  );
};

export default ProductsList;
