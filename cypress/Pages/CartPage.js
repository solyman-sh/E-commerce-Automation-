class CartPage {
  cartBtn() {
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
    cy.url().should("eq","https://www.automationexercise.com/view_cart")
  }

  addtocart(){
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click({ multiple: true, force: true })
    cy.get(".btn.btn-success.close-modal.btn-block").should('be.visible').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click({ multiple: true, force: true })
    cy.get('u').click()
    cy.wait(2000)

  }
  viewCart(){
    cy.get("tbody>tr").should('exist')
    cy.get("tbody>tr>td:nth-child(3)").should('be.visible')
    cy.get("tbody>tr>td:nth-child(4)").should('be.visible')
    cy.get("tbody>tr>td:nth-child(5)").should('be.visible')
  }
  productDelete(){
    cy.get("tbody>tr>td:nth-child(6) i").click({ multiple: true })
    cy.get("span[id='empty_cart'] p[class='text-center']").should('be.visible')
  }

  productAddtoCart(){
    cy.get("button[type='button']").click()
    cy.get('u').click()
  }
  addtocartPro(){
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    
  }

  
  
}
export default CartPage;
