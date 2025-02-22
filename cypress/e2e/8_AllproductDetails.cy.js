
import RegistrationPage from "../Pages/Registration";
import productPage from "../Pages/product"
describe('Test Case 8: Verify All Products and product detail page', () => {
    
    const registration = new RegistrationPage()
    const Product = new productPage()


    it('Verify all product and details', () => {
        registration.visit()
        Product.productBtn()
        Product.viewProduct()
        Product.productDetails()
        
    });



});





