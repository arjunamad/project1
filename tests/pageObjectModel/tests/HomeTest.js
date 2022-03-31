import { ClientFunction } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import Homepage from '../pages/Homepage';
import { Selector, t } from 'testcafe';

const loginUrl = ("https://id.qa.kidsxap.com.au/");
const homeUrl =('https://portal.qa.kidsxap.com.au/dashboard');
const getUrl = ClientFunction(() => window.location.href);

fixture("Home Page").page(homeUrl)

.beforeEach(async t =>{
    await LoginPage.setEmail("pk@xaptech.com.au");
    await LoginPage.setpassword("Abcd1234$");
    await LoginPage.clickOnLoginButton( );

});

test("loading Home page", async t => {
  await t
    .expect(getUrl()).contains(homeUrl)
    .expect(Homepage.logOutbtn.exists)
    .ok();
});
test("successfully logout", async t => {
    await t.
    Homepage.clickOnLogout();
       
  });
 