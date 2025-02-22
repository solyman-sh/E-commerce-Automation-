import RegistrationPage from "../Pages/Registration"
import TestCases from "../Pages/TestCasePage";

describe('Test Case 7: Verify Test Cases Page', () => {
    const registration = new RegistrationPage()
    const testcases = new TestCases()
    it('Verify test case page', () => {
        registration.visit()
        testcases.testCaseOpt()
    });
    
});