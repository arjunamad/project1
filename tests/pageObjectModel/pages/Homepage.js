import { Selector, t } from "testcafe";

class HomePage {
  constructor() {
    this.logOutbtn = Selector("#lnkHeaderLogout");
    this.welcomeLabel = Selector(".welcome-text");
  }
  async clickOnLogout() {
    await t .click(this.logOutbtn);
  }
}

export default new HomePage();
