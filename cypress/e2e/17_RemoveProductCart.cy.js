import RegistrationPage from "../Pages/Registration";
import CartPage from "../Pages/CartPage"
import productPage from "../Pages/product"



describe('Test Case 17: Remove Products From Cart', () => {
    const registration = new RegistrationPage();
    const cartpages = new CartPage()
    
    it('Remove product from cart', () => {
        registration.visit()
        cartpages.addtocart()
        cartpages.cartBtn()
        cartpages.viewCart()
        cartpages.productDelete()

    });
});