import UserLogin from "../Pages/login";
import CartPage from "../Pages/CartPage";
import checkoutPage from "../Pages/Checkout";
describe("Test Case 2: Login User with correct email and password", () => {
  const userlogin = new UserLogin();
  const cartpages = new CartPage();
  const checkoutpages = new checkoutPage();
  it("Correct mail pass verificaiton for login ", () => {
    userlogin.visit();
    userlogin.SignUpLoginBtn();
    userlogin.loginWithFixture();
    cartpages.addtocart();
    checkoutpages.loginCheckoutBtn()
    checkoutpages.PaymentwithFixture()
    // userlogin.deleteAccount()
  });
});
