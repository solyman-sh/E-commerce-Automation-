class RegistrationPage {
  visit() {
    cy.visit("https://www.automationexercise.com");
    cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')
  }
  login() {
    cy.get("a[href='/login']").should("be.visible").click();
    cy.get("div[class='signup-form'] h2").should("be.visible");
  }
  
  enterUserDetails(name, email) {
    cy.get("input[placeholder='Name']").type(name);
    cy.get("input[data-qa='signup-email']").type(email);
    cy.get("button[data-qa='signup-button']").click();
    
  }
  fillPasswordAndAddress(password, fname, lname) {
    cy.get("#password").type(password);
    cy.get("#days").select(5).should("have.value", "5"); // Days
    cy.get("#months").select("June").should("have.value", "6"); // Month
    cy.get("#years").select("1999").should("have.value", "1999"); // Years
    cy.get("#first_name").type(fname);
    cy.get("#last_name").type(lname);
    cy.get("#address1").type("123 Street, City");
    cy.get("#state").type("State Name");
    cy.get("#city").type("City Name");
    cy.get("#zipcode").type("12345");
    cy.get("#mobile_number").type("1234567890");
  }
  submitForm() {
    cy.get("button[data-qa='create-account']").click();
    cy.get("h2[class='title text-center'] b").should('be.visible')
    cy.get(".btn.btn-primary").should('exist').should('be.visible').click();
    cy.get("ul[class='nav navbar-nav'] li a b").should('be.visible')
    cy.wait(2000);
    
  }
  deleteAccount() {
    cy.get("a[href='/delete_account']").click();
    cy.get("h2[class='title text-center'] b").should(
      "have.text",
      "Account Deleted!"
    );
    cy.get('[data-qa="continue-button"]').click();
  }
}
export default RegistrationPage;

// class Registration {
//   registrationWithFixture() {
//     cy.fixture("registration").then((data) => {
//       this.setSignLoginBtn();
//       this.setName(data.name);
//       this.setEmail(data.email);
//       this.signUpButton();
//       this.pageVerify();
//       this.setGender();
//       this.setPassword(data.password);
//       this.setDay();
//       this.setMonth();
//       this.setYears();
//       this.setNewsletter();
//       this.setFastname(data.fname);
//       this.setLname(data.lname);
//       this.setCompany(data.company);
//       this.setAddress(data.address);
//       this.setAddress2(data.address2);
//       this.setCountry();
//       this.setState(data.state);
//       this.setCity(data.city);
//       this.setZip(data.zip);
//       this.setMobile(data.mobile);
//       this.setCreateAccbtn();
//       this.setHomepage();
//       this.setDeleteAcc()
//     });
//   }
//   setSignLoginBtn() {
//     cy.get("a[href='/login']").should("be.visible").click();
//   }

//   setName(name) {
//     cy.get("input[placeholder='Name']").type(name);
//   }

//   setEmail(email) {
//     cy.get("input[data-qa='signup-email']").type(email);
//   }

//   signUpButton() {
//     cy.wait(2000);
//     cy.get("button[data-qa='signup-button']").click()
//   }

//   // Registration form

//   pageVerify() {
//     cy.get(":nth-child(1) > b").should("be.visible");
//   }
//   setGender() {
//     cy.get("#id_gender1").should("be.visible").click();
//   }
//   setPassword(password) {
//     cy.get("#password").should("be.visible").type(password);
//   }

//   // Age verify
//   setDay() {
//     cy.get("#days").select(5).should("have.value", "5"); // Days
//   }
//   setMonth() {
//     cy.get("#months").select("June").should("have.value", "6"); // Month
//   }
//   setYears() {
//     cy.get("#years").select("1999").should("have.value", "1999"); // Years
//   }

//   setNewsletter() {
//     cy.get("#newsletter").click();
//   }
//   setOffer() {
//     cy.get("#optin").click();
//   }
//   setFastname(fname) {
//     cy.get("#first_name").type(fname);
//   }

//   setLname(lname) {
//     cy.get("#last_name").type(lname);
//   }
//   setCompany(company) {
//     cy.get("#company").type(company);
//   }
//   setAddress(address) {
//     cy.get("#address1").type(address);
//   }
//   setAddress2(address2) {
//     cy.get("#address2").type(address2);
//   }
//   setCountry() {
//     cy.get("#country").select("Canada").should("have.value", "Canada");
//   }
//   setState(state) {
//     cy.get("#state").type(state);
//   }
//   setCity(city) {
//     cy.get("#city").type(city);
//   }
//   setZip(zip) {
//     cy.get("#zipcode").type(zip);
//   }
//   setMobile(mobile) {
//     cy.get("#mobile_number").type(mobile);
//   }

//   setCreateAccbtn() {
//     cy.get("button[data-qa='create-account']").click();
//   }

//   // Account Verification
//   setHomepage() {
//     cy.get('[data-qa="account-created"]').contains("Account Created!");
//     cy.get('[data-qa="continue-button"]').click();
//   }
//   setDeleteAcc() {
//     cy.get("a[href='/delete_account']").click();
//     cy.get("h2[class='title text-center'] b").should(
//       "have.text",
//       "Account Deleted!"
//     );
//     cy.get('[data-qa="continue-button"]').click()
//   }
// }

// export default Registration;
