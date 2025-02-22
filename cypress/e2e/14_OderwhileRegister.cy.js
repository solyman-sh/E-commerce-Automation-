import RegistrationPage from "../Pages/Registration";
import checkoutPage from "../Pages/Checkout";
import CartPage from "../Pages/CartPage";
import productPage from "../Pages/product";

describe("Test Case 12: Add Products in Cart", () => {
  const registration = new RegistrationPage();
  const cartpages = new CartPage();
  const checkpage = new checkoutPage();
  
  beforeEach(() => {
    cy.fixture("registration").then((data) => {
      cy.wrap(data).as('user')
    });
  });
  it("Add Product cart verificaitonn", function () {
    registration.visit();
    checkpage.addtocart();
    cartpages.cartBtn();
    checkpage.CheckoutBtn();
    registration.enterUserDetails(this.user.name, this.user.email);
    registration.fillPasswordAndAddress(this.user.password, this.user.fname, this.user.lname)
    registration.submitForm()
    cartpages.cartBtn();
    checkpage.loginCheckoutBtn()
    checkpage.PaymentwithFixture()
    registration.deleteAccount()
    
  });
});
