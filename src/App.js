import { useState } from "react";
import WidthWrapper from "./Components/Common/WidthWrapper";

import Modal from "./Components/Layout/Modal";
import Header from "./Components/Header";
import Promotion from "./Components/Main/Promotion";
import CoffeeShop from "./Components/Main/CoffeeShop";
import Description from "./Components/Main/Description";
import ItemList from "./Components/ItemList/ItemList";
import Footer from "./Components/Footer";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenuHandler = () => {
    setMenuOpened(true);
  };

  async function closeMenuHandler() {
    setMenuOpened(false);
  };

  return (
    <>
      {menuOpened && <Modal onCloseMenu={closeMenuHandler}/>}
      {!menuOpened && (
        <>
          <WidthWrapper>
            <Header onOpenMenu={openMenuHandler} />
            <CoffeeShop />
            <Description />
            <Promotion />
          </WidthWrapper>
          <ItemList />
          <WidthWrapper>
            <Footer />
          </WidthWrapper>
        </>
      )}
    </>
  );
}

export default App;
