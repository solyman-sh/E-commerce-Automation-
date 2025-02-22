class checkoutPage{
    addtocart(){
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
    }
    CheckoutBtn(){
        cy.get(".btn.btn-default.check_out").click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()
        cy.url().should("eq", "https://www.automationexercise.com/login")
        cy.get("div[class='signup-form'] h2").should("be.visible");
    }
    loginCheckoutBtn(){
        cy.get(".btn.btn-default.check_out").click()
        cy.get("section[id='cart_items'] div:nth-child(2) h2:nth-child(1)").should('have.text', "Address Details")
        cy.get("textarea[name='message']").type("thank you for your Purcher!")
        

    }

    PaymentwithFixture(){
        cy.fixture("payment").then((data)=>{
            this.userdata = data
            this.paymentBtn(
                this.userdata.name,
                this.userdata.cardnumber,
                this.userdata.cvc,
                this.userdata.month,
                this.userdata.years
            )
        })
    }

    paymentBtn(name, cardnumber,cvc,month, years){
        cy.get(".btn.btn-default.check_out").click()
        cy.url().should("eq", "https://www.automationexercise.com/payment")
        cy.get(".heading").should('be.visible')
        cy.get("input[name='name_on_card']").type(name)
        cy.get("input[name='card_number']").type(cardnumber)
        cy.get("input[placeholder='ex. 311']").type(cvc)
        cy.get("input[placeholder='MM']").type(month)
        cy.get("input[placeholder='YYYY']").type(years)
        cy.get("#submit").click()
        cy.get('.col-sm-9 > p').should('be.visible')
        cy.wait(2000)
        cy.get('[data-qa="continue-button"]').click()
    }

    PaymentwithFixtureInvoice(){
        cy.fixture("payment").then((data)=>{
            this.userdata = data
            this.paymentBtn(
                this.userdata.name,
                this.userdata.cardnumber,
                this.userdata.cvc,
                this.userdata.month,
                this.userdata.years
            )
        })
    }

    paymentBtninvoice(name, cardnumber,cvc,month, years){
        cy.get(".btn.btn-default.check_out").click()
        cy.url().should("eq", "https://www.automationexercise.com/payment")
        cy.get(".heading").should('be.visible')
        cy.get("input[name='name_on_card']").type(name)
        cy.get("input[name='card_number']").type(cardnumber)
        cy.get("input[placeholder='ex. 311']").type(cvc)
        cy.get("input[placeholder='MM']").type(month)
        cy.get("input[placeholder='YYYY']").type(years)
        cy.get("#submit").click()
        cy.get('.col-sm-9 > p').should('be.visible')
        cy.wait(2000)
        cy.get(".btn.btn-default.check_out").click()
        cy.get(".btn.btn-primary").click()
        // cy.get('[data-qa="continue-button"]').click()
    }
    



}
export default checkoutPage 