import RegistrationPage from "../Pages/Registration"
import productPage from "../Pages/product"
import CartPage from "../Pages/CartPage"
 
describe('Test Case 12: Add Products in Cart', () => {
    const registration = new RegistrationPage()
    const product = new productPage()
    const cartpages = new CartPage()
    it('Add Product cart verificaitonn', () => {
        registration.visit()
        product.viewProduct()
        product.productDetails()
        cartpages.productAddtoCart()
        cartpages.viewCart()

    });
});
