import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 30%;
  margin-right: 10px;
  margin-top: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 10px;
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    transform: scale(1.03);
  }
  overflow: hidden;
`;
const Wrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ProductImageWrapper = styled.div`
  transition: all 0.2s ease;
`;
const ProductImage = styled.img`
  transition: all 0.2s ease;
  height: 200px;
  width: 100%;
  object-fit: contain;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: gray;
  /* padding: 10px; */
  padding-top: 10px;
  padding-left: 10px;
`;
const Brand = styled.h1`
  font-size: 18px;
  /* padding: 10px; */
  padding-left: 10px;
  margin-top: 10px;
`;
const SizesWrapper = styled.div`
  padding: 10px;
  display: flex;
`;
const SizesLabel = styled.h1`
  font-size: 12px;
  font-weight: 400;
  color: gray;
`;
const SizesContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SizeText = styled.span`
  margin: 0 4px;
  font-size: 12px;
  font-weight: bold;
`;
const ProductBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);

  padding: 10px;
`;
const PriceContainer = styled.div``;
const PriceLabel = styled.h1`
  font-size: 16px;
  color: gray;
  font-weight: 400;
`;
const PriceText = styled.h1`
  font-size: 28px;
  color: white;
  font-weight: 400;
`;
const SmallImagesContainer = styled.div`
  display: flex;
`;
const SmallImageWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 6px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`;
const SmallImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Product = ({ product }) => {
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <Wrapper>
        <Title>{product.title}</Title>
        <Brand>{product.brand}</Brand>
        <SizesWrapper>
          <SizesLabel>Available sizes</SizesLabel>
          <SizesContainer>
            {product.sizes.map((item) => {
              return <SizeText>{item}</SizeText>;
            })}
          </SizesContainer>
        </SizesWrapper>
        <ProductImageWrapper>
          <ProductImage src={product.variants[index].src} />
        </ProductImageWrapper>
        <ProductBottom>
          <PriceContainer>
            <PriceLabel>Price</PriceLabel>
            <PriceText>${product.price}</PriceText>
          </PriceContainer>
          <SmallImagesContainer>
            {product.variants.map((item, index) => {
              return (
                <SmallImageWrapper>
                  <SmallImage src={item.src} onClick={() => setIndex(index)} />
                </SmallImageWrapper>
              );
            })}
          </SmallImagesContainer>
        </ProductBottom>
      </Wrapper>
    </Container>
  );
};

export default Product;
