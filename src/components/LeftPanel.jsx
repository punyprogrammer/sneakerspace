import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProducts } from "../redux/productRedux";
import { products as productdata } from "../data/dummyData";
import styled from "styled-components";
const Container = styled.div`
  padding: 20px;
  height: 75vh;
  width: 20%;
  left: 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-top: 20px;
  border-radius: 10px;
  margin-left: 25px;
  position: sticky;
  top: 80px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FilterContainer = styled.div`
  /* border: 1px solid lightgray; */
  padding: 4px 8px;
  border-radius: 4px;
`;
const FilterHeading = styled.h2`
  font-weight: 600;
  font-size: 22px;
`;
const CheckBoxOption = styled.div`
  margin-top: 10px;
`;
const CheckBoxInput = styled.input`
  accent-color: black;
  &:checked {
    background-color: black;
    color: black;
  }
`;
const CheckBoxLabel = styled.label`
  margin-left: 10px;
  color: gray;
`;
const PricesSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  outline: none;
`;
const PricesOption = styled.option`
  padding: 8px;
  font-size: 16px;

  &:hover {
    color: white;
    -webkit-text-fill-color: white;
    background: #1e90ff repeat url("http://i.stack.imgur.com/Istm3.jpg");
  }
`;
const SizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Size = styled.div`
  padding: 4px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 6px;
  margin-top: 6px;
  background-color: #f2e8e8;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: black;
    color: white;
  }
  background-color: ${(props) => props.selected === props.item && "black"};
  color: ${(props) => props.selected === props.item && "white"};
`;
const SizeText = styled.h3`
  font-weight: 500;
`;
const ResetButton = styled.button`
  padding: 10px;
  font-size: 15px;
  border: none;
  outline: none;
  display: block;
  align-self: center;
  margin: 0 auto;
  width: 80%;

  background-color: black;
  color: white;
  transition: all 0.15s ease;
  border-radius: 25px;

  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const LeftPanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const state = useSelector((state) => state);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const initialProducts = productdata;
  const [filterSize, setFilterSize] = useState(0);
  const [filterPrice, setFilterPrice] = useState({
    minValue: 1,
    maxValue: 1000,
  });
  const categoryOptions = [
    {
      value: "Sports",
      label: "Sportswear",
    },
    { value: "Casual", label: "Casualwear" },
    { value: "Formal", label: "Formalwear" },
  ];
  const pricesOptions = [
    { label: "$1-$1000", value: { minValue: 1, maxValue: 1000 } },
    {
      label: "$1-$100",
      value: {
        minValue: 1,
        maxValue: 100,
      },
    },
    {
      label: "$100-$200",
      value: {
        minValue: 100,
        maxValue: 200,
      },
    },
    {
      label: "$200-$300",
      value: {
        minValue: 200,
        maxValue: 300,
      },
    },

    {
      label: "$300-$400",
      value: {
        minValue: 300,
        maxValue: 400,
      },
    },
    { label: "$400-$500", value: { minValue: 400, maxValue: 500 } },
    {
      label: "$500-$600",
      value: {
        minValue: 500,
        maxValue: 600,
      },
    },
    {
      label: "$600-$700",
      value: {
        minValue: 600,
        maxValue: 700,
      },
    },
    {
      label: "$700-$800",
      value: {
        minValue: 700,
        maxValue: 800,
      },
    },
    {
      label: "$800-$900",
      value: {
        minValue: 800,
        maxValue: 900,
      },
    },
    {
      label: "$900-$1000",
      value: {
        minValue: 900,
        maxValue: 1000,
      },
    },
  ];
  const sizes = [6, 7, 8, 9, 10, 11, 12];
  const handleCheck = (e) => {
    if (categoryFilter.indexOf(e.target.value) === -1) {
      const updatedCategoryFilter = [...categoryFilter, e.target.value];
      setCategoryFilter(updatedCategoryFilter);
    } else {
      const updatedCategoryFilter = categoryFilter.filter(
        (category) => category !== e.target.value
      );
      setCategoryFilter(updatedCategoryFilter);
    }
  };
  const handleSize = (item) => {
    if (item === filterSize) {
      setFilterSize(0);
    } else {
      setFilterSize(item);
    }
  };

  const applyFilters = (e) => {
    e.preventDefault();
    //apply category filter
    console.log(initialProducts);
    let filteredResults = initialProducts.slice();
    //apply category filter
    if (categoryFilter.length > 0) {
      filteredResults = filteredResults.filter(
        (item) => categoryFilter.indexOf(item.category) > -1
      );
    }
    //apply size filter
    if (filterSize > 0) {
      filteredResults = filteredResults.filter(
        (item) => item.sizes.indexOf(filterSize) > -1
      );
    }
    //apply pricefilter
    filteredResults = filteredResults.filter(
      (item) =>
        item.price >= filterPrice.minValue && item.price < filterPrice.maxValue
    );
    //dispatch changes
    dispatch(changeProducts(filteredResults));
  };
  const resetFilters = (e) => {
    e.preventDefault();
    setFilterSize(0);
    setCategoryFilter([]);
    setFilterPrice({ minValue: 1, maxValue: 1000 });
    dispatch(changeProducts(initialProducts.slice()));
  };

  return (
    <Container>
      <Wrapper>
        <FilterContainer>
          <FilterHeading>Categories</FilterHeading>
          {categoryOptions.map((item) => {
            return (
              <CheckBoxOption>
                <CheckBoxInput
                  checked={categoryFilter.indexOf(item.value) > -1}
                  onClick={handleCheck}
                  value={item.value}
                  type="checkbox"
                />
                <CheckBoxLabel>{item.label}</CheckBoxLabel>
              </CheckBoxOption>
            );
          })}
        </FilterContainer>
        <FilterContainer>
          <FilterHeading>Price</FilterHeading>
          <PricesSelect
            onChange={(e) =>
              setFilterPrice({
                minValue: parseInt(e.target.value.split(",")[0]),
                maxValue: parseInt(e.target.value.split(",")[1]),
              })
            }
          >
            {pricesOptions.map((item) => (
              <PricesOption
                minValue={item.value.minValue}
                maxValue={item.value.maxValue}
                value={[item.value.minValue, item.value.maxValue]}
              >
                {item.label}
              </PricesOption>
            ))}
          </PricesSelect>
        </FilterContainer>
        <FilterContainer>
          <FilterHeading>Sizes</FilterHeading>
          <SizesContainer>
            {sizes.map((item) => (
              <Size
                selected={filterSize}
                item={item}
                onClick={() => handleSize(item)}
              >
                <SizeText>{item}</SizeText>
              </Size>
            ))}
          </SizesContainer>
        </FilterContainer>
        <FilterContainer>
          <ResetButton onClick={applyFilters}>Apply Filters</ResetButton>
        </FilterContainer>
        <FilterContainer>
          <ResetButton onClick={resetFilters}>Reset Filters</ResetButton>
        </FilterContainer>
      </Wrapper>
    </Container>
  );
};

export default LeftPanel;
