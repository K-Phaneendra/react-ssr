import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideFilter from "./SideFilter";
import { FETCH_PRODUCTS } from "../../actions";
import ProductsList from "./ProductsList";

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  const fetchProducts = async () => {
    const products = await FETCH_PRODUCTS();
    console.log("products", products);
    setProductsList(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleIsFavorite = productId => {
    const productsListClone = [];
    let productObj = {};
    productsList.forEach(item => {
      productObj = { ...item };
      if (item.id === productId) {
        productObj.isFavorite = !item.isFavorite;
      }
      productsListClone.push(productObj);
    });
    setProductsList(productsListClone);
  };

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <SideFilter />
        </Col>
        <Col sm={8}>
          <ProductsList
            products={productsList}
            toggleIsFavorite={toggleIsFavorite}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
