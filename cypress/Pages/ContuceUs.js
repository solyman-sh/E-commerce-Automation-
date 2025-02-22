class ContactUs {
  ContactWithFixture() {
    cy.fixture("contactus.json").then((data) => {
      this.condata = data;
      this.contactBtn(
        this.condata.name,
        this.condata.email,
        this.condata.subject,
        this.condata.message
      );
    });
  }

  contactBtn(name, email, subject, message) {
    cy.get("a[href='/contact_us']").click();
    cy.get("div[class='contact-form'] h2[class='title text-center']").should(
      "be.visible"
    );
    cy.get("input[placeholder='Name']").type(name);
    cy.get("input[placeholder='Email']").type(email);
    cy.get("input[placeholder='Subject']").type(subject);
    cy.get("#message").type(message);
    // cy.get("input[name='upload_file']").attachFile('1.png')
    cy.get("input[value='Submit']").click();
    cy.wait(3000);
    cy.get(".status.alert.alert-success").should("be.visible");
    cy.get(".btn.btn-success").click();
    cy.wait(3000);
    cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should(
      "be.visible"
    );
  }
}

export default ContactUs;
