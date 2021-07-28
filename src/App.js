import { Fragment } from "react";
import WidthWrapper from "./Components/Layout/WidthWrapper";

import Header from "./Components/Header";
import Main from "./Components/Main/Main";
import ItemList from "./Components/ItemList/ItemList";
import Footer from "./Components/Footer";

function App() {
  return (
    <Fragment>
      <WidthWrapper>
        <Header />
        <Main />
      </WidthWrapper>
      <ItemList />
      <WidthWrapper>
        <Footer />
      </WidthWrapper>
    </Fragment>
  );
}

export default App;
