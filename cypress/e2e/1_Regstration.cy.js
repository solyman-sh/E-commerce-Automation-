import RegistrationPage from "../Pages/Registration";

describe("Test Case 1: Register User", () => {
  const registration = new RegistrationPage();

  beforeEach(() => {
    cy.fixture("registration").then((data) => {
      cy.wrap(data).as("user");
    });
  });
  it("should register user", function () {
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
          registration.fillPasswordAndAddress(this.user.password, this.user.fname, this.user.lname);
          registration.submitForm();
          cy.wait(2000);
          registration.deleteAccount()
      }
  });
  });
});
