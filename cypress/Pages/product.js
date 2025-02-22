class productPage{
    
    productBtn(){
        cy.get("a[href='/products']").should('be.visible').click()
        cy.url().should("eq", "https://www.automationexercise.com/products")
        cy.get(".title.text-center").should('be.visible')
        
    }
    viewProduct(){
        cy.get(".features_items").should('be.visible')  
        cy.get("a[href='/product_details/1']").click()
        
    }
    productDetails(){
        cy.get("div[class='product-information'] h2").should('be.visible')
        cy.get("div[class='product-information'] span span").should('be.visible')
        cy.get("#quantity").clear().type("4")
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(6)").should('be.visible')
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(7) > b:nth-child(1)").should('be.visible')
        cy.get(':nth-child(8) > b').should('be.visible')
    }
    searchProduct(){
        cy.get("#search_product").type('tshirt')
        cy.get(".title.text-center").should('be.visible')
        cy.get('p').should('be.visible')
    }

    BrandsOpt(){
        cy.get("div[class='brands_products'] h2").should('be.visible')
        cy.get(".brands-name>ul>li:nth-child(2)").click()
        cy.get(".title.text-center").should('be.visible')
        cy.get("a[href='/brand_products/Kookie Kids']").click()
        cy.get(".title.text-center").should('be.visible')
    }

    ProductReview(){
        cy.get("a[href='#reviews']").should('be.visible')
        cy.get("#name").type("akssh")
        cy.get("#email").type("abc@gmail.com")
        cy.get("#review").type("this product is cool")
        cy.get("#button-review").click()
        cy.get("div[class='alert-success alert'] span").should("be.visible")
    }
    
}
export default productPage