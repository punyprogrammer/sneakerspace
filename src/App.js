import React from "react";
import Topbar from "./components/Topbar";
import LeftPanel from "./components/LeftPanel";
import Products from "./components/Products";
import styled from 'styled-components'
const Container=styled.div`
display: flex;
`
const App = () => {
  return (
    <div>
      <Topbar />
      <Container>

      <LeftPanel />
      <Products />
      </Container>
    </div>
  );
};

export default App;
