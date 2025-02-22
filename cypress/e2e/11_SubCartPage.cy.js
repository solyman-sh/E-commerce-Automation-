import RegistrationPage from "../Pages/Registration"
import subsCription from "../Pages/subscriptionPage"
import CartPage from "../Pages/CartPage"
describe('Test Case 10: Verify Subscription in home page', () => {
    const registration = new RegistrationPage()
    const subcription = new subsCription()
    const cartpage = new CartPage()
    it('Subscription page verificaiton ', () => {
        registration.visit()
        cartpage.cartBtn()
        subcription.scroolBar()
    });
});