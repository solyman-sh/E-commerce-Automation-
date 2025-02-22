import RegistrationPage from "../Pages/Registration"
import productPage from "../Pages/product"

describe('Test Case 9: Search Product', () => {
    const registration = new RegistrationPage()
    const product = new productPage()
    it('Verify search Option ', () => {
        registration.visit()
        product.productBtn()
        product.searchProduct()
    });
});