import RegistrationPage from "../Pages/Registration";
import productPage from "../Pages/product"



describe('Test Case 21: Add review on product', () => {

    const registration = new RegistrationPage()
    const product = new productPage()
    it('Add review Product ', () => {
        registration.visit()
        product.productBtn()
        product.viewProduct()
        product.ProductReview()
    });
});



