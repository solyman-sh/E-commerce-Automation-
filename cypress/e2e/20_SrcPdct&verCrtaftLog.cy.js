import RegistrationPage from "../Pages/Registration";
import UserLogin from "../Pages/login";
import CartPage from "../Pages/CartPage";
import productPage from "../Pages/product";


describe("Test Case 12: Add Products in Cart", () => {
  const registration = new RegistrationPage();
  const cartpages = new CartPage();
  const loginpage = new UserLogin()
  const product = new productPage()
  
  it("Add Product cart verificaitonn", function () {
    registration.visit();
    product.productBtn()
    product.searchProduct()
    cartpages.addtocartPro();
    loginpage.SignUpLoginBtn()
    loginpage.loginWithFixture()
    cartpages.cartBtn();
  });
});
