class TestCases {
  testCaseOpt() {
    cy.get("header[id='header'] li:nth-child(5) a:nth-child(1)").click();
    cy.url().should("eq", "https://www.automationexercise.com/test_cases");
    cy.get("h2[class='title text-center'] b").should("be.visible");
  }
}

export default TestCases;
