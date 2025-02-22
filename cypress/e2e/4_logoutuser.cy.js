import userLogout from "../Pages/logout"
import UserLogin from "../Pages/login"

describe('Test Case 4: Logout User', () => {
    const userlogout = new userLogout()
    const userlogin = new UserLogin()
    it('Logout User', () => {
        userlogin.visit()
        userlogin.SignUpLoginBtn()
        userlogin.loginWithFixture()
        userlogout.logoutbtn()
    });
});