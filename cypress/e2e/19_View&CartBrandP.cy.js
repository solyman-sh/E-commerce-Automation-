import RegistrationPage from "../Pages/Registration";
import productPage from "../Pages/product"
describe('Test Case 19: View & Cart Brand Products', () => {
    const registration = new RegistrationPage();
    const product = new productPage()
    it('View & cart Product', () => {
        registration.visit()
        product.productBtn()
        product.BrandsOpt()
    });
    
});