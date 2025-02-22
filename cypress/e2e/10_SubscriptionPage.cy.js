import RegistrationPage from "../Pages/Registration"
import subsCription from "../Pages/subscriptionPage"

describe('Test Case 10: Verify Subscription in home page', () => {
    const registration = new RegistrationPage()
    const subcription = new subsCription()

    it('Subscription page verificaiton ', () => {
        registration.visit()
        subcription.scroolBar()
    });
});