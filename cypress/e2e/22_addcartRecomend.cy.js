import RegistrationPage from "../Pages/Registration";
import subsCription from "../Pages/subscriptionPage"



describe('Test Case 21: Add review on product', () => {

    const registration = new RegistrationPage()
    const subscribe = new subsCription()
    it('Add review Product ', () => {
        registration.visit()
        subscribe.scrollviewBtn()
        subscribe.recomandationOpt()
    });
});