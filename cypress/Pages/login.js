class UserLogin {
  visit() {
    cy.visit("https://www.automationexercise.com/");
    cy.url().should("eq", "https://www.automationexercise.com/");
    // home page visible
    cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should(
      "be.visible"
    );
  }
  SignUpLoginBtn() {
    cy.get("a[href='/login']").click();
    cy.get("div[class='login-form'] h2").should("be.visible");
  }

  loginWithFixture() {
    cy.fixture("login").then((data) => {
      this.userdata = data;
      this.EnterUserDetails(this.userdata.email, this.userdata.password);
    });
  }
  EnterUserDetails(email, password) {
    cy.get("input[data-qa='login-email']").type(email);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[data-qa='login-button']").click();
    cy.wait(2000);
    cy.get("b").should("be.visible");
  }
  deleteAccount() {
    cy.get("a[href='/delete_account']").click();
    cy.get("h2[class='title text-center'] b").should(
      "have.text",
      "Account Deleted!"
    );
    cy.get('[data-qa="continue-button"]').click();
  }

  cartwithlogin(){
    cy.get("a[href='/login']").first().click()
    
  }

}




export default UserLogin;
