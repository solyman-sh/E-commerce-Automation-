import RegistrationPage from "../Pages/Registration";
import productPage from "../Pages/product";
import CartPage from "../Pages/CartPage";
import checkoutPage from "../Pages/Checkout";

describe("Test Case 24: Download Invoice after purchase order", () => {
  beforeEach(() => {
    cy.fixture("registration").then((data) => {
      cy.wrap(data).as("user");
    });
  });
  const registration = new RegistrationPage();
  const cartpages = new CartPage();
  const checkout = new checkoutPage();
  const product = new productPage();
  it("Download Invoice ", function()  {
    registration.visit();
    cartpages.addtocartPro();
    cartpages.cartBtn();
    checkout.CheckoutBtn();
    registration.enterUserDetails(this.user.name, this.user.email);
    registration.fillPasswordAndAddress(
      this.user.password,
      this.user.fname,
      this.user.lname
    );
    registration.submitForm();
    cartpages.cartBtn();
    checkout.loginCheckoutBtn();
    checkout.PaymentwithFixtureInvoice();
    registration.deleteAccount();

    // product.productBtn()
    // product.viewProduct()
    // product.ProductReview()
  });
});
