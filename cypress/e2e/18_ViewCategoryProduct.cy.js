import RegistrationPage from "../Pages/Registration";
import CategoryPage from "../Pages/Categories"
describe("Test Case 18: View Category Products", () => {
  const registration = new RegistrationPage();
  const categories = new CategoryPage()
  it("Categories Page verifycation", () => {
    registration.visit()
    categories.categoryOpt()

  });
});