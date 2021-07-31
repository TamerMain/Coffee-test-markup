import { Fragment } from "react";
import WidthWrapper from "./Components/Common/WidthWrapper";

import Header from "./Components/Header";
import Promotion from './Components/Main/Promotion';
import CoffeeShop from './Components/Main/CoffeeShop';
import Description from "./Components/Main/Description";
import ItemList from "./Components/ItemList/ItemList";
import Footer from "./Components/Footer";

function App() {
  return (
    <Fragment>
      <WidthWrapper>
        <Header />
        <CoffeeShop />
        <Description />
        <Promotion />
      </WidthWrapper>
      <ItemList />
      <WidthWrapper>
        <Footer />
      </WidthWrapper>
    </Fragment>
  );
}

export default App;
