class userLogout {
  loginWithFixture() {
    cy.fixture("logout").then((data) => {
      this.userdata = data;
      this.EnterUserDetails(this.userdata.email, this.userdata.password);
    });
  }
  EnterUserDetails(email, password) {
    cy.get("input[data-qa='login-email']").type(email);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[data-qa='login-button']").click();
    cy.wait(2000);
    cy.get(".login-form > form > p").should("be.visible");
  }

  logoutbtn(){
    cy.get("a[href='/logout']").click()
    cy.url().should("eq", "https://www.automationexercise.com/login")
  }
  
}

export default userLogout;
