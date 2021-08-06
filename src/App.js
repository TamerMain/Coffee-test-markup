import { observer } from "mobx-react-lite";
import WidthWrapper from "./Components/Common/WidthWrapper";
import store from "./Store/store";

import Feedback from "./Components/Feedback/Feedback";
import NavigationModal from "./Components/UI/MobileBurgerMenuModal";
import Header from "./Components/Main/Header";
import Promotion from "./Components/Main/Promotion";
import CoffeeShop from "./Components/Main/CoffeeShop";
import Description from "./Components/Main/Description";
import ItemList from "./Components/Main/ItemList/ItemList";
import Footer from "./Components/Main/Footer";

const App = observer(() => {
  return (
    <>
      {store.menuOpened && (
        <NavigationModal
          onCloseMenu={() => store.closeBurgerMenu()}
          onMobileNavMenu={(clickedLink) => store.navigateMenu(clickedLink)}
        />
      )}
      {store.feedbackOpened && (
        <Feedback
          onCloseFeedbackModal={() => store.closeFeedbackModal()}
        />
      )}
      <WidthWrapper>
        <Header
          onOpenMenu={() => store.openBurgerMenu()}
          onNavMenu={(clickedLink) => store.navigateMenu(clickedLink)}
          onOpenFeedbackModal={() => store.openFeedbackModal()}
        />
        <CoffeeShop />
        <Description />
        <Promotion />
      </WidthWrapper>
      <ItemList />
      <WidthWrapper>
        <Footer />
      </WidthWrapper>
    </>
  );
});

export default App;
