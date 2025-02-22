
import userLogout from "../Pages/logout"
import UserLogin from "../Pages/login"


describe('Test Case 3: Login User with incorrect email and password', () => {
    const userlogout = new userLogout()
    const userlogin = new UserLogin()
    it('Incorrect login password', () => {
        userlogin.visit()
        userlogin.SignUpLoginBtn()
        userlogout.loginWithFixture()
    });
});