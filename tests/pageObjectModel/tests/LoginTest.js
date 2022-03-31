import { ClientFunction } from "testcafe";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import { Selector, t } from "testcafe";

const url = "https://id.qa.kidsxap.com.au/";
const getUrl = ClientFunction(() => window.location.href);

fixture("Login Page").page(url);

test("loading login page", async (t) => {
  await t
    .expect(getUrl())
    .contains(url)
    .expect(LoginPage.loginInput.exists)
    .ok();
});
test("successfully login", async (t) => {
  await LoginPage.setEmail("pk@xaptech.com.au");
  await LoginPage.setpassword("Abcd1234$");
  await LoginPage.clickOnLoginButton("#btnLogin");
  await t.navigateTo("'https://portal.qa.kidsxap.com.au/dashboard'");

  //await t.expect(Homepage.welcomeLabel.innerText).contains("Hello Piyush");
});

test("invalid email", async (t) => {
  await LoginPage.setEmail("test@xaptech.com.au");
  await LoginPage.setpassword("Abcd1234$");
  await LoginPage.clickOnLoginButton();
  await t
    .expect(LoginPage.respond.innerText)
    .contains("Invalid username or password");
});
test("invalid password", async (t) => {
  await LoginPage.setEmail("pk@xaptech.com.au");
  await LoginPage.setpassword("abcd1df234$");
  await LoginPage.clickOnLoginButton();
  await t
    .expect(LoginPage.respond.innerText)
    .contains("Invalid username or password");
});
