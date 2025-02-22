
import RegistrationPage from "../Pages/Registration"
import ContactUs from "../Pages/ContuceUs";

describe('Test Case 6: Contact Us Form', () => {
    const registration = new RegistrationPage()
    const contactus = new ContactUs()
    it('Verify Contact Us form ', () => {
        registration.visit()
        contactus.ContactWithFixture()
    });
});