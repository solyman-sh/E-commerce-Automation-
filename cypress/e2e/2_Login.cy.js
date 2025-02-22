
import UserLogin from "../Pages/login";

describe('Test Case 2: Login User with correct email and password', () => {
  const userlogin = new UserLogin()

  it('Correct mail pass verificaiton for login ', () => {
    
      userlogin.visit()
      userlogin.SignUpLoginBtn()
      // userlogin.EnterUserDetails()
      userlogin.loginWithFixture()
      // userlogin.deleteAccount()
  });
    
});
