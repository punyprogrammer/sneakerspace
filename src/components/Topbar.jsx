import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import styled from "styled-components";
const Container = styled.div`
  height: 80px;
  position: sticky;
  top: 0px;
  z-index: 100;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const Left = styled.div`
  flex: 25%;
  display: flex;
  justify-content: flex-end;
`;
const SearchContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 2px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;
const SearchInput = styled.input`
  padding: 10px;
  border: none;
  outline: none;
  padding: 10px;
  background: transparent;
  color: white;
`;
const SearchLogo = styled.text``;
const Center = styled.div`
  text-align: center;
  flex: 50%;
`;
const Logo = styled.h1`
  font-weight: 400;
  color: white;
`;

const Right = styled.div`
  flex: 25%;
  display: flex;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: white;
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <SearchInput placeholder="Search shoes here..." />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SneakerSpace.com</Logo>
        </Center>
        <Right>
          <Menu>
            <MenuItem>
              <AccountCircleRoundedIcon />
            </MenuItem>
            <MenuItem>
              <ShoppingCartOutlinedIcon />
            </MenuItem>
            <MenuItem>
              <LogoutRoundedIcon />
            </MenuItem>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
