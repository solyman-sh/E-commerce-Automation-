class subsCription{

    scroolBar (){
        cy.get("#footer").scrollIntoView({ duration: 7000 }, { easing: 'linear' })
        cy.get("div[class='single-widget'] h2").should('have.text', 'Subscription')
        cy.get("#susbscribe_email").type("email@gmail.com")
        cy.get("#subscribe").click()
        cy.get(".alert-success.alert").should('be.visible')
    }
    scrollviewBtn(){
        cy.get("#footer").scrollIntoView({ duration: 7000 }, { easing: 'linear' })
    }
    recomandationOpt(){
        cy.get("div[class='recommended_items'] h2[class='title text-center']").should("be.visible")
        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)").click()
        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)").click()
        cy.get("#cart_info").should('exist')

    }
    subscripitonfield(){
        cy.get("div[class='single-widget'] h2").should('be.visible')
        cy.get(".fa.fa-angle-up").click()
        cy.get("div[class='item active'] div[class='col-sm-6'] h2").should('have.text', 'Full-Fledged practice website for Automation Engineers')

    }
    scroolUp(){
        cy.get("#header").scrollIntoView()
    }
}
export default subsCription