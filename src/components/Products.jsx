import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";
const Container = styled.div`
  width: 70%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  margin-left: 30px;
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductsHeading = styled.h2`
  font-weight: 600;
`;
const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SortText = styled.h4`
  font-size: 20px;
`;
const SortSelect = styled.select`
  font-size: 20px;
  padding: 5px;
  border: none;
  outline: none;
`;
const SortOption = styled.option``;
const ProductsContainer = styled.div``;
const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const array = [...Array(10).keys()];

const Products = () => {
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    console.log("Products Changes");
  }, [products]);
  return (
    <Container>
      <Wrapper>
        <ProductsHeader>
          <ProductsHeading>Best sellers</ProductsHeading>
        </ProductsHeader>
        <ProductsContainer>
          <ProductsWrapper>
            {products.map((item) => {
              return <Product key={item.id} product={item} />;
            })}
          </ProductsWrapper>
        </ProductsContainer>
      </Wrapper>
    </Container>
  );
};

export default Products;
