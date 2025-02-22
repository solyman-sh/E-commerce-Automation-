import RegistrationPage from "../Pages/Registration";
import subsCription from "../Pages/subscriptionPage"
describe('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    const registration = new RegistrationPage();
    const subcripe = new subsCription()
    it('Scrool Up and down', () => {
        registration.visit()
        subcripe.scrollviewBtn()
        subcripe.subscripitonfield()
    });
});