import RegistrationPage from "../Pages/Registration";
import CartPage from "../Pages/CartPage";
import checkoutPage from "../Pages/Checkout";

describe("Test Case 23: Verify address details in checkout page", () => {
  const registration = new RegistrationPage();
  const cartpages = new CartPage();
  const chekout = new checkoutPage();

  beforeEach(() => {
    cy.fixture("registration").then((data) => {
      cy.wrap(data).as("user");
    });
  });
  it("Verify address details", function () {
    // Visit the registration page
    registration.visit();
    // Attempt to log in
    registration.login();
    // Enter user details from fixture data
    registration.enterUserDetails(this.user.name, this.user.email);
    cy.get("body").then(($body) => {
      if ($body.find("p:contains('Email Address already exist!')").length > 0) {
        cy.log("Email already exists! Skipping registration.");
      } else {
        registration.fillPasswordAndAddress(
          this.user.password,
          this.user.fname,
          this.user.lname
        );
        registration.submitForm();
        cartpages.addtocartPro();
        cartpages.cartBtn();
        chekout.loginCheckoutBtn();
        registration.deleteAccount();
      }
    });
  });
});
