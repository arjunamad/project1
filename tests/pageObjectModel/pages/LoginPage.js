import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.emailInput = Selector("input#txtUserName");
    this.passwordlInput = Selector("input#txtPassword");
    this.loginInput = Selector("#btnLogin");
    this.respond = Selector("div.validation-summary-errors");
  }
  async setEmail(email) {
    await t.typeText(this.emailInput, email);
  }
  async setpassword(password) {
    await t.typeText(this.passwordlInput, password);
  }
  async clickOnLoginButton() {
    await t.click(this.loginInput);
  }
  async displayErrorMessage() {
    this.respond.innerText;
  }
}

export default new LoginPage();
