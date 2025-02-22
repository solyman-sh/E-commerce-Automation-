class CategoryPage{
    categoryOpt(){
        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)").should('be.visible')
        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)").click()
        cy.get("a[href='/category_products/1']").should('be.visible').click()
        cy.get(".title.text-center").should('have.text', 'Women - Dress Products')
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
        cy.get("a[href='/category_products/3']").click()
        cy.get(".left-sidebar").should('be.visible')
    }
}
export default CategoryPage