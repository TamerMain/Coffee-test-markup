import { makeAutoObservable } from "mobx";

class Store {
  menuOpened = false;
  feedbackOpened = false;

  constructor() {
    makeAutoObservable(this);
  }

  closeBurgerMenu() {
    this.menuOpened = false;
  }

  openBurgerMenu() {
    this.menuOpened = true;
  }

  closeFeedbackModal() {
    this.feedbackOpened = false;
  }

  openFeedbackModal() {
    this.feedbackOpened = true;
  }

  navigateMenu(clickedNavLink) {
    this.menuOpened = false;
    let value = clickedNavLink.target.innerHTML;
    value === "About us" &&
      document
        .getElementById("About us")
        .scrollIntoView({ block: "start", behavior: "smooth" });
    value === "Promotion" &&
      document
        .getElementById("Promotion")
        .scrollIntoView({ block: "start", behavior: "smooth" });
    value === "Shop" &&
      document
        .getElementById("Shop")
        .scrollIntoView({ block: "start", behavior: "smooth" });
    value === "Contacts" &&
      document
        .getElementById("Contacts")
        .scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

export default new Store();
